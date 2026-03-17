const tarotCards = [
  {
    name: "The Fool",
    group: "Major Arcana",
    summary: "새로운 문턱 앞에서 두려움보다 호기심이 앞서는 카드입니다.",
    positive: "가볍게 시작할 용기, 예상 밖의 기회, 신선한 감각",
    shadow: "준비 부족, 충동성, 끝을 보지 못한 출발",
    tone: "bright",
    energy: "new-beginning",
  },
  {
    name: "The Magician",
    group: "Major Arcana",
    summary: "의지와 기술을 연결해 현실로 끌어내는 힘이 깨어납니다.",
    positive: "집중력, 설계 능력, 실행력, 자원 활용",
    shadow: "과도한 통제, 과시, 능력 과신",
    tone: "bright",
    energy: "manifestation",
  },
  {
    name: "The High Priestess",
    group: "Major Arcana",
    summary: "겉보다 안쪽의 감각이 더 정확하게 말해 주는 흐름입니다.",
    positive: "직관, 숨은 정보, 침착한 관찰, 내면의 질서",
    shadow: "닫힌 마음, 지나친 침묵, 우유부단",
    tone: "mist",
    energy: "intuition",
  },
  {
    name: "The Empress",
    group: "Major Arcana",
    summary: "풍요와 돌봄, 감각적 안정이 주변을 부드럽게 감쌉니다.",
    positive: "성장, 매력, 휴식, 관계의 온기",
    shadow: "안일함, 과소비, 감정적 과보호",
    tone: "bright",
    energy: "abundance",
  },
  {
    name: "The Emperor",
    group: "Major Arcana",
    summary: "질서를 세우고 경계를 분명히 할수록 힘이 모이는 카드입니다.",
    positive: "구조화, 책임감, 보호, 전략적 판단",
    shadow: "경직, 지배욕, 융통성 부족",
    tone: "ember",
    energy: "structure",
  },
  {
    name: "The Hierophant",
    group: "Major Arcana",
    summary: "전통, 규칙, 배움의 체계 안에서 답을 찾기 쉬운 때입니다.",
    positive: "조언 수용, 기준 정립, 신뢰 가능한 관습",
    shadow: "고정관념, 답습, 자기 감각 억압",
    tone: "gold",
    energy: "tradition",
  },
  {
    name: "The Lovers",
    group: "Major Arcana",
    summary: "선택과 조화가 동시에 들어와 마음의 방향을 묻는 카드입니다.",
    positive: "유대감, 정렬, 진심 어린 선택, 끌림",
    shadow: "갈등, 미결정, 감정 의존",
    tone: "rose",
    energy: "connection",
  },
  {
    name: "The Chariot",
    group: "Major Arcana",
    summary: "흩어진 힘을 한 방향으로 묶으면 전진력이 크게 올라갑니다.",
    positive: "주도권, 속도, 목표 집중, 돌파력",
    shadow: "무리한 압박, 조급함, 승부 집착",
    tone: "ember",
    energy: "momentum",
  },
  {
    name: "Strength",
    group: "Major Arcana",
    summary: "강하게 누르기보다 부드럽게 다루는 힘이 필요한 순간입니다.",
    positive: "내적 강인함, 절제, 따뜻한 리더십",
    shadow: "억눌린 분노, 체력 소모, 버티기만 하는 상태",
    tone: "gold",
    energy: "gentle-power",
  },
  {
    name: "The Hermit",
    group: "Major Arcana",
    summary: "속도를 줄이고 안쪽의 빛을 따라가야 할 때를 말합니다.",
    positive: "성찰, 집중, 정리, 조용한 통찰",
    shadow: "고립감, 지나친 후퇴, 세상과의 거리",
    tone: "mist",
    energy: "retreat",
  },
  {
    name: "Wheel of Fortune",
    group: "Major Arcana",
    summary: "바깥의 흐름이 예상보다 빠르게 바뀌며 판을 흔드는 카드입니다.",
    positive: "전환점, 우연한 기회, 흐름의 회복",
    shadow: "예측 불가, 기복, 중심 상실",
    tone: "gold",
    energy: "turning-point",
  },
  {
    name: "Justice",
    group: "Major Arcana",
    summary: "감정보다 균형과 판단 근거가 더 중요해지는 흐름입니다.",
    positive: "명료함, 공정성, 계약과 정리, 균형 감각",
    shadow: "차가움, 자기비판, 계산적인 태도",
    tone: "mist",
    energy: "balance",
  },
  {
    name: "The Hanged Man",
    group: "Major Arcana",
    summary: "잠시 멈춤이 오히려 시야를 바꾸고 다음 수를 열어 줍니다.",
    positive: "관점 전환, 유예의 지혜, 집착 해제",
    shadow: "정체감, 희생감, 풀리지 않는 답답함",
    tone: "mist",
    energy: "pause",
  },
  {
    name: "Death",
    group: "Major Arcana",
    summary: "끝내야 시작되는 흐름이 분명해지는 전환 카드입니다.",
    positive: "정리, 재생, 과감한 단절, 새 국면",
    shadow: "상실감, 변화 저항, 감정적 동요",
    tone: "ember",
    energy: "ending",
  },
  {
    name: "Temperance",
    group: "Major Arcana",
    summary: "서로 다른 흐름을 부드럽게 섞어 균형을 만드는 카드입니다.",
    positive: "조율, 회복, 부드러운 협력, 절도",
    shadow: "미지근함, 결단 미룸, 너무 무난한 선택",
    tone: "gold",
    energy: "integration",
  },
  {
    name: "The Devil",
    group: "Major Arcana",
    summary: "매혹과 집착, 반복되는 패턴을 직면해야 하는 카드입니다.",
    positive: "욕망 인식, 본능의 힘, 문제의 실체 파악",
    shadow: "중독, 집착, 관계나 소비의 과열",
    tone: "ember",
    energy: "attachment",
  },
  {
    name: "The Tower",
    group: "Major Arcana",
    summary: "기존 구조가 갑자기 흔들리며 진짜 상태를 드러냅니다.",
    positive: "허상 붕괴, 급진적 정리, 진실 노출",
    shadow: "충격, 불안, 계획 붕괴",
    tone: "ember",
    energy: "disruption",
  },
  {
    name: "The Star",
    group: "Major Arcana",
    summary: "한 번 탁해졌던 마음에 다시 숨이 돌고 희망이 비치는 카드입니다.",
    positive: "치유, 희망, 회복, 영감",
    shadow: "이상화, 느슨한 실행, 기대 과열",
    tone: "bright",
    energy: "hope",
  },
  {
    name: "The Moon",
    group: "Major Arcana",
    summary: "불확실성과 예감이 겹치며 분명한 것과 흐릿한 것이 공존합니다.",
    positive: "상상력, 감수성, 무의식의 메시지",
    shadow: "혼란, 불안, 오해, 환상",
    tone: "mist",
    energy: "ambiguity",
  },
  {
    name: "The Sun",
    group: "Major Arcana",
    summary: "막히던 기류가 풀리며 따뜻하고 선명한 에너지가 들어옵니다.",
    positive: "명료함, 활력, 공개성, 성공 가능성",
    shadow: "과신, 가벼운 오만, 단순화",
    tone: "bright",
    energy: "clarity",
  },
  {
    name: "Judgement",
    group: "Major Arcana",
    summary: "지나온 선택을 돌아보고 새로운 호출에 응답해야 할 때입니다.",
    positive: "각성, 결론, 재평가, 회복의 기회",
    shadow: "후회, 자기 심판, 과거 집착",
    tone: "gold",
    energy: "awakening",
  },
  {
    name: "The World",
    group: "Major Arcana",
    summary: "하나의 사이클이 완성되며 다음 단계로 자연스럽게 넘어갑니다.",
    positive: "완결, 성취, 연결, 넓어진 시야",
    shadow: "마무리 피로, 공허함, 다음 목표 상실",
    tone: "bright",
    energy: "completion",
  },
];

