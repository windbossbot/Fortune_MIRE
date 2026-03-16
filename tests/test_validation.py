import pytest

from fortune.validation import ValidationError, detect_outlier, validate_balance, validate_price


def test_validate_price_rejects_out_of_range_values() -> None:
    with pytest.raises(ValidationError):
        validate_price(0)


def test_validate_balance_rejects_negative_values() -> None:
    with pytest.raises(ValidationError):
        validate_balance(-1)


def test_detect_outlier_flags_suspicious_value() -> None:
    assert detect_outlier([10.0, 10.2, 9.9, 10.1], 50.0) is True
