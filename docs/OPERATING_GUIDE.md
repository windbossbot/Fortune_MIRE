# Fortune Service Operating Guide

## 1. Scope

- This repository is the only allowed working boundary.
- Do not create, modify, or delete files outside `C:\Users\KGWPC\workspace\fortune`.
- If system-level setup is ever needed later, treat it as an explicit exception and document it first.

## 2. Product direction

- The product goal is a web-based fortune experience.
- The first implementation target is not a full traditional reading engine.
- The preferred interaction is a simple click or tap that returns one result with a clean interpretation.
- The reading should feel meaningful, but it should not require heavy expert-level manual interpretation.

## 3. Current phase

- Phase 1: list and evaluate fortune methods suitable for simple web interaction.
- Phase 2: choose 1 to 3 methods for MVP.
- Phase 3: define result structure, tone, and content templates.
- Phase 4: build the web frontend and rendering flow.

## 4. Repository operating rules

- Keep all planning, specs, copy, prompts, and assets inside this repository.
- Prefer `docs/` for planning and decision records.
- Prefer incremental edits over rewrites.
- Record meaningful milestones in `CHANGELOG.md`.
- Keep secrets out of the repository and use `.env`.

## 5. MVP selection criteria for fortune methods

- One interaction should be enough to produce a result.
- The randomization rule should be easy to explain to users.
- The result set should be finite and manageable.
- Each result should support short, useful interpretation text.
- The method should work well on mobile and desktop.
- The method should not depend on collecting sensitive personal data.
- The method should be culturally recognizable or immediately understandable.

## 6. Content design rules

- Every reading should contain:
  - result name
  - one-line summary
  - overall interpretation
  - today or current-phase advice
  - caution point
- Keep tone calm, readable, and lightly mystical without sounding fake or exaggerated.
- Avoid deterministic claims such as guaranteed success, health diagnosis, or legal certainty.
- Treat readings as reflective guidance, not factual prediction.

## 7. Safety and policy direction

- Do not present the product as medical, legal, or financial advice.
- Add a lightweight disclaimer before launch.
- Avoid exploitative patterns such as fear-based upsell or forced urgency.
- Minimize user input. Random-draw formats are preferred in the early version.

## 8. Technical direction for later web build

- Start with static result data and deterministic rendering.
- Separate random draw logic from interpretation content.
- Keep content in structured data files so the frontend can swap methods easily.
- Design the renderer so one method can be replaced without changing the whole app.

## 9. Immediate next outputs

- Maintain the shortlist in `docs/FORTUNE_METHODS.md`.
- After selecting methods, create:
  - result schema
  - copywriting tone guide
  - MVP screen flow