const directions = [
  {
    name: "Rise",
    label: "상승",
    summary: "멈춰 있던 것을 움직일수록 길이 열립니다. 작은 시도라도 먼저 시작하는 쪽이 유리합니다.",
    advice: "질문을 남기기보다 행동으로 확인하세요. 연락, 제안, 시작, 발표에 힘이 실립니다.",
    caution: "속도가 붙는 만큼 기준 없이 퍼뜨리면 피로가 빠르게 쌓일 수 있습니다.",
  },
  {
    name: "Hold",
    label: "유지",
    summary: "지금은 밀어붙이는 것보다 상태를 정돈하고 안정시키는 흐름이 강합니다.",
    advice: "점검, 조율, 보류, 자료 정리에 적합합니다. 오늘의 힘은 속도보다 정확성에 있습니다.",
    caution: "안전함에만 머물면 필요한 기회를 놓칠 수 있으니 작은 결론은 남겨 두세요.",
  },
  {
    name: "Release",
    label: "정리",
    summary: "불필요한 집착이나 끝난 흐름을 내려놓을수록 새로운 자리가 확보됩니다.",
    advice: "정리, 삭제, 단절, 청소, 마감에 행운이 붙습니다. 덜어내는 선택이 답이 됩니다.",
    caution: "급하게 끊어버리기보다 무엇을 남길지까지 확인해야 후회가 줄어듭니다.",
  },
];

const trigrams = [
  { name: "Heaven", label: "하늘", theme: "시야가 위로 열리고 큰 관점이 강조됩니다.", advice: "사소한 감정에 갇히지 말고 기준과 비전을 먼저 세우세요." },
  { name: "Lake", label: "연못", theme: "관계, 대화, 취향, 즐거움이 중요하게 작동합니다.", advice: "기분 좋은 교류가 돌파구가 될 수 있으니 말을 부드럽게 여세요." },
  { name: "Fire", label: "불", theme: "주목, 표현, 드러남, 선명함이 커지는 상황입니다.", advice: "보이게 만들수록 유리합니다. 아이디어나 결과를 숨기지 마세요." },
  { name: "Thunder", label: "천둥", theme: "예상보다 빠른 변화와 깨움의 기운이 들어옵니다.", advice: "순간의 신호를 놓치지 마세요. 반응 속도가 중요한 날입니다." },
  { name: "Wind", label: "바람", theme: "보이지 않게 스며드는 영향과 분위기 변화가 큽니다.", advice: "강하게 밀기보다 조금씩 스며드는 방식을 택하면 좋습니다." },
  { name: "Water", label: "물", theme: "불확실성과 깊은 감정, 조심스러운 흐름이 공존합니다.", advice: "확인 전에는 단정하지 말고, 우회 경로를 준비하세요." },
  { name: "Mountain", label: "산", theme: "멈춤, 집중, 경계 설정이 필요한 구간입니다.", advice: "반응을 줄이고 핵심만 남기면 에너지가 다시 모입니다." },
  { name: "Earth", label: "대지", theme: "현실 감각, 수용, 지속성이 바닥을 잡아 줍니다.", advice: "기본기를 지키고 생활 리듬을 안정시키면 운이 따라옵니다." },
];

const oracleLines = [
  "조용히 쌓은 기운이 오늘의 바깥 운보다 오래 갑니다.",
  "밀어붙이지 않은 선택이 오히려 오래 남습니다.",
  "지금의 작은 정리가 다음 문을 넓게 엽니다.",
  "당장 보이지 않아도 흐름은 이미 방향을 바꾸는 중입니다.",
  "한 번 쉬어 간 자리에서 더 분명한 뜻이 드러납니다.",
  "마음이 거칠어질수록 답은 더 단순한 쪽에 있습니다.",
  "오늘의 운은 빠른 승부보다 좋은 리듬에 가깝습니다.",
  "낡은 불안을 덜어내면 새로운 행운이 자리를 찾습니다.",
  "조금 늦더라도 바르게 닿는 쪽이 결국 더 멀리 갑니다.",
  "보이지 않던 연결이 느린 순간에 더 또렷해집니다.",
  "지금 필요한 것은 더 많은 답보다 정확한 하나입니다.",
  "기다림이 멈춤이 아니라 정렬이라는 사실을 기억하세요.",
];

