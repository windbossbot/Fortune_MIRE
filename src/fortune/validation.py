"""Validation guards for external numeric inputs."""

from __future__ import annotations

from collections.abc import Iterable
from math import isnan
from statistics import mean, pstdev


class ValidationError(ValueError):
    """Raised when inbound data fails safety checks."""


def validate_price(value: float, *, upper_bound: float = 1e10) -> float:
    """Validate a price-like numeric value."""

    if value is None or isnan(value):
        raise ValidationError("Price is missing or NaN.")
    if value <= 0 or value >= upper_bound:
        raise ValidationError(f"Price {value} is outside the allowed range.")
    return value


def validate_balance(value: float) -> float:
    """Validate a balance-like numeric value."""

    if value is None or isnan(value):
        raise ValidationError("Balance is missing or NaN.")
    if value < 0:
        raise ValidationError(f"Balance {value} cannot be negative.")
    return value


def detect_outlier(values: Iterable[float], candidate: float, *, z_threshold: float = 3.0) -> bool:
    """Return whether `candidate` is a suspicious outlier by z-score."""

    series = list(values)
    if len(series) < 2:
        return False
    sigma = pstdev(series)
    if sigma == 0:
        return False
    return abs((candidate - mean(series)) / sigma) > z_threshold
