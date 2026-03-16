# Composite Fortune Rules

## Goal

- Generate one composite reading from a single click.
- Use a small set of symbolic draws to produce many fortune categories.
- Keep each category distinct enough to feel useful.
- Add a final `개운법` section so the result is not only descriptive but actionable.

## Base symbolic engine

Use one draw cycle:

1. Main card
2. Direction state
3. Situation trigram
4. Score set
5. Oracle line

## Symbol roles

### Main card

- Defines the emotional center and main narrative tone.
- Best for:
  - 전체 흐름운
  - 감정운
  - 소원운
  - 개운법의 핵심 태도

### Direction state

- Defines movement:
  - 밀기
  - 유지
  - 정리
- Best for:
  - 행동운
  - 결정운
  - 기회운
  - 주의운
  - 개운법의 행동 방식

### Situation trigram

- Defines environmental context and atmosphere.
- Best for:
  - 대인관계운
  - 커뮤니케이션운
  - 이동운
  - 건강/컨디션운
  - 행운 포인트 일부

### Score set

- Defines practical intensity per category.
- Best for:
  - 연애운
  - 금전운
  - 일/공부운
  - 건강/컨디션운
  - 기회운 보정

### Oracle line

- Defines the closing emotional message.
- Best for:
  - 전체 리딩 마감
  - 소원운 보정
  - 개운법 마무리 문장

## Fortune category mapping

### 1. 전체 흐름운

- Primary source: main card
- Secondary source: direction state
- Support: oracle line

Rule:

- The card gives the main atmosphere.
- The direction gives whether today opens, pauses, or clears.
- The oracle line gives final tone.

### 2. 연애운

- Primary source: score `love`
- Secondary source: main card
- Support: trigram

Rule:

- Love score determines strength.
- The card defines emotional style.
- The trigram defines relationship atmosphere.

### 3. 금전운

- Primary source: score `money`
- Secondary source: direction state
- Support: trigram

Rule:

- Money score determines stability or caution.
- Direction decides spend, hold, or reduce.
- Trigram colors practical context.

### 4. 일/공부운

- Primary source: score `work`
- Secondary source: main card
- Support: direction state

Rule:

- Work score defines current usable focus.
- The card defines motivation style.
- Direction decides push, maintain, or simplify.

### 5. 건강/컨디션운

- Primary source: derived vitality score
- Secondary source: trigram
- Support: main card

Rule:

- Use card tone and trigram atmosphere to infer body rhythm.
- If card is inward or heavy, lower stamina interpretation.
- If trigram is earth or mountain, emphasize recovery and grounding.

### 6. 대인관계운

- Primary source: trigram
- Secondary source: score `love`
- Support: direction state

Rule:

- Trigram defines social environment.
- Love score acts as warmth or friction modifier.
- Direction determines whether to approach, observe, or reduce contact.

### 7. 행동운

- Primary source: direction state
- Secondary source: main card

Rule:

- This category is the clearest translation of the direction state.
- The card adds nuance:
  - active card + 상승 = 지금 밀어도 좋음
  - inward card + 유지 = 준비와 정비 우선
  - heavy card + 정리 = 과감한 정리가 맞음

### 8. 기회운

- Primary source: direction state
- Secondary source: score `overall`
- Support: trigram

Rule:

- Direction determines whether opportunity enters through action, patience, or release.
- Overall score determines size of chance.
- Trigram determines area of entry.

### 9. 주의운

- Primary source: main card shadow
- Secondary source: lowest score
- Support: direction state caution

Rule:

- Use the card shadow as the main warning.
- Use the lowest score category as the practical risk zone.
- Use direction caution as behavioral warning.

### 10. 행운 포인트

- Primary source: trigram
- Secondary source: direction state
- Support: card tone

Rule:

- Trigram decides direction, place, and atmosphere.
- Direction decides timing style.
- Card tone decides color family.

Suggested generation:

- favorable time
- favorable color
- favorable direction
- favorable place
- lucky number

### 11. 소원운

- Primary source: main card
- Secondary source: oracle line
- Support: score `overall`

Rule:

- The card defines whether the wish is ripe, delayed, transforming, or unstable.
- Oracle line gives emotional guidance.
- Overall score adjusts closeness.

### 12. 감정운

- Primary source: main card tone
- Secondary source: score `love`
- Support: trigram

Rule:

- Card tone defines base emotional climate.
- Love score defines softness or sensitivity.
- Trigram adds surrounding emotional weather.

### 13. 결정운

- Primary source: direction state
- Secondary source: main card
- Support: score `overall`

Rule:

- Direction determines act now, wait, or cut away.
- The card defines confidence or hesitation style.
- Overall score determines whether timing supports clarity.

### 14. 이동운

- Primary source: trigram
- Secondary source: direction state
- Support: score `overall`

Rule:

- Trigram defines movement environment.
- Direction decides whether moving helps or drains.
- Overall score determines smoothness.

### 15. 커뮤니케이션운

- Primary source: trigram
- Secondary source: score `love`
- Support: main card

Rule:

- Trigram determines how messages move.
- Love score affects warmth and misunderstanding probability.
- The card defines tone of expression.

### 16. 신점

- Primary source: oracle line
- Secondary source: main card
- Support: direction state

Rule:

- This section should feel like a short final spiritual message, not a practical category score.
- The oracle line is the core voice.
- The main card gives symbolic weight.
- The direction state decides whether the message leans toward action, patience, or release.

Output style:

- short
- direct
- symbolic
- slightly solemn
- not overly technical

Recommended role:

- place this at the very bottom of the full reading
- treat it as a final message rather than another score block
- let it feel like “the last word” of the reading

Suggested format:

- 신점 한마디
- 신점 메시지
- 받들어야 할 기운

Suggested generation pattern:

- opening call:
  - 지금 들어오는 기운은
  - 오늘 네 앞에 선 뜻은
  - 지금 붙는 신호는
- symbolic body:
  - card + oracle line combination
- closing instruction:
  - 서두르지 말라
  - 먼저 움직여라
  - 말보다 마음을 고르게 하라
  - 끝낼 것을 끝내라

Example:

- 지금 네 앞에 선 뜻은 멈춤 속에서 더 분명해지는 기운이다. 조급히 결론 내리지 말고, 먼저 안쪽의 마음을 가지런히 하라.

## 개운법 design

## Purpose

- Turn the reading into action.
- Prevent the reading from feeling passive or fatalistic.
- Give the user something simple to actually do today.

## Structure

Every reading should produce 3 kinds of 개운법:

1. attitude remedy
2. action remedy
3. environment remedy

### 1. Attitude remedy

- Source: main card
- Role: what mindset improves flow

Examples:

- pause before reacting
- simplify your expectations
- act before overthinking
- protect your center

### 2. Action remedy

- Source: direction state
- Role: what kind of movement brings luck

Examples:

- send one message
- postpone one unstable decision
- clean one area
- finish one pending task

### 3. Environment remedy

- Source: trigram + lucky point
- Role: how to tune space and routine

Examples:

- face east when planning
- wear calm earth tones
- reduce noise and clutter
- spend time near open air or sunlight

## 개운법 generation rules

### If direction is 상승

- 개운법 should favor movement, contact, start, expression.

### If direction is 유지

- 개운법 should favor order, breathing room, pacing, checking.

### If direction is 정리

- 개운법 should favor release, cleanup, ending, simplifying.

### If trigram is heaven

- emphasize broad view, open sky, clarity, upper direction.

### If trigram is lake

- emphasize pleasant talk, beauty, softness, social warmth.

### If trigram is fire

- emphasize visibility, sunlight, expression, brightness.

### If trigram is thunder

- emphasize speed, momentum, decisive first step.

### If trigram is wind

- emphasize ventilation, gentle movement, subtle influence.

### If trigram is water

- emphasize caution, emotional steadiness, clean flow, quietness.

### If trigram is mountain

- emphasize stillness, boundaries, posture, focus.

### If trigram is earth

- emphasize grounding, food, sleep, routine, stability.

## Recommended output format

- 전체 흐름운
- 연애운
- 금전운
- 일/공부운
- 건강/컨디션운
- 대인관계운
- 행동운
- 기회운
- 주의운
- 행운 포인트
- 소원운
- 감정운
- 결정운
- 이동운
- 커뮤니케이션운
- 개운법
- 신점

## Recommended 개운법 output format

- 오늘의 개운 태도
- 오늘의 개운 행동
- 오늘의 개운 환경

## Example

### Draw

- Card: The Hermit
- Direction: 유지
- Trigram: Mountain
- Overall: 2
- Love: 2
- Work: 4
- Money: 3
- Oracle: What waits in silence becomes clearer.

### Derived 개운법

- 오늘의 개운 태도:
  - 조급하게 결론 내리지 말고 안쪽의 판단을 먼저 믿기
- 오늘의 개운 행동:
  - 오늘 꼭 필요한 한 가지 일만 깊게 끝내기
- 오늘의 개운 환경:
  - 소음을 줄이고 정리된 자리에서 혼자 집중할 시간 만들기