const shinjeomOpenings = {
  Rise: {
    gentle: [
      "지금 붙는 뜻은 먼저 움직일 때 열린다.",
      "오늘 네 앞의 문은 망설임보다 첫걸음에 반응한다.",
    ],
    stern: [
      "뜻이 붙으려면 마음만 앞세우지 말고 몸을 먼저 움직여야 한다.",
      "움직여야 할 때 머뭇거리면 들어온 기운도 약해진다.",
    ],
    warning: [
      "들어오는 기운은 움직이는 사람의 손을 먼저 잡는다.",
      "지금은 주저하는 사이에 운의 문이 닫힐 수 있다.",
    ],
  },
  Hold: {
    gentle: [
      "지금 붙는 뜻은 서두르지 않을 때 선명해진다.",
      "오늘의 신호는 멈춘 자리에서 더 또렷하게 드러난다.",
    ],
    stern: [
      "급히 잡으려는 뜻은 흐려지고, 가만히 두는 뜻이 스스로 모습을 드러낸다.",
      "지금은 서두른 판단이 오히려 기운의 결을 해친다.",
    ],
    warning: [
      "기운은 지금 네가 멈춰 서는 자리에서 먼저 말을 건다.",
      "조급하게 답을 확정하면 들어온 신호를 놓치기 쉽다.",
    ],
  },
  Release: {
    gentle: [
      "지금 붙는 뜻은 덜어낼 것을 덜어낼 때 드러난다.",
      "오늘의 기운은 비워 낸 자리 위에 새로 앉는다.",
    ],
    stern: [
      "끝난 것을 놓아야 다음 뜻이 네 앞에 선다.",
      "쥐고 있는 것을 풀지 않으면 새 기운도 머물지 못한다.",
    ],
    warning: [
      "쥐고 있는 것을 풀어야 보이지 않던 흐름이 드러난다.",
      "버릴 것을 끌고 가면 오늘의 운도 함께 무거워진다.",
    ],
  },
};

const shinjeomCardLines = {
  pause: {
    gentle: ["지금 네 앞의 뜻은 멈춤 속에서 더 또렷해진다."],
    stern: ["서두르지 말라는 뜻이 먼저 와 있다."],
    warning: ["억지로 밀면 오히려 보여야 할 뜻이 더 멀어진다."],
  },
  retreat: {
    gentle: ["안쪽으로 물러선 자리에서 오히려 답이 먼저 선다."],
    stern: ["밖을 보기보다 안쪽 불빛을 먼저 따라가야 하는 때다."],
    warning: ["바깥 소란에 휩쓸리면 정작 받아야 할 뜻을 놓친다."],
  },
  clarity: {
    gentle: ["지금 네 앞의 뜻은 흐려진 마음을 다시 밝히려는 데 있다."],
    stern: ["막혀 있던 기운이 다시 선명해지려는 뜻을 품고 있다."],
    warning: ["밝아지는 기운 앞에서 가벼운 자만이 먼저 그림자를 만든다."],
  },
  hope: {
    gentle: ["꺼진 줄 알았던 흐름이 다시 숨을 얻으려 한다."],
    stern: ["조용히 되살아나는 기운이 네 쪽으로 기울고 있다."],
    warning: ["되살아나는 운을 조급함으로 다시 흐리지 말아야 한다."],
  },
  ending: {
    gentle: ["이미 끝난 기운을 인정하라는 뜻이 먼저 와 있다."],
    stern: ["마침내 끊어야 할 것을 끊으라는 신호가 선다."],
    warning: ["끝난 것을 붙드는 동안 새 뜻은 문밖에 머문다."],
  },
  ambiguity: {
    gentle: ["지금은 보이는 것보다 감지되는 기운을 더 살펴야 한다."],
    stern: ["뜻은 와 있으나, 아직 얼굴을 다 드러내지 않았다."],
    warning: ["흐린 날의 확신은 종종 잘못된 길을 더 빨리 걷게 만든다."],
  },
};

const shinjeomBridgeLines = {
  gentle: [
    "겉의 소란보다 안쪽의 감각이 먼저 답을 알고 있다.",
    "지금은 크고 화려한 답보다 맞는 결을 찾는 것이 중요하다.",
  ],
  stern: [
    "작은 신호를 가볍게 넘기지 말아야 뜻이 이어진다.",
    "지금의 기운은 억지보다 정렬에 더 크게 반응한다.",
  ],
  warning: [
    "지나치게 애쓰는 마음이 오히려 기운의 결을 흐릴 수 있다.",
    "흐름은 이미 움직이고 있으니 마음만 늦지 않게 하라.",
  ],
};

const shinjeomDirectionClosers = {
  Rise: {
    gentle: [
      "묻기보다 먼저 한 걸음을 내딛되, 허투루 흩어지지 말아야 한다.",
      "먼저 움직이되, 네 중심을 잃지 않는 것이 오늘의 관건이다.",
    ],
    stern: [
      "움직일 뜻은 이미 왔으니 망설임으로 기운을 흩뜨리지 말아야 한다.",
    ],
    warning: [
      "주저하는 동안 붙은 기운도 쉽게 흩어질 수 있다.",
    ],
  },
  Hold: {
    gentle: [
      "당장 답을 확정하려 하지 말고, 들어오는 기운의 결을 끝까지 살펴야 한다.",
      "서두르지 않고 한 번 더 들여다보는 태도가 뜻을 지켜 준다.",
    ],
    stern: [
      "오늘은 빠른 결론보다 조용한 판별이 더 큰 힘을 가진다.",
    ],
    warning: [
      "지금 조급한 확신은 옳은 뜻을 비껴가게 만들 수 있다.",
    ],
  },
  Release: {
    gentle: [
      "붙잡고 있던 뜻 가운데 이미 끝난 것을 놓아야 다음 기운이 붙는다.",
      "정리해야 할 것을 미루지 말아야 새 뜻이 네 자리에 들어온다.",
    ],
    stern: [
      "버릴 것을 남겨 두면 기운의 길도 함께 막히게 된다.",
    ],
    warning: [
      "놓아야 할 것을 끝내 놓지 않으면 같은 막힘이 되풀이될 수 있다.",
    ],
  },
};

