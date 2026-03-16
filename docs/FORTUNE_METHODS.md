# Fortune Methods for a Simple Click-Based Web Experience

## Selection standard

This list focuses on methods that are:

- easy to trigger with one click or tap
- easy to randomize fairly
- compact enough to write solid interpretations
- meaningful enough that users can treat them as a usable light-reading experience

## Tier A: best fit for MVP

### 1. One-card tarot

- Interaction: shuffle and draw 1 card
- Result count: 78 cards, or reduce to Major Arcana 22 cards for lighter MVP
- Why it works:
  - users already understand the idea of “pick one card”
  - each card has strong symbolic identity
  - interpretation can cover mood, current energy, advice, and caution
- Web fit: excellent
- Content effort: medium
- MVP note: strongest all-around choice

### 2. I Ching single hexagram

- Interaction: coin toss simulation to generate 1 hexagram
- Result count: 64 hexagrams
- Why it works:
  - random generation has ritual feeling
  - each hexagram supports broad life interpretation
  - good for “current situation + advice” structure
- Web fit: very good
- Content effort: medium to high
- MVP note: excellent if you want slightly deeper atmosphere than tarot

### 3. Fortune coin toss

- Interaction: yes/no or 3-way coin outcome with themed interpretation
- Result count: very small unless expanded into custom symbolic outcomes
- Why it works:
  - fastest possible interaction
  - extremely easy to build
  - good as a playful daily luck feature
- Web fit: excellent
- Content effort: low
- MVP note: better as a side feature than the main product

### 4. Daily oracle card

- Interaction: draw 1 message card from a custom deck
- Result count: flexible, usually 24 to 60 cards
- Why it works:
  - easiest to control tone and brand identity
  - no strict traditional rules needed
  - interpretations can be concise and elegant
- Web fit: excellent
- Content effort: medium
- MVP note: best if you want original IP instead of borrowing known systems

### 5. Zodiac sign daily reading

- Interaction: choose or auto-select zodiac sign, then draw daily message
- Result count: 12 signs x daily templates
- Why it works:
  - familiar and easy for users
  - works well with short copy
  - low barrier to entry
- Web fit: excellent
- Content effort: low to medium
- MVP note: useful as a lightweight repeat-visit feature

## Tier B: good but needs more structure

### 6. Runes

- Interaction: draw 1 rune
- Result count: around 24 runes
- Why it works:
  - symbolic and compact
  - one-draw interpretation is natural
- Web fit: very good
- Content effort: medium
- Caution: less mainstream than tarot, so onboarding copy matters

### 7. Ogham or symbolic alphabet divination

- Interaction: draw 1 symbol
- Result count: manageable
- Why it works:
  - minimal UI
  - poetic and atmospheric
- Web fit: good
- Content effort: medium
- Caution: lower recognition for general users

### 8. Bibliomancy-style phrase draw

- Interaction: random line or passage draw from a curated text set
- Result count: flexible
- Why it works:
  - easy to implement
  - highly shareable if the writing is good
- Web fit: very good
- Content effort: high, because writing quality matters most
- Caution: strongest when the content library is original and carefully curated

### 9. Three-outcome fate draw

- Interaction: draw one of three states such as rise, hold, release
- Result count: small core set, expandable with variants
- Why it works:
  - simple but surprisingly usable
  - ideal for users asking “what energy should I take today?”
- Web fit: excellent
- Content effort: low to medium
- Caution: can feel shallow unless copy quality is strong

## Tier C: possible later, but not first

### 10. Full natal astrology

- Why not first:
  - requires birth data
  - much heavier interpretation engine
  - more sensitive user input
- Better use: later premium or advanced feature

### 11. Four pillars, saju, or detailed horoscope systems

- Why not first:
  - deeper domain logic
  - user expects stronger accuracy and tradition
  - interpretation burden is much higher
- Better use: later specialized track

### 12. Complex multi-card spreads

- Why not first:
  - more content per result
  - more UI complexity
  - slower first-time experience
- Better use: expansion after one-card flow works

## Recommended MVP shortlist

### Best core candidates

- One-card tarot
- I Ching single hexagram
- Daily oracle card

### Best support features

- Fortune coin toss
- Zodiac sign daily reading

## Recommended product strategy

### Option A: easiest launch

- Main: one-card tarot
- Secondary: daily zodiac reading
- Bonus: coin toss quick fortune

Why:

- easiest for users to understand
- easy to design attractively
- enough symbolic depth without massive content burden

### Option B: more distinctive atmosphere

- Main: I Ching single hexagram
- Secondary: custom oracle card
- Bonus: three-outcome fate draw

Why:

- feels more ritualistic and unique
- stronger brand personality
- still manageable as a web MVP

### Option C: original IP first

- Main: custom oracle card deck
- Secondary: coin toss quick fortune
- Bonus: zodiac daily reading

Why:

- easiest to own the tone and brand
- less constraint from traditional systems
- fastest path to differentiated content

## My recommendation right now

If the goal is a simple but convincing first web experience:

1. Start with one-card tarot.
2. Add coin toss quick fortune as a playful low-friction entry point.
3. Keep I Ching as the next deeper mode after MVP.

That combination gives:

- immediate familiarity
- simple UI
- strong interpretation potential
- room to grow into a richer fortune product later
