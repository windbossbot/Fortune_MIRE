# One-Click Composite Fortune Design

## Goal

- The user presses one button once.
- The system draws several small fortune signals at the same time.
- The final output feels like one coherent reading, not a pile of separate mini-games.
- The design is for personal use first, with the option to turn it into a public web service later.

## Core idea

One reading should combine multiple layers:

1. Main symbolic result
2. Current flow
3. External luck
4. Action advice
5. Caution

The user only sees one final reading page.
The internal engine may combine several random systems.

## Recommended engine structure

### Layer 1. Main card

- Purpose: define the overall tone of the reading
- Best candidate: one-card tarot
- Reason:
  - rich symbolism
  - one draw is enough
  - easy to interpret as theme, energy, or state

Output fields:

- card_name
- card_arcana_or_group
- summary
- positive_side
- shadow_side

### Layer 2. Direction coin

- Purpose: show momentum or direction
- Method: three-state coin logic
- States:
  - rise
  - hold
  - release

Meaning:

- rise: move, try, speak, begin
- hold: observe, stabilize, protect, wait
- release: stop, clear, end, let go

Output fields:

- direction_state
- direction_summary

### Layer 3. Situation hexagram-lite

- Purpose: add context depth without requiring full classical I Ching interpretation
- Method: simplified hexagram family or curated 8-trigram system
- Recommendation:
  - use 8 trigrams first, not full 64 hexagrams
- Reason:
  - easier content burden
  - still gives atmosphere and situational framing

Suggested states:

- heaven
- lake
- fire
- thunder
- wind
- water
- mountain
- earth

Output fields:

- trigram_name
- situation_theme
- situation_advice

### Layer 4. Daily fortune score

- Purpose: make the result feel immediately usable
- Method: weighted random score or tier
- Format:
  - overall luck: 1 to 5
  - love/social: 1 to 5
  - work/focus: 1 to 5
  - money: 1 to 5

Output fields:

- overall_score
- love_score
- work_score
- money_score

### Layer 5. Closing oracle line

- Purpose: leave one memorable sentence
- Method: draw one short custom line from a curated set
- Tone:
  - calm
  - sharp
  - reflective
  - not too vague

Output fields:

- oracle_line

## Final reading assembly

The final reading should not expose all layers equally.
It should read like one interpretation.

Recommended final structure:

### 1. Headline

- Example:
  - Today asks for a careful but brave step.
  - A pause now protects a better opening later.

Built mainly from:

- main card
- direction coin

### 2. Core interpretation

- What energy surrounds the user now
- What kind of movement is favored
- What emotional tone is present

Built from:

- main card
- trigram

### 3. Practical advice

- What to do today
- What to avoid today
- Where luck opens more easily

Built from:

- direction coin
- fortune scores

### 4. Compact area summary

- Love/social
- Work/focus
- Money

Built from:

- fortune scores

### 5. Closing sentence

- The oracle line

## Personal-use display format

For solo use, the result screen can be denser than a public product.

Recommended layout:

1. Main message
2. Main card
3. Direction state
4. Situation trigram
5. Scores
6. Advice
7. Warning
8. Oracle line

This lets you see both:

- the polished final reading
- the raw components used to generate it

## Suggested randomization rule

Use independent draws, then resolve conflicts in the final writer.

Example draw flow:

1. Draw 1 tarot card
2. Draw 1 direction state
3. Draw 1 trigram
4. Generate category scores
5. Draw 1 oracle line

Then apply a resolver:

- If the tarot card is active but direction is hold:
  - interpret as restrained action
- If the card is dark and the score is high:
  - interpret as growth through tension
- If the card is bright and direction is release:
  - interpret as success through simplification

## Conflict resolution rules

Multiple fortune systems should create nuance, not contradiction.

Priority order:

1. Main card
2. Direction state
3. Trigram situation
4. Scores
5. Oracle line

Rules:

- The main card defines the emotional center.
- The direction state defines movement.
- The trigram defines the surrounding environment.
- Scores only color the practical areas.
- The oracle line should reinforce the final tone, not introduce a new one.

## Minimal MVP dataset size

Recommended starting content:

- Tarot: 22 Major Arcana only
- Direction states: 3
- Trigrams: 8
- Oracle lines: 40 to 60

This is enough to create many combinations without overwhelming content work.

## Why this is better than showing every fortune system separately

- one click stays simple
- interpretation feels more intentional
- the reading feels personal rather than mechanical
- you avoid the clutter of separate mini results

## Example reading shape

### Raw draw

- Card: The Hermit
- Direction: Hold
- Trigram: Mountain
- Scores: overall 3, love 2, work 4, money 3
- Oracle line: What waits in silence becomes clearer.

### Final reading

- Headline:
  - Today favors quiet judgment over immediate action.
- Interpretation:
  - Your energy is turned inward. This is less a day for expansion than for careful sorting and honest self-checking.
- Advice:
  - Protect your focus, reduce noise, and review what truly matters before acting.
- Caution:
  - Do not mistake delay for failure. Pushing for quick proof may weaken your position.
- Area summary:
  - Love/social: sensitivity is high, so respond softly.
  - Work/focus: strong for research, editing, planning.
  - Money: neutral, better for review than spending.
- Closing:
  - What waits in silence becomes clearer.

## Recommended next design step

Build the first content system with:

1. 22-card Major Arcana dataset
2. 3 direction states
3. 8 trigrams
4. 50 oracle lines

After that, define a result schema and a simple renderer.