const shinjeomGuidanceByDirection = {
  Rise: {
    gentle: [
      "미루던 것 하나를 먼저 움직여 기운의 문을 열 것.",
      "오늘은 시작을 두려워하지 말고 작은 실천으로 흐름을 깨울 것.",
    ],
    stern: [
      "가만히 재기만 하지 말고 먼저 손을 내밀어 길을 열 것.",
    ],
    warning: [
      "망설임이 길어지기 전에 지금 가능한 것부터 바로 시작할 것.",
    ],
  },
  Hold: {
    gentle: [
      "말보다 호흡을 먼저 고르고, 급한 결론을 잠시 늦출 것.",
      "당장 답을 내리기보다 마음과 자리를 먼저 가지런히 할 것.",
    ],
    stern: [
      "서두르지 말고 오늘은 흔들리는 결부터 바로잡을 것.",
    ],
    warning: [
      "급히 정한 답 하나가 하루 전체의 흐름을 흐릴 수 있으니 멈춰 둘 것.",
    ],
  },
  Release: {
    gentle: [
      "낡은 걱정과 어수선한 자리를 먼저 비워 둘 것.",
      "끝난 생각과 흐트러진 자리를 정리해 새 기운이 붙게 할 것.",
    ],
    stern: [
      "쌓인 것 하나를 덜어 내어 오늘의 막힌 기운을 풀 것.",
    ],
    warning: [
      "미루어 둔 정리를 더 끌지 말고 오늘 안에 하나는 분명히 끝낼 것.",
    ],
  },
};

const scoreLabels = [
  { key: "overall", label: "전체 흐름" },
  { key: "love", label: "관계와 감정" },
  { key: "work", label: "집중과 일" },
  { key: "money", label: "돈과 현실" },
];

const promptModes = {
  today: {
    label: "오늘의 운세",
    horizon: "오늘부터 3일 안쪽",
    sections: ["핵심 흐름", "오늘의 운세", "건강운", "연애운", "사업(회사)운", "추천 행동", "주의할 점", "가까운 미래 예측"],
    focus: "오늘 하루의 분위기, 당장의 선택, 바로 체감되는 운의 방향",
  },
  health: {
    label: "건강운",
    horizon: "오늘부터 일주일 안쪽",
    sections: ["핵심 흐름", "몸 상태", "생활 리듬", "회복 포인트", "주의 신호", "추천 행동", "가까운 미래 예측"],
    focus: "컨디션, 수면, 피로도, 회복과 무리의 경계",
  },
  love: {
    label: "연애운",
    horizon: "오늘부터 일주일 안쪽",
    sections: ["핵심 흐름", "연애운", "감정의 결", "상대와의 거리", "좋은 흐름을 타는 법", "주의할 점", "가까운 미래 예측"],
    focus: "호감, 관계 진전, 연락, 감정 표현, 오해와 화해의 흐름",
  },
  business: {
    label: "사업(회사)운",
    horizon: "이번 주부터 이번 달 안쪽",
    sections: ["핵심 흐름", "일과 사업운", "성과 가능성", "협업과 관계", "돈의 흐름", "추천 행동", "주의할 점", "가까운 미래 예측"],
    focus: "회사 일, 사업 판단, 협업, 성과, 책임, 기회와 리스크",
  },
  month: {
    label: "이번달의 운세",
    horizon: "이번 달 전체",
    sections: ["이달의 핵심 흐름", "전반 운세", "관계와 감정", "일과 돈", "놓치지 말아야 할 기회", "월간 조언", "주의할 점"],
    focus: "이번 달 전체 분위기, 월간 기회와 주의점, 꾸준히 가져갈 태도",
  },
  year: {
    label: "올해의 운세",
    horizon: "올해 전체",
    sections: ["올해의 핵심 흐름", "큰 전환 포인트", "관계와 감정", "일과 돈", "장기 방향", "올해의 조언", "올해의 경계"],
    focus: "한 해의 방향성, 장기 흐름, 반복될 패턴과 크게 달라질 지점",
  },
};

const drawButton = document.querySelector("#draw-button");
const copyButton = document.querySelector("#copy-button");
const copyInlineButton = document.querySelector("#copy-inline-button");
const retryButton = document.querySelector("#retry-button");
const copyActions = document.querySelector("#copy-actions");
const choicePanel = document.querySelector("#choice-panel");
const choiceButtons = document.querySelectorAll(".choice-button");
const drawStatus = document.querySelector("#draw-status");
const readingPanel = document.querySelector("#reading-panel");
const promptOutput = document.querySelector("#prompt-output");
const scoreTemplate = document.querySelector("#score-template");
const promptModeButtons = document.querySelectorAll(".prompt-mode-button");
let latestPrompt = "";
let latestDraw = null;
let currentPromptMode = "today";
let pendingChoiceSlot = null;
let currentChoiceCards = [];
const glyphByEnergy = {
  "new-beginning": "SKY",
  manifestation: "SUN",
  intuition: "MOON",
  abundance: "ROSE",
  structure: "CROWN",
  tradition: "PILLAR",
  connection: "TWIN",
  momentum: "WHEEL",
  "gentle-power": "LION",
  retreat: "LAMP",
  "turning-point": "RING",
  balance: "SCALE",
  pause: "HALO",
  ending: "GATE",
  integration: "CHALICE",
  attachment: "CHAIN",
  disruption: "BOLT",
  hope: "STAR",
  ambiguity: "TIDE",
  clarity: "DAWN",
  awakening: "CALL",
  completion: "WORLD",
};

const riderWaiteImageFiles = {
  "The Fool": "RWS Tarot 00 Fool.jpg",
  "The Magician": "RWS Tarot 01 Magician.jpg",
  "The High Priestess": "RWS Tarot 02 High Priestess.jpg",
  "The Empress": "RWS Tarot 03 Empress.jpg",
  "The Emperor": "RWS Tarot 04 Emperor.jpg",
  "The Hierophant": "RWS Tarot 05 Hierophant.jpg",
  "The Lovers": "RWS Tarot 06 Lovers.jpg",
  "The Chariot": "RWS Tarot 07 Chariot.jpg",
  Strength: "RWS Tarot 08 Strength.jpg",
  "The Hermit": "RWS Tarot 09 Hermit.jpg",
  "Wheel of Fortune": "RWS Tarot 10 Wheel of Fortune.jpg",
  Justice: "RWS Tarot 11 Justice.jpg",
  "The Hanged Man": "RWS Tarot 12 Hanged Man.jpg",
  Death: "RWS Tarot 13 Death.jpg",
  Temperance: "RWS Tarot 14 Temperance.jpg",
  "The Devil": "RWS Tarot 15 Devil.jpg",
  "The Tower": "RWS Tarot 16 Tower.jpg",
  "The Star": "RWS Tarot 17 Star.jpg",
  "The Moon": "RWS Tarot 18 Moon.jpg",
  "The Sun": "RWS Tarot 19 Sun.jpg",
  Judgement: "RWS Tarot 20 Judgement.jpg",
  "The World": "RWS Tarot 21 World.jpg",
};

function sample(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function sampleUnique(items, count) {
  const pool = [...items];
  const picked = [];
  while (pool.length > 0 && picked.length < count) {
    const index = Math.floor(Math.random() * pool.length);
    picked.push(pool.splice(index, 1)[0]);
  }
  return picked;
}

function buildChoiceFromCard(card) {
  const toneBiasByTone = {
    bright: { gentle: 2, stern: 0, warning: 0 },
    mist: { gentle: 1, stern: 1, warning: 1 },
    ember: { gentle: 0, stern: 1, warning: 2 },
    gold: { gentle: 1, stern: 2, warning: 0 },
    rose: { gentle: 2, stern: 0, warning: 1 },
  };

  const directionBias = { Rise: 1, Hold: 1, Release: 1 };
  const scoreBias = { overall: 0, love: 0, work: 0, money: 0 };

  if (["momentum", "manifestation", "clarity", "hope", "completion"].includes(card.energy)) {
    directionBias.Rise += 2;
    scoreBias.overall += 1;
    scoreBias.work += 1;
  }
  if (["retreat", "pause", "intuition", "ambiguity"].includes(card.energy)) {
    directionBias.Hold += 2;
    scoreBias.love += 1;
  }
  if (["ending", "attachment", "disruption"].includes(card.energy)) {
    directionBias.Release += 2;
    scoreBias.money -= 1;
  }
  if (card.energy === "connection" || card.energy === "abundance") {
    scoreBias.love += 1;
  }
  if (card.energy === "structure" || card.energy === "balance") {
    scoreBias.money += 1;
    scoreBias.work += 1;
  }

  return {
    label: card.name,
    summary: card.summary,
    scoreBias,
    directionBias,
    toneBias: toneBiasByTone[card.tone] ?? { gentle: 1, stern: 1, warning: 1 },
  };
}

function createTarotCardArt(card) {
  const tonePalette = {
    bright: { top: "#1d2545", bottom: "#0c1123", accent: "#f1d998", glow: "#fff4c2" },
    mist: { top: "#252341", bottom: "#0d1124", accent: "#d8c8f1", glow: "#efe8ff" },
    ember: { top: "#321d27", bottom: "#120d1d", accent: "#ffb684", glow: "#ffd5b7" },
    gold: { top: "#2d2530", bottom: "#0d1020", accent: "#eed79a", glow: "#fff0bb" },
    rose: { top: "#352332", bottom: "#13101e", accent: "#f2a6a6", glow: "#ffe2e2" },
  };
  const palette = tonePalette[card.tone] ?? tonePalette.gold;
  const glyph = glyphByEnergy[card.energy] ?? "ARC";
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 520">
  <defs>
    <linearGradient id="bg" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="${palette.top}"/>
      <stop offset="100%" stop-color="${palette.bottom}"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="26%" r="44%">
      <stop offset="0%" stop-color="${palette.glow}" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="${palette.glow}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect x="12" y="12" width="296" height="496" rx="26" fill="url(#bg)" stroke="${palette.accent}" stroke-opacity="0.65" />
  <rect x="28" y="28" width="264" height="464" rx="18" fill="none" stroke="${palette.accent}" stroke-opacity="0.28" />
  <circle cx="160" cy="170" r="86" fill="url(#glow)" opacity="0.78" />
  <circle cx="160" cy="170" r="72" fill="none" stroke="${palette.accent}" stroke-opacity="0.72" />
  <circle cx="160" cy="170" r="52" fill="none" stroke="${palette.accent}" stroke-opacity="0.45" />
  <text x="160" y="182" text-anchor="middle" fill="${palette.accent}" font-size="22" font-family="IBM Plex Sans KR, sans-serif" letter-spacing="2">${glyph}</text>
  <path d="M92 278 Q160 236 228 278" fill="none" stroke="${palette.accent}" stroke-opacity="0.48" stroke-width="2"/>
  <path d="M98 300 Q160 340 222 300" fill="none" stroke="${palette.accent}" stroke-opacity="0.32" stroke-width="2"/>
  <text x="160" y="402" text-anchor="middle" fill="${palette.accent}" font-size="18" font-family="Cormorant Garamond, serif" letter-spacing="1.2">${card.name.toUpperCase()}</text>
  <text x="160" y="435" text-anchor="middle" fill="${palette.accent}" fill-opacity="0.82" font-size="11" font-family="IBM Plex Sans KR, sans-serif" letter-spacing="3">${card.group.toUpperCase()}</text>
</svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function getTarotImageUrl(card) {
  const fileName = riderWaiteImageFiles[card.name];
  if (!fileName) {
    return "";
  }

  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}`;
}

function setTarotImage(image, card, altText) {
  const fallback = createTarotCardArt(card);
  const imageUrl = getTarotImageUrl(card);

  image.alt = altText;
  image.onerror = () => {
    image.onerror = null;
    image.src = fallback;
  };
  image.src = imageUrl || fallback;
}

function hydrateChoiceCards() {
  currentChoiceCards = sampleUnique(tarotCards, 5);
  choiceButtons.forEach((button, index) => {
    const card = currentChoiceCards[index];
    if (!card) {
      return;
    }
    const choiceArt = button.querySelector(".choice-art");
    choiceArt.loading = "lazy";
    setTarotImage(choiceArt, card, `${card.name} 선택 카드 이미지`);
    button.querySelector(".choice-name").textContent = card.name;
    button.setAttribute("aria-label", `${card.name} 카드 선택`);
  });
}

function sampleTone(choice) {
  const tonePool = [];
  for (const tone of ["gentle", "stern", "warning"]) {
    const count = (choice.toneBias[tone] ?? 0) + 1;
    for (let index = 0; index < count; index += 1) {
      tonePool.push(tone);
    }
  }
  return sample(tonePool);
}

function randomScore(base = 3) {
  const drift = Math.floor(Math.random() * 3) - 1;
  return Math.min(5, Math.max(1, base + drift));
}

function weightedPick(items, weights) {
  const total = items.reduce((sum, item) => sum + (weights[item.name] ?? 1), 0);
  let roll = Math.random() * total;
  for (const item of items) {
    roll -= weights[item.name] ?? 1;
    if (roll <= 0) {
      return item;
    }
  }
  return items[items.length - 1];
}

function deriveScores(card, direction, trigram, choice) {
  const energetic = ["momentum", "clarity", "hope", "manifestation", "completion"];
  const inward = ["retreat", "pause", "intuition", "ambiguity"];
  const intense = ["disruption", "attachment", "ending"];

  let base = 3;
  if (energetic.includes(card.energy) || direction.name === "Rise") {
    base = 4;
  }
  if (inward.includes(card.energy) || direction.name === "Hold") {
    base = 3;
  }
  if (intense.includes(card.energy) || direction.name === "Release") {
    base = 2;
  }

  const loveBias = trigram.name === "Lake" ? 1 : trigram.name === "Water" ? -1 : 0;
  const workBias = trigram.name === "Heaven" || trigram.name === "Fire" ? 1 : 0;
  const moneyBias = trigram.name === "Earth" ? 1 : trigram.name === "Thunder" ? -1 : 0;

  return {
    overall: randomScore(base + choice.scoreBias.overall),
    love: randomScore(base + loveBias + choice.scoreBias.love),
    work: randomScore(base + workBias + choice.scoreBias.work),
    money: randomScore(base + moneyBias + choice.scoreBias.money),
  };
}

function buildHeadline(direction, trigram) {
  const actionPhrase = {
    Rise: "조용한 확신을 행동으로 옮길 때",
    Hold: "지금은 멈춤 속에서 기준을 세울 때",
    Release: "덜어낼수록 길이 선명해질 때",
  }[direction.name];

  return `${actionPhrase}, ${trigram.label}의 기운이 주변을 감싸고 있습니다.`;
}

function buildInterpretation(card, direction, trigram) {
  const toneMap = {
    bright: "전반적으로 밝은 흐름이 살아 있어, 너무 움츠리기보다 마음을 열어 두는 편이 좋습니다.",
    mist: "흐름이 선명하기보다 미세하게 바뀌는 쪽이라, 섣부른 단정보다 감각을 세우는 편이 유리합니다.",
    ember: "기류에 열감이 있어 선택 하나하나가 분위기를 크게 바꿀 수 있습니다. 감정의 힘을 의식적으로 다루는 것이 중요합니다.",
    gold: "성급한 돌진보다 균형 잡힌 선택이 더 좋은 결과를 만듭니다. 중심을 지키는 태도가 운을 안정시킵니다.",
    rose: "관계와 감정의 결이 진해져 반응보다 진심의 방향이 더 중요해집니다.",
  };

  return [
    `메인 카드는 ${card.summary}`,
    `방향성은 ${direction.label}으로 잡혀 있어 ${direction.summary}`,
    `주변에는 ${trigram.label}의 기운이 감돌며 ${trigram.theme}`,
    toneMap[card.tone],
  ].join(" ");
}

function buildAdvice(direction, trigram, scores) {
  const strongest = scoreLabels
    .map(({ key, label }) => ({ key, label, value: scores[key] }))
    .sort((left, right) => right.value - left.value)[0];

  return `${direction.advice} ${trigram.advice} 오늘 특히 힘이 실리는 영역은 ${strongest.label}입니다.`;
}

function buildCaution(card, direction, scores) {
  const weakest = scoreLabels
    .map(({ key, label }) => ({ key, label, value: scores[key] }))
    .sort((left, right) => left.value - right.value)[0];

  return `${card.shadow}. ${direction.caution} 다만 ${weakest.label}에서는 예민함이 올라오기 쉬우니 과잉 해석과 과잉 반응은 줄이는 편이 좋습니다.`;
}

function buildScoreInsightLine(key, score, draw) {
  const levelMap = {
    5: "매우 강하게",
    4: "꽤 안정적으로",
    3: "무난하게",
    2: "예민하게",
    1: "조심스럽게",
  };
  const level = levelMap[score] ?? "복합적으로";
  const lineByKey = {
    overall: `${level} 흐릅니다. ${draw.direction.summary} ${draw.oracle}`,
    love: `${level} 반응합니다. ${draw.card.positive}의 결이 관계에 스미지만, ${draw.card.shadow} 쪽 해석은 줄이는 편이 좋습니다.`,
    work: `${level} 힘이 실립니다. ${draw.direction.advice} ${draw.trigram.advice}`,
    money: `${level} 작동합니다. ${draw.direction.caution} 특히 지출이나 현실 판단에서는 기준을 먼저 세우는 쪽이 유리합니다.`,
  };

  return lineByKey[key];
}

function buildScoreInsights(draw) {
  return scoreLabels.map(({ key, label }) => ({
    label,
    text: buildScoreInsightLine(key, draw.scores[key], draw),
  }));
}

function buildPrompt(draw, modeKey) {
  const mode = promptModes[modeKey] ?? promptModes.today;
  const sectionList = mode.sections.map((section) => `- ${section}`).join("\n");

  return `너는 상징 해석과 복합 운세 조합에 능한 리더다.

아래는 한 번의 클릭으로 생성된 복합 운세 결과다.
각 요소를 따로 설명하지 말고, 서로 어떻게 영향을 주는지 엮어서 자연스러운 한국어 해석으로 써줘.

요구사항:
- 톤은 차분하고 신비롭되 과장되지 않게
- 이번 해석의 중심 주제는 "${mode.label}"이다
- 아래 순서의 소제목을 유지할 것:
${sectionList}
- 미래 예측은 ${mode.horizon} 흐름을 기준으로 쓸 것
- 점술 결과이므로 미래 예측 문장은 분명하게 써도 되지만, 지나치게 극단적이거나 공포를 조장하는 표현은 피할 것
- 카드, 방향성, 상황 기운, 점수, 오라클 문장을 모두 반영
- 특히 이번 해석에서는 ${mode.focus}에 더 무게를 둘 것
- 문장들이 서로 충돌하지 않도록, 하나의 일관된 흐름처럼 써줄 것

[복합 운세 원본]
- 선택한 카드: ${draw.choice.label}
- 선택한 카드의 결: ${draw.choice.summary}
- 메인 카드: ${draw.card.name} (${draw.card.group})
- 카드 요약: ${draw.card.summary}
- 카드의 빛: ${draw.card.positive}
- 카드의 그림자: ${draw.card.shadow}
- 방향성: ${draw.direction.label} (${draw.direction.name})
- 방향성 요약: ${draw.direction.summary}
- 상황 기운: ${draw.trigram.label} (${draw.trigram.name})
- 상황 테마: ${draw.trigram.theme}
- 상황 조언: ${draw.trigram.advice}
- 전체 흐름 점수: ${draw.scores.overall}/5
- 관계와 감정 점수: ${draw.scores.love}/5
- 집중과 일 점수: ${draw.scores.work}/5
- 돈과 현실 점수: ${draw.scores.money}/5
- 마무리 오라클: "${draw.oracle}"

[현재 자동 조합 해석 초안]
- 헤드라인: ${draw.headline}
- 해석: ${draw.interpretation}
- 조언: ${draw.advice}
- 주의: ${draw.caution}
- 영역별 디테일:
${buildScoreInsights(draw).map((item) => `  - ${item.label}: ${item.text}`).join("\n")}
- 신점 한마디: ${draw.shinjeomLine}
- 신점 깊은 메시지: ${draw.shinjeomDeepMessage}
- 받들어야 할 기운: ${draw.shinjeomGuidance}

이 결과를 바탕으로, 겹쳐진 상징이 하나의 운세처럼 읽히도록 ${mode.label} 중심의 최종 해석문을 작성해줘.

추가로 반드시 포함할 것:
- ${mode.horizon} 기준의 미래 예측
- 지금 들어오는 운이 어느 방향으로 굳어질 가능성이 큰지
- 만약 흐름을 잘 타면 어떻게 되고, 잘못 다루면 어떻게 엇나갈 수 있는지`;
}

function updatePromptOutput() {
  if (!latestDraw) {
    latestPrompt = "";
    promptOutput.value = "";
    return;
  }

  latestPrompt = buildPrompt(latestDraw, currentPromptMode);
  promptOutput.value = latestPrompt;
}

function buildShinjeomLine(card, direction, choice) {
  const tone = sampleTone(choice);
  const cardSpecific = shinjeomCardLines[card.energy];
  if (cardSpecific) {
    return {
      text: sample(cardSpecific[tone] ?? cardSpecific.gentle),
      tone,
    };
  }
  return {
    text: sample(shinjeomOpenings[direction.name][tone]),
    tone,
  };
}

function buildShinjeomDeepMessage(card, direction, oracle, tone) {
  const bridge = sample(shinjeomBridgeLines[tone]);
  const closer = sample(shinjeomDirectionClosers[direction.name][tone]);
  return `${card.summary} ${oracle} ${bridge} ${closer}`;
}

function buildShinjeomGuidance(direction, trigram, tone) {
  return `${sample(shinjeomGuidanceByDirection[direction.name][tone])} ${trigram.advice}`;
}

function renderScores(scores) {
  const scoreContainer = document.querySelector("#scores");
  scoreContainer.innerHTML = "";

  for (const { key, label } of scoreLabels) {
    const fragment = scoreTemplate.content.cloneNode(true);
    fragment.querySelector(".score-label").textContent = label;
    fragment.querySelector(".score-value").textContent = `${scores[key]}/5`;
    const fill = fragment.querySelector(".score-fill");
    fill.style.width = "0%";
    scoreContainer.append(fragment);
    requestAnimationFrame(() => {
      fill.style.width = `${scores[key] * 20}%`;
    });
  }
}

function renderScoreInsights(draw) {
  const scoreInsights = document.querySelector("#score-insights");
  scoreInsights.innerHTML = "";

  for (const insight of buildScoreInsights(draw)) {
    const item = document.createElement("div");
    item.className = "score-insight";

    const title = document.createElement("strong");
    title.textContent = insight.label;

    const copy = document.createElement("span");
    copy.textContent = insight.text;

    item.append(title, copy);
    scoreInsights.append(item);
  }
}

function renderReading(draw) {
  document.querySelector("#headline-text").textContent = draw.headline;
  document.querySelector("#summary-text").textContent = draw.summary;
  document.querySelector("#card-name").textContent = draw.card.name;
  document.querySelector("#card-group").textContent = draw.card.group;
  const mainCardArt = document.querySelector("#card-art");
  setTarotImage(mainCardArt, draw.card, `${draw.card.name} 카드 이미지`);
  document.querySelector("#card-summary").textContent = draw.card.summary;
  document.querySelector("#card-positive").textContent = draw.card.positive;
  document.querySelector("#card-shadow").textContent = draw.card.shadow;
  document.querySelector("#direction-name").textContent = draw.direction.label;
  document.querySelector("#trigram-name").textContent = draw.trigram.label;
  document.querySelector("#direction-summary").textContent = draw.direction.summary;
  document.querySelector("#trigram-summary").textContent = `${draw.trigram.theme} ${draw.trigram.advice}`;
  document.querySelector("#interpretation-text").textContent = draw.interpretation;
  document.querySelector("#advice-text").textContent = draw.advice;
  document.querySelector("#caution-text").textContent = draw.caution;
  document.querySelector("#oracle-line").textContent = draw.oracle;
  document.querySelector("#shinjeom-line").textContent = draw.shinjeomLine;
  document.querySelector("#shinjeom-deep-message").textContent = draw.shinjeomDeepMessage;
  document.querySelector("#shinjeom-guidance").textContent = draw.shinjeomGuidance;
  renderScores(draw.scores);
  renderScoreInsights(draw);

  latestDraw = draw;
  updatePromptOutput();
  copyActions.classList.remove("hidden");
  copyButton.disabled = false;
  copyInlineButton.disabled = false;

  readingPanel.classList.remove("hidden");
  readingPanel.classList.remove("active");
  void readingPanel.offsetWidth;
  readingPanel.classList.add("active");
}

function composeReading() {
  const choiceCard = currentChoiceCards[pendingChoiceSlot];
  const choice = buildChoiceFromCard(choiceCard);
  const card = sample(tarotCards);
  const direction = weightedPick(directions, choice.directionBias);
  const trigram = sample(trigrams);
  const oracle = sample(oracleLines);
  const scores = deriveScores(card, direction, trigram, choice);
  const headline = buildHeadline(direction, trigram);
  const interpretation = buildInterpretation(card, direction, trigram);
  const advice = buildAdvice(direction, trigram, scores);
  const caution = buildCaution(card, direction, scores);
  const shinjeomBase = buildShinjeomLine(card, direction, choice);
  const shinjeomLine = shinjeomBase.text;
  const shinjeomDeepMessage = buildShinjeomDeepMessage(card, direction, oracle, shinjeomBase.tone);
  const shinjeomGuidance = buildShinjeomGuidance(direction, trigram, shinjeomBase.tone);

  return {
    choice,
    card,
    direction,
    trigram,
    oracle,
    scores,
    headline,
    summary: `${choice.label} 카드의 선택 위에 ${card.name}의 중심 메시지, ${direction.label}의 방향성, ${trigram.label}의 기운이 겹쳐진 결과입니다.`,
    interpretation,
    advice,
    caution,
    shinjeomLine,
    shinjeomDeepMessage,
    shinjeomGuidance,
  };
}

async function copyPrompt() {
  if (!latestPrompt) {
    return;
  }

  await navigator.clipboard.writeText(latestPrompt);
  drawStatus.textContent = "프롬프트 복사 완료";
}

async function startDraw() {
  if (pendingChoiceSlot === null) {
    drawStatus.textContent = "먼저 5장의 카드 중 하나를 고른 뒤 기운을 불러 주세요";
    return;
  }

  drawButton.disabled = true;
  drawButton.setAttribute("aria-busy", "true");
  copyButton.disabled = true;
  copyInlineButton.disabled = true;
  latestDraw = null;
  latestPrompt = "";
  promptOutput.value = "";
  drawStatus.textContent = "구슬이 기운을 모으는 중...";
  document.body.classList.add("is-drawing");
  readingPanel.classList.add("hidden");
  readingPanel.classList.remove("active");
  choiceButtons.forEach((button) => {
    button.disabled = true;
  });

  await new Promise((resolve) => {
    window.setTimeout(resolve, 1100);
  });

  drawStatus.textContent = "상징을 엮어 해석을 정리하는 중...";

  await new Promise((resolve) => {
    window.setTimeout(resolve, 1200);
  });

  const draw = composeReading();
  renderReading(draw);
  drawStatus.textContent = `${draw.choice.label}의 기운이 오늘의 운을 열었습니다`;
  document.body.classList.remove("is-drawing");
  drawButton.disabled = false;
  drawButton.removeAttribute("aria-busy");
  choiceButtons.forEach((button) => {
    button.disabled = false;
  });
}

copyButton.addEventListener("click", () => {
  copyPrompt().catch(console.error);
});

copyInlineButton.addEventListener("click", () => {
  copyPrompt().catch(console.error);
});

function initializeView() {
  latestDraw = null;
  latestPrompt = "";
  promptOutput.value = "";
  drawStatus.textContent = "먼저 카드를 고르고 기운을 불러 보세요";
  pendingChoiceSlot = null;
  copyActions.classList.add("hidden");
  copyButton.disabled = true;
  copyInlineButton.disabled = true;
  readingPanel.classList.add("hidden");
  readingPanel.classList.remove("active");
  document.body.classList.remove("is-drawing");
  drawButton.disabled = false;
  drawButton.removeAttribute("aria-busy");
  hydrateChoiceCards();
  choiceButtons.forEach((button) => {
    button.classList.remove("is-selected");
    button.disabled = false;
  });
}

initializeView();

drawButton.addEventListener("click", () => {
  if (pendingChoiceSlot === null) {
    drawStatus.textContent = "끌리는 카드 한 장을 먼저 고르세요";
    return;
  }

  startDraw().catch((error) => {
    console.error(error);
    drawStatus.textContent = "운세를 펼치지 못했습니다";
    drawButton.disabled = false;
    document.body.classList.remove("is-drawing");
  });
});

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    pendingChoiceSlot = Number(button.dataset.choiceSlot);
    choiceButtons.forEach((item) => {
      item.classList.toggle("is-selected", item === button);
    });
    drawStatus.textContent = `${currentChoiceCards[pendingChoiceSlot].name} 카드가 선택되었습니다. 이제 구슬을 눌러 기운을 부르세요`;
  });
});

promptModeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentPromptMode = button.dataset.promptMode;
    promptModeButtons.forEach((item) => {
      item.classList.toggle("is-selected", item === button);
    });
    updatePromptOutput();
  });
});

retryButton.addEventListener("click", () => {
  initializeView();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
