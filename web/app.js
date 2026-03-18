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

const focusModes = {
  overall: {
    label: "전체운",
    scoreKey: "overall",
    promptMode: "today",
    summary: "전체 흐름과 오늘 판의 방향을 중점적으로 봅니다.",
    headline: "전체 흐름에 더 무게가 실린 채",
  },
  love: {
    label: "연애운",
    scoreKey: "love",
    promptMode: "love",
    summary: "감정, 관계, 연락과 호감의 흐름을 더 가까이 봅니다.",
    headline: "관계와 감정의 결을 먼저 비추며",
  },
  money: {
    label: "금전운",
    scoreKey: "money",
    promptMode: "today",
    summary: "지출, 수입, 판단과 실속의 결을 더 선명하게 봅니다.",
    headline: "돈과 현실의 감각이 앞에 놓인 채",
  },
  health: {
    label: "건강운",
    scoreKey: "overall",
    promptMode: "health",
    summary: "몸 상태, 생활 리듬, 회복과 무리의 경계를 더 깊게 봅니다.",
    headline: "몸과 리듬의 신호를 먼저 읽으며",
  },
  work: {
    label: "일·사업운",
    scoreKey: "work",
    promptMode: "business",
    summary: "일, 성과, 협업, 추진력과 기회의 결을 더 가까이 봅니다.",
    headline: "일과 성과의 흐름을 먼저 붙들고",
  },
};

const subfocusModes = {
  overall: [
    { key: "general", label: "일반 흐름", summary: "하루 전체 판과 전반 운을 봅니다." },
    { key: "luck", label: "행운 흐름", summary: "운이 붙는 타이밍과 기회의 결을 봅니다." },
    { key: "relationship", label: "대인관계", summary: "주변 사람과의 분위기와 마찰을 봅니다." },
    { key: "decision", label: "결정", summary: "지금 밀어야 할지 보류해야 할지의 결을 봅니다." },
  ],
  love: [
    { key: "solo", label: "솔로", summary: "새 인연, 호감, 다가오는 기회를 중심으로 봅니다." },
    { key: "some", label: "썸", summary: "애매한 거리, 연락, 진전 가능성을 중심으로 봅니다." },
    { key: "dating", label: "연애중", summary: "현재 관계의 온도, 대화, 균형을 중심으로 봅니다." },
    { key: "reunion", label: "재회", summary: "다시 이어질 여지와 정리의 결을 중심으로 봅니다." },
  ],
  money: [
    { key: "saving", label: "저축", summary: "모으는 흐름과 지키는 감각을 중심으로 봅니다." },
    { key: "spending", label: "지출", summary: "새는 돈, 소비 판단, 충동 지출을 중심으로 봅니다." },
    { key: "income", label: "수입", summary: "들어오는 돈과 실질적인 회복 흐름을 중심으로 봅니다." },
    { key: "invest", label: "투자", summary: "리스크 감각, 판단 속도, 보수적 접근을 중심으로 봅니다." },
  ],
  health: [
    { key: "condition", label: "컨디션", summary: "오늘 몸 상태와 체력 흐름을 중심으로 봅니다." },
    { key: "sleep", label: "수면", summary: "잠, 회복 리듬, 피로 누적을 중심으로 봅니다." },
    { key: "stress", label: "스트레스", summary: "예민함, 긴장, 신경 소모를 중심으로 봅니다." },
    { key: "recovery", label: "회복", summary: "쉬어야 할 지점과 회복 가능성을 중심으로 봅니다." },
  ],
  work: [
    { key: "job", label: "직장", summary: "현재 회사 일, 분위기, 협업을 중심으로 봅니다." },
    { key: "career", label: "이직", summary: "움직일 타이밍과 방향성을 중심으로 봅니다." },
    { key: "business", label: "사업", summary: "판단, 기회, 책임과 리스크를 중심으로 봅니다." },
    { key: "study", label: "취업·시험", summary: "집중력, 준비, 결과 흐름을 중심으로 봅니다." },
  ],
};

const subfocusFlavor = {
  overall: {
    general: {
      scoreBias: { overall: 1 },
      interpretation: [
        "판 전체를 읽을 때는 한 가지 사건보다 하루의 결이 더 중요합니다.",
        "전반 운을 볼 때는 작은 변수보다 흐름 전체의 방향을 먼저 잡는 편이 맞습니다.",
        "오늘은 세부 사건보다 전체 리듬이 먼저 결과를 좌우합니다.",
      ],
      advice: [
        "전체 흐름을 보려면 한 가지 감정에 오래 머물지 않는 편이 좋습니다.",
        "판 전체를 읽는 날이니 서둘러 한 지점에 묶이지 마세요.",
        "오늘은 조급하게 결론 내리기보다 흐름의 방향부터 확인하세요.",
      ],
      caution: [
        "부분만 확대해서 보면 전체 흐름을 놓치기 쉽습니다.",
        "한 장면에 과하게 의미를 두면 오늘 판을 좁게 읽게 됩니다.",
        "작은 흔들림에 마음을 다 주면 큰 흐름을 놓칠 수 있습니다.",
      ],
    },
    luck: {
      scoreBias: { overall: 1, money: 1 },
      interpretation: [
        "행운 흐름은 준비된 자리에 가볍게 붙는 쪽으로 읽힙니다.",
        "오늘의 운은 크게 터지기보다 맞는 순간에 슬쩍 붙는 형태에 가깝습니다.",
        "행운은 억지로 잡기보다 타이밍을 맞출 때 더 잘 붙습니다.",
      ],
      advice: [
        "기회가 보여도 한 번 더 결을 확인한 뒤 잡는 편이 좋습니다.",
        "운이 오는 자리는 과장된 기대보다 가벼운 실행에서 먼저 열립니다.",
        "오늘의 행운은 빠른 눈치와 가벼운 움직임에 더 잘 반응합니다.",
      ],
      caution: [
        "행운만 믿고 기준 없이 움직이면 오히려 빈손이 될 수 있습니다.",
        "좋은 흐름도 과신하면 금방 새어 나갈 수 있습니다.",
        "운이 붙는 날일수록 쉬운 길만 좇으면 결이 흐려집니다.",
      ],
    },
    relationship: {
      scoreBias: { love: 1 },
      interpretation: [
        "대인관계 운은 말보다 분위기와 반응의 간격에서 드러납니다.",
        "오늘 사람 사이는 직접적인 표현보다 태도의 결에서 힘이 갈립니다.",
        "관계의 흐름은 누가 먼저 이해하려 드느냐에서 판이 달라집니다.",
      ],
      advice: [
        "바로 맞서기보다 상대의 반응을 한 박자 더 읽어 보세요.",
        "오늘은 옳고 그름보다 분위기를 고르게 만드는 말이 더 중요합니다.",
        "사람 사이에서는 센 해석보다 부드러운 확인이 더 잘 먹힙니다.",
      ],
      caution: [
        "말 한마디를 크게 키워 해석하면 관계 피로가 빨리 쌓입니다.",
        "사소한 반응에 의미를 과하게 부여하면 마음이 먼저 멀어질 수 있습니다.",
        "감정이 흔들리는 순간 바로 단정하면 관계가 거칠어질 수 있습니다.",
      ],
    },
    decision: {
      scoreBias: { overall: 1, work: 1 },
      interpretation: [
        "결정운은 답 자체보다 지금 결정해도 되는 판인지부터 읽어야 합니다.",
        "오늘은 빠른 결단보다 맞는 시점의 선택이 더 중요합니다.",
        "선택의 무게는 결과보다 타이밍에서 갈릴 가능성이 큽니다.",
      ],
      advice: [
        "움직일 결정과 미뤄 둘 결정을 분리해서 보세요.",
        "답을 하나로 몰기보다 지금 정할 것과 남길 것을 나누는 편이 좋습니다.",
        "오늘은 결론보다 판별이 먼저입니다. 순서를 세워 결정하세요.",
      ],
      caution: [
        "결정을 늦추는 것과 회피하는 것은 다르니 헷갈리지 마세요.",
        "확신이 부족한데도 결론부터 밀면 뒷수습이 길어질 수 있습니다.",
        "애매함을 못 견뎌 성급히 정하면 본래보다 더 손해를 볼 수 있습니다.",
      ],
    },
  },
  love: {
    solo: {
      scoreBias: { love: 1, overall: 1 },
      interpretation: [
        "솔로 운은 새 인연보다 내 마음의 문이 어느 쪽을 향하는지에서 먼저 읽힙니다.",
        "지금은 누군가를 만나는 운보다 끌림을 받아낼 준비가 되어 있는지가 중요합니다.",
        "솔로 흐름에서는 기회보다 태도와 분위기가 먼저 운을 만듭니다.",
      ],
      advice: [
        "억지로 인연을 찾기보다 자연스럽게 시선을 트는 쪽이 좋습니다.",
        "마음을 닫아 두기보다 가볍게 호응하는 태도가 운을 부릅니다.",
        "새 만남은 준비된 자리에서 오니 분위기를 먼저 가볍게 하세요.",
      ],
      caution: [
        "외로움이 크다고 아무 신호나 인연으로 착각하지 않는 편이 좋습니다.",
        "관심과 호의를 너무 빨리 관계로 단정하면 실망이 커질 수 있습니다.",
        "초반의 작은 반응을 크게 해석하면 마음이 먼저 지칠 수 있습니다.",
      ],
    },
    some: {
      scoreBias: { love: 1 },
      interpretation: [
        "썸 운은 확정된 답보다 거리의 변화와 반응 속도에서 읽힙니다.",
        "애매한 관계일수록 말보다 리듬과 간격이 진짜 마음을 드러냅니다.",
        "썸의 흐름은 누가 먼저 밀어붙이느냐보다 누가 더 안정적으로 반응하느냐에 달립니다.",
      ],
      advice: [
        "확답을 재촉하기보다 흐름이 붙는 순간을 한 번 더 확인하세요.",
        "말을 크게 하기보다 꾸준한 반응으로 결을 확인하는 편이 좋습니다.",
        "애매함을 견디되 무작정 끌려가지 말고 기준은 분명히 두세요.",
      ],
      caution: [
        "답답함 때문에 관계를 빨리 정의하려 들면 흐름이 끊길 수 있습니다.",
        "상대의 작은 변화에 일희일비하면 중심이 쉽게 무너집니다.",
        "침묵 하나를 크게 키워 해석하면 오히려 본래보다 멀어질 수 있습니다.",
      ],
    },
    dating: {
      scoreBias: { love: 1, overall: 1 },
      interpretation: [
        "연애중 운은 감정보다 관계를 운영하는 방식에서 차이가 드러납니다.",
        "현재 관계는 사랑의 크기보다 호흡과 균형이 더 중요하게 작동합니다.",
        "사귀는 사이일수록 익숙함이 흐름을 살리기도 하고 무디게 만들기도 합니다.",
      ],
      advice: [
        "감정 표현보다 생활 리듬과 말의 온도를 먼저 맞춰 보세요.",
        "지금은 큰 이벤트보다 작은 배려가 관계를 더 안정시킵니다.",
        "익숙함에 기대기보다 한 번 더 살피는 태도가 필요합니다.",
      ],
      caution: [
        "가까운 사이라고 설명을 줄이면 오해가 더 커질 수 있습니다.",
        "서운함을 바로 판단으로 연결하면 관계가 쉽게 거칠어집니다.",
        "익숙하다는 이유로 마음을 생략하면 거리감이 커질 수 있습니다.",
      ],
    },
    reunion: {
      scoreBias: { love: 1, overall: -1 },
      interpretation: [
        "재회 운은 다시 붙는가보다 왜 끊어졌는가를 먼저 비춥니다.",
        "다시 만나는 흐름은 감정보다 미해결된 결이 남아 있는지에서 갈립니다.",
        "재회는 그리움만으로 열리기보다 예전 패턴이 끝났는지가 중요합니다.",
      ],
      advice: [
        "다시 이어질 가능성을 보되, 같은 문제를 되풀이하지 않을 기준을 먼저 세우세요.",
        "그리움에 바로 손을 내밀기보다 지금 달라진 점이 있는지부터 보세요.",
        "재회를 원한다면 마음보다 패턴의 변화부터 확인하는 편이 좋습니다.",
      ],
      caution: [
        "추억이 강할수록 현재를 과소평가하고 과거를 미화하기 쉽습니다.",
        "그리움만으로 움직이면 같은 막힘이 다시 반복될 수 있습니다.",
        "옛 감정에 끌려 기준을 낮추면 다시 상처가 남을 수 있습니다.",
      ],
    },
  },
  money: {
    saving: {
      scoreBias: { money: 1 },
      interpretation: [
        "저축운은 많이 벌기보다 얼마나 새지 않게 지키는지에서 판이 갈립니다.",
        "오늘 돈의 흐름은 공격보다 보존과 정비에 더 힘이 실립니다.",
        "모으는 운은 큰 수입보다 관리 감각에서 먼저 드러납니다.",
      ],
      advice: [
        "새는 구멍부터 막고 자동으로 지켜지는 구조를 만드는 편이 좋습니다.",
        "수입을 늘리는 생각보다 지출을 고르게 정리하는 쪽이 먼저입니다.",
        "돈을 모으고 싶다면 오늘은 쓰는 결부터 다듬는 편이 맞습니다.",
      ],
      caution: [
        "작은 금액이라고 가볍게 넘기면 전체 흐름이 흐려질 수 있습니다.",
        "절약이 과해도 오래 가지 못하니 무리한 통제는 피하세요.",
        "모은다는 압박만 커지면 소비 반동이 더 커질 수 있습니다.",
      ],
    },
    spending: {
      scoreBias: { money: -1, overall: -1 },
      interpretation: [
        "지출운은 꼭 큰돈보다 습관성 소비와 충동 반응에서 먼저 드러납니다.",
        "돈이 빠지는 흐름은 계획된 지출보다 순간 감정에서 더 커질 수 있습니다.",
        "오늘 소비의 결은 필요보다 분위기와 기분에 더 흔들릴 수 있습니다.",
      ],
      advice: [
        "지갑을 열기 전에 지금 필요한 것인지 한 번만 더 구분하세요.",
        "오늘은 바로 결제하기보다 하루 정도 텀을 두는 편이 유리합니다.",
        "감정이 흔들릴 때 쓰는 돈이 있는지 먼저 체크해 보세요.",
      ],
      caution: [
        "작은 보상 소비가 반복되면 생각보다 큰 누수가 생길 수 있습니다.",
        "싸게 샀다는 만족감이 실제 필요보다 앞서지 않게 조심하세요.",
        "피로와 감정이 큰 날엔 소비가 판단보다 먼저 튈 수 있습니다.",
      ],
    },
    income: {
      scoreBias: { money: 1, work: 1 },
      interpretation: [
        "수입운은 당장 큰돈보다 들어올 가능성이 열리는 자리에서 먼저 움직입니다.",
        "들어오는 돈의 흐름은 기회와 연결에서 천천히 살아날 수 있습니다.",
        "수입운은 이미 가진 것의 재활용과 연결 확장에서 힘을 얻습니다.",
      ],
      advice: [
        "작게라도 들어올 통로를 하나 더 만드는 생각이 좋습니다.",
        "기존 자원과 연결을 다시 살피면 예상 밖의 수입 기회가 보일 수 있습니다.",
        "오늘은 가능성 없는 기대보다 현실적인 작은 수입선이 더 중요합니다.",
      ],
      caution: [
        "불확실한 수입을 이미 확정된 돈처럼 계산하면 흐름이 어긋납니다.",
        "기대 수익을 앞당겨 잡으면 실제 판단이 흔들릴 수 있습니다.",
        "들어올 가능성과 손에 쥔 현실을 섞어 생각하지 않는 편이 좋습니다.",
      ],
    },
    invest: {
      scoreBias: { money: 1, work: 1, overall: -1 },
      interpretation: [
        "투자운은 수익의 크기보다 타이밍과 리스크 감각에서 판이 갈립니다.",
        "오늘 투자 흐름은 공격보다 선별과 관찰에서 더 좋은 결과를 줍니다.",
        "기회가 있어도 아무 곳이나 들어가기보다 왜 들어가는지 이유가 분명해야 합니다.",
      ],
      advice: [
        "확신보다 근거를 먼저 세우고, 들어가더라도 크기를 줄이는 편이 좋습니다.",
        "오늘은 큰 베팅보다 분할과 관찰이 더 잘 맞습니다.",
        "수익 기대보다 손실 관리 기준을 먼저 잡아 두는 것이 유리합니다.",
      ],
      caution: [
        "분위기에 밀려 들어가면 수익보다 후회가 먼저 남을 수 있습니다.",
        "급한 확신으로 들어간 자리는 빠른 흔들림에도 크게 흔들릴 수 있습니다.",
        "남의 속도에 맞춰 진입하면 본인 기준이 무너질 가능성이 큽니다.",
      ],
    },
  },
  health: {
    condition: {
      scoreBias: { overall: 1 },
      interpretation: [
        "컨디션 운은 크게 아픈가보다 몸이 얼마나 고르게 버티는지에서 읽힙니다.",
        "오늘 몸 상태는 순간 체력보다 회복 속도와 리듬에서 차이가 납니다.",
        "컨디션은 단번에 올라가기보다 생활 리듬을 어떻게 유지하느냐에 달려 있습니다.",
      ],
      advice: [
        "힘을 더 끌어쓰기보다 리듬을 일정하게 유지하는 편이 좋습니다.",
        "무리한 일정 하나를 줄이는 것이 몸에는 더 이익일 수 있습니다.",
        "오늘은 퍼포먼스보다 몸의 균형을 지키는 쪽이 맞습니다.",
      ],
      caution: [
        "괜찮다고 넘긴 피로가 저녁에 한꺼번에 올라올 수 있습니다.",
        "몸이 보내는 작은 신호를 무시하면 회복이 늦어질 수 있습니다.",
        "짧은 무리라도 연속되면 컨디션 저하가 길게 갈 수 있습니다.",
      ],
    },
    sleep: {
      scoreBias: { overall: 1 },
      interpretation: [
        "수면운은 잠의 길이보다 얼마나 깊게 쉬는지에서 차이가 납니다.",
        "오늘 회복은 일찍 눕는 것보다 몸과 ذهن을 느슨하게 만드는 데 달려 있습니다.",
        "잠의 질이 전체 운에도 영향을 주는 흐름입니다.",
      ],
      advice: [
        "자극을 늦게까지 끌고 가지 않는 편이 좋습니다.",
        "수면 전 한두 가지 자극만 줄여도 회복감이 달라질 수 있습니다.",
        "오늘은 머리를 비우는 시간이 곧 회복의 시작입니다.",
      ],
      caution: [
        "피곤한데도 늦게까지 버티면 다음 흐름이 쉽게 무너질 수 있습니다.",
        "잠을 미루는 습관이 오늘은 특히 컨디션을 크게 흔들 수 있습니다.",
        "쉬는 시간까지 생각으로 채우면 몸이 회복 신호를 놓칠 수 있습니다.",
      ],
    },
    stress: {
      scoreBias: { overall: -1, love: -1 },
      interpretation: [
        "스트레스 운은 사건보다 누적된 긴장이 어디서 터지는지에 더 가깝습니다.",
        "오늘은 바깥 문제보다 안쪽 긴장이 반응을 크게 만들 수 있습니다.",
        "피로보다 긴장감이 먼저 흐름을 무겁게 만드는 날일 수 있습니다.",
      ],
      advice: [
        "문제를 다 해결하려 하기보다 반응 강도부터 낮추는 편이 좋습니다.",
        "바로 대처하려는 마음을 조금 늦추면 긴장도 함께 내려갑니다.",
        "오늘은 해결보다 완화가 먼저입니다. 강도를 줄이세요.",
      ],
      caution: [
        "예민한 상태에선 작은 자극도 크게 받아들일 수 있습니다.",
        "감정 반응을 사실처럼 단정하면 스트레스가 더 커질 수 있습니다.",
        "기운이 흔들릴수록 사람 문제와 몸 문제를 함께 악화시킬 수 있습니다.",
      ],
    },
    recovery: {
      scoreBias: { overall: 1 },
      interpretation: [
        "회복운은 멈춘 자리에서 얼마나 잘 쉬느냐에 따라 크게 달라집니다.",
        "오늘은 버티는 힘보다 회복하는 힘이 더 중요합니다.",
        "몸은 이미 쉬어야 할 지점을 알고 있고, 회복의 문도 그 자리에서 열립니다.",
      ],
      advice: [
        "하나만 줄여도 회복이 시작될 수 있으니 무리의 양부터 덜어 보세요.",
        "회복은 큰 변화보다 작은 휴식의 반복에서 더 빠르게 옵니다.",
        "오늘은 새로 보태기보다 덜어내는 쪽이 몸에 이익입니다.",
      ],
      caution: [
        "쉬는 척만 하고 실제 긴장을 놓지 않으면 회복이 늦어집니다.",
        "회복이 된 것 같아도 바로 무리하면 다시 같은 자리로 돌아갈 수 있습니다.",
        "휴식 없는 버티기는 회복운을 가장 빨리 소모합니다.",
      ],
    },
  },
  work: {
    job: {
      scoreBias: { work: 1 },
      interpretation: [
        "직장운은 능력보다 타이밍과 협업 리듬에서 차이가 드러납니다.",
        "회사 일은 성과만큼 관계와 전달 방식이 중요하게 작동합니다.",
        "직장 흐름은 일 자체보다 주변과 맞물리는 속도에서 판이 갈립니다.",
      ],
      advice: [
        "혼자 빨리 끝내기보다 주변과 맞는 속도를 먼저 잡으세요.",
        "오늘은 결과만 던지기보다 전달 방식까지 챙기는 편이 좋습니다.",
        "직장운은 정답보다 조율 능력에서 먼저 힘이 붙습니다.",
      ],
      caution: [
        "일이 맞아도 말이 거칠면 평가가 쉽게 흔들릴 수 있습니다.",
        "성과를 급히 내려고 밀면 협업 피로가 커질 수 있습니다.",
        "혼자 처리하려는 마음이 오히려 흐름을 막을 수 있습니다.",
      ],
    },
    career: {
      scoreBias: { work: 1, overall: -1 },
      interpretation: [
        "이직운은 당장 옮기느냐보다 판이 이미 바뀌고 있는지에서 읽힙니다.",
        "움직일 운은 준비와 타이밍이 맞을 때 더 선명해집니다.",
        "이직은 감정적 탈출보다 방향 전환으로 읽을 때 더 또렷해집니다.",
      ],
      advice: [
        "당장 뛰기보다 왜 움직이려는지 이유를 선명하게 만드는 편이 좋습니다.",
        "조건만 볼 것이 아니라 지금 떠나도 되는 판인지 먼저 확인하세요.",
        "이직운이 보여도 준비 없이 속도만 내면 흐름이 쉽게 꺾일 수 있습니다.",
      ],
      caution: [
        "현재의 피로만으로 다음 자리를 고르면 같은 문제를 다시 만날 수 있습니다.",
        "불만이 크다고 탈출이 곧 정답은 아닙니다.",
        "움직임이 필요해도 방향 없는 이탈은 운을 더 흐리게 만들 수 있습니다.",
      ],
    },
    business: {
      scoreBias: { work: 1, money: 1 },
      interpretation: [
        "사업운은 아이디어보다 판을 읽는 감각과 버티는 힘에서 갈립니다.",
        "지금 사업 흐름은 기회와 리스크가 함께 보이는 구간일 수 있습니다.",
        "사업은 타이밍뿐 아니라 기준을 지키는 힘이 성패를 가를 가능성이 큽니다.",
      ],
      advice: [
        "기회가 보여도 수익보다 지속 가능성부터 따져 보세요.",
        "무리하게 넓히기보다 잘 되는 한 축을 더 단단히 하는 편이 맞습니다.",
        "오늘은 확장보다 판별과 선별이 더 중요할 수 있습니다.",
      ],
      caution: [
        "좋은 흐름이 와도 기준 없이 키우면 리스크가 더 빨리 불어날 수 있습니다.",
        "성과 욕심이 커질수록 본래 잘하던 방식이 흐려질 수 있습니다.",
        "사업운이 살아도 과신은 가장 빠른 흔들림을 부를 수 있습니다.",
      ],
    },
    study: {
      scoreBias: { work: 1, overall: 1 },
      interpretation: [
        "취업·시험운은 실력만큼 리듬과 집중 유지에서 차이가 납니다.",
        "준비운은 단번의 몰입보다 꾸준한 반복에서 더 강하게 나타납니다.",
        "오늘은 머리의 날카로움보다 흐트러지지 않는 리듬이 더 중요합니다.",
      ],
      advice: [
        "분량을 늘리기보다 집중이 살아 있는 구간을 지키는 편이 좋습니다.",
        "무리하게 새것을 더하기보다 지금 하던 것을 정리하는 쪽이 맞습니다.",
        "실수를 줄이는 공부가 오늘은 성과를 더 크게 만듭니다.",
      ],
      caution: [
        "불안이 커질수록 공부보다 걱정에 힘을 더 쓰게 될 수 있습니다.",
        "완벽하게 하려다 시작이 늦어지면 리듬이 더 무너질 수 있습니다.",
        "비교가 길어질수록 집중은 금방 흐트러질 수 있습니다.",
      ],
    },
  },
};

const subfocusScoreLines = {
  overall: {
    general: {
      overall: [
        "오늘 전체 판은 크게 치우치기보다 흐름을 읽는 사람에게 더 유리합니다.",
        "전반 운은 한쪽으로 쏠리기보다 판 전체를 보는 태도에서 살아납니다.",
      ],
    },
    luck: {
      overall: [
        "행운은 크게 터지기보다 타이밍 좋게 붙는 쪽으로 움직입니다.",
        "좋은 흐름은 준비된 자리에 얇게 붙는 형태로 들어올 가능성이 큽니다.",
      ],
      money: [
        "돈의 흐름도 의외의 기회가 스쳐 갈 수 있으니 감각을 열어 두는 편이 좋습니다.",
        "작은 기회가 현실 이익으로 이어질 여지가 있어 타이밍 감각이 중요합니다.",
      ],
    },
    relationship: {
      love: [
        "사람 사이 분위기가 관계운을 직접 끌어올릴 수 있는 날입니다.",
        "대인관계의 결이 좋아지면 감정운도 함께 안정될 가능성이 큽니다.",
      ],
    },
    decision: {
      overall: [
        "결정운은 속도보다 판별력 쪽으로 살아 있어 신중함이 오히려 이점이 됩니다.",
        "오늘은 빨리 정하는 사람보다 맞게 고르는 사람이 유리합니다.",
      ],
      work: [
        "일과 판단을 묶어 보면 선택의 질이 성과를 크게 좌우할 수 있습니다.",
        "결정의 선명함이 일의 흐름까지 함께 정리해 줄 가능성이 큽니다.",
      ],
    },
  },
  love: {
    solo: {
      love: [
        "새 인연은 억지 접근보다 자연스러운 호응 속에서 열릴 가능성이 큽니다.",
        "호감운은 조용히 붙는 쪽이라 분위기를 가볍게 두는 편이 좋습니다.",
      ],
    },
    some: {
      love: [
        "썸의 흐름은 확답보다 반응의 꾸준함에서 더 또렷하게 읽힙니다.",
        "애매한 거리에서는 큰 한마디보다 작은 반응의 연속이 더 중요합니다.",
      ],
    },
    dating: {
      love: [
        "현재 관계는 감정보다 리듬과 대화 온도에서 안정감이 결정될 수 있습니다.",
        "연애중 운은 큰 이벤트보다 일상적인 반응의 질에서 차이가 납니다.",
      ],
    },
    reunion: {
      love: [
        "재회운은 감정만으로 열리기보다 같은 문제를 넘을 수 있는지에서 갈립니다.",
        "다시 이어질 가능성은 남아 있어도 과거 패턴을 반복하지 않는 것이 더 중요합니다.",
      ],
    },
  },
  money: {
    saving: {
      money: [
        "지키는 돈의 흐름이 나쁘지 않아 새는 구멍만 줄여도 체감이 생길 수 있습니다.",
        "저축운은 공격적 확장보다 관리 감각에서 먼저 살아납니다.",
      ],
    },
    spending: {
      money: [
        "지출운은 계획된 소비보다 감정성 지출에서 더 흔들릴 수 있습니다.",
        "오늘 돈은 쓰는 순간보다 쓰기 전의 판단에서 갈릴 가능성이 큽니다.",
      ],
    },
    income: {
      money: [
        "수입운은 큰돈 한 번보다 작은 통로가 열리는 방식에 더 가깝습니다.",
        "바로 손에 잡히지 않아도 들어올 길이 조금씩 보일 수 있습니다.",
      ],
      work: [
        "일의 흐름을 다듬으면 현실적인 수입 가능성도 함께 살아날 수 있습니다.",
        "성과와 수입의 연결이 천천히 드러날 여지가 있어 꾸준함이 중요합니다.",
      ],
    },
    invest: {
      money: [
        "투자운은 수익 기대보다 리스크 관리 감각에서 훨씬 크게 갈립니다.",
        "들어갈 자리는 보여도 크기와 타이밍을 줄여 보는 편이 더 안전합니다.",
      ],
      overall: [
        "전체 흐름도 공격적 확장보다 선별적 접근에 더 우호적입니다.",
        "판 전체가 큰 베팅보다 관찰과 분할 쪽에 더 기울어 있습니다.",
      ],
    },
  },
  health: {
    condition: {
      overall: [
        "몸 상태는 큰 고저보다 꾸준함에서 더 차이가 날 가능성이 큽니다.",
        "컨디션은 버티는 힘보다 일정한 리듬을 유지하느냐에 달려 있습니다.",
      ],
    },
    sleep: {
      overall: [
        "수면의 질이 좋아지면 전체 운의 체감도 함께 안정될 수 있습니다.",
        "오늘은 잠의 깊이가 하루 전체 흐름을 생각보다 많이 좌우할 수 있습니다.",
      ],
    },
    stress: {
      overall: [
        "긴장이 먼저 올라오면 전반 흐름도 실제보다 더 거칠게 느껴질 수 있습니다.",
        "스트레스 관리가 되지 않으면 작은 일도 크게 받아들일 가능성이 큽니다.",
      ],
    },
    recovery: {
      overall: [
        "회복운은 이미 들어와 있어 얼마나 잘 쉬느냐가 결과를 바꿀 수 있습니다.",
        "덜어낼 수 있는 것을 하나만 줄여도 몸과 흐름이 함께 가벼워질 수 있습니다.",
      ],
    },
  },
  work: {
    job: {
      work: [
        "직장운은 일의 정답보다 협업 리듬과 전달 방식에서 더 크게 갈립니다.",
        "회사 일은 혼자 빨리 끝내는 것보다 흐름을 맞추는 힘이 중요합니다.",
      ],
    },
    career: {
      work: [
        "이직운은 무작정 이동보다 준비된 전환 쪽에서 더 선명해집니다.",
        "움직일 생각이 있다면 지금은 방향과 근거를 먼저 다듬는 편이 좋습니다.",
      ],
      overall: [
        "전체 흐름도 단순 탈출보다 다음 판을 준비하는 쪽에 더 우호적입니다.",
        "지금 판은 급한 이탈보다 준비된 이동을 더 밀어줄 가능성이 큽니다.",
      ],
    },
    business: {
      work: [
        "사업운은 확장보다 선별과 지속 가능성에서 더 강하게 갈릴 수 있습니다.",
        "일이 되는 자리와 안 되는 자리를 분명히 나누는 감각이 중요합니다.",
      ],
      money: [
        "돈의 흐름도 따라오지만 먼저 기준과 구조를 세우는 편이 더 안전합니다.",
        "수익 기회가 있어 보여도 관리 가능한 크기인지 먼저 보는 것이 중요합니다.",
      ],
    },
    study: {
      work: [
        "취업·시험운은 몰아서 하기보다 흐트러지지 않는 리듬에서 점수가 갈립니다.",
        "지금은 새로운 것보다 실수 줄이기와 반복 정리가 더 효율적일 수 있습니다.",
      ],
    },
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
const focusButtons = document.querySelectorAll(".focus-button");
const subfocusSelector = document.querySelector("#subfocus-selector");
let latestPrompt = "";
let latestDraw = null;
let currentPromptMode = "today";
let currentFocusMode = "overall";
let currentSubfocusKey = "general";
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

const directionTextVariants = {
  Rise: {
    summary: [
      "멈춰 있던 것을 움직일수록 길이 열립니다. 작은 시도라도 먼저 시작하는 쪽이 유리합니다.",
      "가만히 재기보다 먼저 움직일 때 흐름이 살아납니다. 작은 실행이 판을 바꿉니다.",
      "오늘은 출발점에서 망설이지 않을수록 운이 붙습니다. 먼저 손을 대는 쪽이 유리합니다.",
    ],
    advice: [
      "질문을 남기기보다 행동으로 확인하세요. 연락, 제안, 시작, 발표에 힘이 실립니다.",
      "계속 계산만 하기보다 직접 움직여 보세요. 제안, 확인, 시작 같은 행동이 잘 먹힙니다.",
      "답을 기다리기보다 먼저 건네는 쪽이 좋습니다. 오늘은 행동이 가장 빠른 확인입니다.",
    ],
    caution: [
      "속도가 붙는 만큼 기준 없이 퍼뜨리면 피로가 빠르게 쌓일 수 있습니다.",
      "움직임이 빠른 날일수록 방향 없이 벌리면 힘이 금방 새어 나갑니다.",
      "시작운이 강한 대신 무리하게 넓히면 집중력이 흐트러질 수 있습니다.",
    ],
  },
  Hold: {
    summary: [
      "지금은 밀어붙이는 것보다 상태를 정돈하고 안정시키는 흐름이 강합니다.",
      "오늘은 전진보다 정비가 더 힘을 가집니다. 판을 고르게 하는 편이 맞습니다.",
      "무리한 속도보다 균형과 정리가 우선입니다. 차분히 다듬을수록 흐름이 안정됩니다.",
    ],
    advice: [
      "점검, 조율, 보류, 자료 정리에 적합합니다. 오늘의 힘은 속도보다 정확성에 있습니다.",
      "크게 벌리기보다 점검과 조율에 힘을 주세요. 오늘은 정확성이 속도보다 중요합니다.",
      "잠깐 멈춰 흐름을 다듬으세요. 정리, 검토, 재확인이 좋은 결과로 이어집니다.",
    ],
    caution: [
      "안전함에만 머물면 필요한 기회를 놓칠 수 있으니 작은 결론은 남겨 두세요.",
      "조심스러움이 지나치면 기회까지 늦어질 수 있으니 꼭 필요한 결정은 남겨 두세요.",
      "보류가 길어지면 흐름도 무거워집니다. 멈추더라도 최소한의 방향은 정해 두세요.",
    ],
  },
  Release: {
    summary: [
      "불필요한 집착이나 끝난 흐름을 내려놓을수록 새로운 자리가 확보됩니다.",
      "비워 낼수록 다음 흐름이 들어옵니다. 정리와 단절이 오히려 길을 만듭니다.",
      "쥐고 있던 것을 덜어낼 때 운이 가벼워집니다. 내려놓음이 곧 전환점이 됩니다.",
    ],
    advice: [
      "정리, 삭제, 단절, 청소, 마감에 행운이 붙습니다. 덜어내는 선택이 답이 됩니다.",
      "오늘은 비우는 선택이 유리합니다. 정리하고 끝내는 일이 새 흐름을 부릅니다.",
      "마감과 청소, 관계 정리가 잘 맞습니다. 남길 것과 버릴 것을 분명히 나누세요.",
    ],
    caution: [
      "급하게 끊어버리기보다 무엇을 남길지까지 확인해야 후회가 줄어듭니다.",
      "정리운이 강해도 성급한 단절은 금물입니다. 남길 기준까지 함께 세워야 합니다.",
      "비우는 날일수록 급한 손절은 후회를 남길 수 있으니 끝까지 점검하고 정리하세요.",
    ],
  },
};

const trigramTextVariants = {
  Heaven: {
    theme: ["시야가 위로 열리고 큰 관점이 강조됩니다.", "판을 넓게 보는 시선이 중요해지고 큰 흐름이 먼저 보입니다.", "작은 감정보다 큰 방향과 기준이 앞에 놓입니다."],
    advice: ["사소한 감정에 갇히지 말고 기준과 비전을 먼저 세우세요.", "눈앞의 반응보다 큰 방향을 먼저 붙드세요.", "세세한 흔들림보다 기준과 큰 그림을 먼저 확인하세요."],
  },
  Lake: {
    theme: ["관계, 대화, 취향, 즐거움이 중요하게 작동합니다.", "사람 사이의 분위기와 교류가 흐름을 크게 바꿉니다.", "말과 만남, 호감의 결이 판을 움직이는 날입니다."],
    advice: ["기분 좋은 교류가 돌파구가 될 수 있으니 말을 부드럽게 여세요.", "좋은 분위기를 만드는 말 한마디가 흐름을 열 수 있습니다.", "관계를 거칠게 밀지 말고 부드러운 교류부터 시작하세요."],
  },
  Fire: {
    theme: ["주목, 표현, 드러남, 선명함이 커지는 상황입니다.", "숨기던 것이 드러나고 표현력이 중요해지는 구간입니다.", "보이는 힘이 커져 존재감과 선명함이 앞에 서는 날입니다."],
    advice: ["보이게 만들수록 유리합니다. 아이디어나 결과를 숨기지 마세요.", "감춘 것보다 드러낸 것이 힘을 얻습니다. 표현을 아끼지 마세요.", "오늘은 보여 주는 쪽이 이깁니다. 생각과 결과를 밖으로 꺼내세요."],
  },
  Thunder: {
    theme: ["예상보다 빠른 변화와 깨움의 기운이 들어옵니다.", "갑작스러운 움직임과 전환이 판을 흔들 수 있습니다.", "빠른 신호와 즉각적인 반응이 중요한 흐름입니다."],
    advice: ["순간의 신호를 놓치지 마세요. 반응 속도가 중요한 날입니다.", "느린 판단보다 재빠른 포착이 더 큰 힘을 냅니다.", "들어오는 변화에 한 박자 빠르게 반응하는 편이 좋습니다."],
  },
  Wind: {
    theme: ["보이지 않게 스며드는 영향과 분위기 변화가 큽니다.", "작은 영향이 천천히 퍼지며 판을 바꾸는 기운입니다.", "직접적인 충돌보다 은근한 분위기 변화가 더 크게 작동합니다."],
    advice: ["강하게 밀기보다 조금씩 스며드는 방식을 택하면 좋습니다.", "정면 승부보다 천천히 스미는 방식이 잘 맞습니다.", "큰 압박보다 은근한 설득과 지속적인 태도가 유리합니다."],
  },
  Water: {
    theme: ["불확실성과 깊은 감정, 조심스러운 흐름이 공존합니다.", "깊은 감정과 애매한 기류가 함께 흐르는 날입니다.", "판이 단순하지 않아 감정과 상황을 함께 읽어야 합니다."],
    advice: ["확인 전에는 단정하지 말고, 우회 경로를 준비하세요.", "애매한 신호는 서둘러 해석하지 말고 한 번 더 확인하세요.", "직선으로 밀기보다 여유 있는 우회 경로를 함께 준비하세요."],
  },
  Mountain: {
    theme: ["멈춤, 집중, 경계 설정이 필요한 구간입니다.", "판을 좁히고 핵심만 붙들어야 하는 흐름입니다.", "반응보다 멈춤과 경계가 더 큰 힘을 갖는 날입니다."],
    advice: ["반응을 줄이고 핵심만 남기면 에너지가 다시 모입니다.", "불필요한 반응을 덜어낼수록 집중력이 살아납니다.", "흩어진 것을 멈추고 핵심만 남기는 쪽이 맞습니다."],
  },
  Earth: {
    theme: ["현실 감각, 수용, 지속성이 바닥을 잡아 줍니다.", "생활감과 기본기가 흐름의 중심을 잡아 줍니다.", "크게 흔들리기보다 꾸준함과 현실감이 힘을 내는 날입니다."],
    advice: ["기본기를 지키고 생활 리듬을 안정시키면 운이 따라옵니다.", "생활의 리듬을 먼저 바로잡으면 판도 차분해집니다.", "화려한 선택보다 기본기를 지키는 태도가 오늘은 더 강합니다."],
  },
};

const headlineTemplates = {
  Rise: [
    "{focus} 길을 여는 쪽으로 움직일 때, {trigram}의 기운이 앞을 밀고 있습니다.",
    "{focus} 먼저 손을 내밀수록, {trigram}의 기운이 흐름을 당겨 옵니다.",
    "{focus} 움직임이 답이 되는 날, {trigram}의 기운이 주변을 깨웁니다.",
  ],
  Hold: [
    "{focus} 멈춤 속에서 기준을 세울 때, {trigram}의 기운이 판을 고르게 만듭니다.",
    "{focus} 서두르지 않고 다듬을수록, {trigram}의 기운이 흐름을 안정시킵니다.",
    "{focus} 한 번 더 살펴볼 때, {trigram}의 기운이 진짜 결을 드러냅니다.",
  ],
  Release: [
    "{focus} 덜어낼수록 길이 선명해질 때, {trigram}의 기운이 막힌 자리를 풉니다.",
    "{focus} 비워 낸 자리 위로, {trigram}의 기운이 새 흐름을 데려옵니다.",
    "{focus} 놓아야 할 것을 놓을 때, {trigram}의 기운이 판을 가볍게 돌립니다.",
  ],
};

const shinjeomToneEchoes = {
  gentle: [
    "작은 기척도 가볍게 넘기지 않는 편이 좋다.",
    "조용한 흐름일수록 뜻은 더 깊게 남는다.",
    "오늘은 힘보다 결을 읽는 쪽이 맞다.",
  ],
  stern: [
    "지금의 기운은 흐트러진 마음을 오래 두지 말라고 말한다.",
    "답을 서두르기보다 결을 바로 세우는 일이 먼저다.",
    "흔들린 자리를 바로잡을수록 뜻도 또렷해진다.",
  ],
  warning: [
    "조급한 마음은 들어온 기운을 가장 먼저 흐린다.",
    "지나친 확신은 오히려 올바른 신호를 가린다.",
    "오늘은 급한 해석이 가장 큰 빗나감을 만든다.",
  ],
};

const recentSelections = new Map();

function sample(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function sampleNonRepeating(key, items) {
  if (!items || items.length === 0) {
    return null;
  }
  if (items.length === 1) {
    recentSelections.set(key, items[0]);
    return items[0];
  }

  const last = recentSelections.get(key);
  const pool = items.filter((item) => item !== last);
  const picked = sample(pool.length > 0 ? pool : items);
  recentSelections.set(key, picked);
  return picked;
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

function weightedPickNonRepeating(key, items, weights) {
  const lastName = recentSelections.get(key);
  const pool =
    lastName && items.length > 1
      ? items.filter((item) => item.name !== lastName)
      : items;
  const picked = weightedPick(pool.length > 0 ? pool : items, weights);
  recentSelections.set(key, picked.name);
  return picked;
}

function createDirectionVariant(direction) {
  const variants = directionTextVariants[direction.name];
  return {
    ...direction,
    summary: sampleNonRepeating(`direction-summary-${direction.name}`, variants?.summary ?? [direction.summary]),
    advice: sampleNonRepeating(`direction-advice-${direction.name}`, variants?.advice ?? [direction.advice]),
    caution: sampleNonRepeating(`direction-caution-${direction.name}`, variants?.caution ?? [direction.caution]),
  };
}

function createTrigramVariant(trigram) {
  const variants = trigramTextVariants[trigram.name];
  return {
    ...trigram,
    theme: sampleNonRepeating(`trigram-theme-${trigram.name}`, variants?.theme ?? [trigram.theme]),
    advice: sampleNonRepeating(`trigram-advice-${trigram.name}`, variants?.advice ?? [trigram.advice]),
  };
}

function fillHeadlineTemplate(template, focus, trigram) {
  return template
    .replace("{focus}", focus.headline)
    .replace("{trigram}", trigram.label);
}

function getCurrentSubfocus() {
  const options = subfocusModes[currentFocusMode] ?? subfocusModes.overall;
  return options.find((item) => item.key === currentSubfocusKey) ?? options[0];
}

function getSubfocusFlavor(focusMode, subfocusKey) {
  return subfocusFlavor[focusMode]?.[subfocusKey] ?? {
    scoreBias: {},
    interpretation: ["오늘은 세부 상황의 결을 조금 더 세심하게 보는 편이 좋습니다."],
    advice: ["세부 상황을 크게 몰아가지 말고 차분히 읽는 편이 맞습니다."],
    caution: ["한쪽 사례에만 과하게 마음을 싣지 않는 편이 좋습니다."],
  };
}

function renderSubfocusOptions() {
  const options = subfocusModes[currentFocusMode] ?? subfocusModes.overall;
  if (!options.some((item) => item.key === currentSubfocusKey)) {
    currentSubfocusKey = options[0].key;
  }

  subfocusSelector.innerHTML = "";
  for (const option of options) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "subfocus-button";
    button.dataset.subfocusKey = option.key;
    button.textContent = option.label;
    button.classList.toggle("is-selected", option.key === currentSubfocusKey);
    button.addEventListener("click", () => {
      currentSubfocusKey = option.key;
      renderSubfocusOptions();
      if (!latestDraw) {
        drawStatus.textContent = `${focusModes[currentFocusMode].label} · ${option.label} 중심으로, 카드 뒷면을 고르고 기운을 불러 보세요`;
      }
      updatePromptOutput();
    });
    subfocusSelector.append(button);
  }
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

function createTarotBackArt() {
  const palette = { top: "#1a2140", bottom: "#0b1020", accent: "#eed79a", glow: "#fff0bb" };
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 520">
  <defs>
    <linearGradient id="bg" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="${palette.top}"/>
      <stop offset="100%" stop-color="${palette.bottom}"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="24%" r="44%">
      <stop offset="0%" stop-color="${palette.glow}" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="${palette.glow}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect x="12" y="12" width="296" height="496" rx="26" fill="url(#bg)" stroke="${palette.accent}" stroke-opacity="0.55" />
  <rect x="28" y="28" width="264" height="464" rx="18" fill="none" stroke="${palette.accent}" stroke-opacity="0.26" />
  <rect x="48" y="48" width="224" height="424" rx="14" fill="none" stroke="${palette.accent}" stroke-opacity="0.18" />
  <circle cx="160" cy="166" r="84" fill="url(#glow)" opacity="0.78" />
  <circle cx="160" cy="166" r="68" fill="none" stroke="${palette.accent}" stroke-opacity="0.72" />
  <circle cx="160" cy="166" r="48" fill="none" stroke="${palette.accent}" stroke-opacity="0.5" />
  <path d="M90 266 Q160 216 230 266" fill="none" stroke="${palette.accent}" stroke-opacity="0.4" stroke-width="2"/>
  <path d="M90 290 Q160 340 230 290" fill="none" stroke="${palette.accent}" stroke-opacity="0.36" stroke-width="2"/>
  <path d="M112 388 Q160 354 208 388 Q160 424 112 388Z" fill="none" stroke="${palette.accent}" stroke-opacity="0.3"/>
  <circle cx="160" cy="166" r="20" fill="none" stroke="${palette.accent}" stroke-opacity="0.72" />
  <text x="160" y="430" text-anchor="middle" fill="${palette.accent}" fill-opacity="0.84" font-size="12" font-family="IBM Plex Sans KR, sans-serif" letter-spacing="5">CARD BACK</text>
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
    choiceArt.onerror = null;
    choiceArt.src = createTarotBackArt();
    choiceArt.alt = `${index + 1}번째 카드 뒷면`;
    button.querySelector(".choice-name").textContent = "";
    button.setAttribute("aria-label", `${index + 1}번째 카드 뒷면 선택`);
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

function deriveScores(card, direction, trigram, choice, focusMode, subfocus) {
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

  const scores = {
    overall: randomScore(base + choice.scoreBias.overall),
    love: randomScore(base + loveBias + choice.scoreBias.love),
    work: randomScore(base + workBias + choice.scoreBias.work),
    money: randomScore(base + moneyBias + choice.scoreBias.money),
  };

  const focus = focusModes[focusMode] ?? focusModes.overall;
  scores[focus.scoreKey] = Math.min(5, scores[focus.scoreKey] + 1);
  if (focusMode === "health") {
    scores.overall = Math.min(5, scores.overall + 1);
  }

  const flavorBias = getSubfocusFlavor(focusMode, subfocus.key).scoreBias ?? {};
  for (const [key, value] of Object.entries(flavorBias)) {
    if (scores[key] !== undefined) {
      scores[key] = Math.min(5, Math.max(1, scores[key] + value));
    }
  }

  return scores;
}

function buildHeadline(direction, trigram, focus) {
  const template = sampleNonRepeating(
    `headline-${direction.name}`,
    headlineTemplates[direction.name],
  );
  return fillHeadlineTemplate(template, focus, trigram);
}

function buildInterpretation(card, direction, trigram, focus, subfocus) {
  const toneMap = {
    bright: "운은 열린 쪽으로 기울어 있으니 지나친 망설임만 줄이면 됩니다.",
    mist: "흐름이 흐릿할수록 서두르기보다 감각을 세우는 편이 맞습니다.",
    ember: "열감이 큰 날이라 밀어붙이기보다 힘의 방향을 조절하는 것이 중요합니다.",
    gold: "균형을 지킬수록 결과가 안정되고 무리한 선택은 덜어집니다.",
    rose: "감정의 결이 진해지는 날이라 반응보다 진심의 방향이 더 중요합니다.",
  };
  const flavor = getSubfocusFlavor(focus.key ?? "overall", subfocus.key);
  const subfocusLine = sampleNonRepeating(
    `subfocus-interpret-${focus.label}-${subfocus.key}`,
    flavor.interpretation,
  );

  return [
    `${focus.label} 중에서도 ${subfocus.label} 쪽으로 보면 ${subfocus.summary}`,
    subfocusLine,
    `메인 카드는 ${card.summary}`,
    `오늘의 방향은 ${direction.label}이라 ${direction.summary}`,
    `${trigram.label}의 기운이 깔려 ${trigram.theme}`,
    toneMap[card.tone],
  ].join(" ");
}

function buildAdvice(direction, trigram, scores, focus, subfocus) {
  const flavor = getSubfocusFlavor(focus.key ?? "overall", subfocus.key);
  const strongest = scoreLabels
    .map(({ key, label }) => ({ key, label, value: scores[key] }))
    .sort((left, right) => right.value - left.value)[0];

  return `${sampleNonRepeating(
    `subfocus-advice-${focus.label}-${subfocus.key}`,
    flavor.advice,
  )} ${direction.advice} ${trigram.advice} 오늘 가장 힘이 실리는 쪽은 ${strongest.label}입니다.`;
}

function buildCaution(card, direction, scores, focus, subfocus) {
  const flavor = getSubfocusFlavor(focus.key ?? "overall", subfocus.key);
  const weakest = scoreLabels
    .map(({ key, label }) => ({ key, label, value: scores[key] }))
    .sort((left, right) => left.value - right.value)[0];

  return `${sampleNonRepeating(
    `subfocus-caution-${focus.label}-${subfocus.key}`,
    flavor.caution,
  )} ${card.shadow}. ${direction.caution} 특히 ${weakest.label}에서는 과잉 해석과 과잉 반응을 줄이는 편이 좋습니다.`;
}

function buildScoreInsightLine(key, score, draw) {
  const levelMap = {
    5: "아주 강하게",
    4: "안정적으로",
    3: "무난하게",
    2: "예민하게",
    1: "조심스럽게",
  };
  const level = levelMap[score] ?? "복합적으로";
  const focusedLines =
    subfocusScoreLines[draw.focus.key]?.[draw.subfocus.key]?.[key] ?? null;
  if (focusedLines?.length) {
    return `${level} 흐릅니다. ${sampleNonRepeating(
      `score-line-${draw.focus.key}-${draw.subfocus.key}-${key}`,
      focusedLines,
    )}`;
  }
  const lineByKey = {
    overall: `${level} 흐릅니다. ${draw.direction.summary} ${draw.oracle}`,
    love: `${level} 반응합니다. ${draw.card.positive}의 결이 관계에 스미고, 감정 해석은 조금 덜어낼수록 좋습니다.`,
    work: `${level} 힘이 실립니다. ${draw.direction.advice} ${draw.trigram.advice}`,
    money: `${level} 작동합니다. 지출과 판단은 빠르게 움직이기보다 기준을 먼저 세우는 쪽이 유리합니다.`,
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

  return `${mode.label} 중심 복합 운세를 해석해줘.

조건:
- 차분하고 자연스러운 한국어
- 과장 없이 단정하게
- 아래 소제목 순서 유지
${sectionList}
- ${mode.horizon} 기준 미래 예측 포함
- ${mode.focus}에 가장 무게를 둘 것
- 모든 내용은 서로 충돌하지 않게 하나의 흐름으로 쓸 것

[원본 데이터]
- 중점 운: ${draw.focus.label}
- 세부 상황: ${draw.subfocus.label}
- 선택 카드: ${draw.choice.label}
- 메인 카드: ${draw.card.name}
- 카드 요약: ${draw.card.summary}
- 카드의 빛: ${draw.card.positive}
- 카드의 그림자: ${draw.card.shadow}
- 방향성: ${draw.direction.label}
- 방향 요약: ${draw.direction.summary}
- 상황 기운: ${draw.trigram.label}
- 상황 테마: ${draw.trigram.theme}
- 상황 조언: ${draw.trigram.advice}
- 점수: 전체 ${draw.scores.overall}/5, 관계 ${draw.scores.love}/5, 일 ${draw.scores.work}/5, 돈 ${draw.scores.money}/5
- 오라클: ${draw.oracle}
- 현재 해석: ${draw.interpretation}
- 조언: ${draw.advice}
- 주의: ${draw.caution}
- 신점: ${draw.shinjeomLine}
- 신점 깊은 메시지: ${draw.shinjeomDeepMessage}
- 받들어야 할 기운: ${draw.shinjeomGuidance}

이 데이터를 바탕으로 ${mode.label} 위주 최종 해석을 써줘.
반드시 포함:
- 가까운 미래 흐름
- 잘 타면 어떻게 되는지
- 잘못 다루면 어디서 어긋나는지`;
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
  const basePool = cardSpecific
    ? cardSpecific[tone] ?? cardSpecific.gentle
    : shinjeomOpenings[direction.name][tone];
  const opening = sampleNonRepeating(
    `shinjeom-opening-${direction.name}-${card.energy}-${tone}`,
    basePool,
  );
  const echo = sampleNonRepeating(`shinjeom-echo-${tone}`, shinjeomToneEchoes[tone]);

  return {
    text: `${opening} ${echo}`,
    tone,
  };
}

function buildShinjeomDeepMessage(card, direction, oracle, tone) {
  const bridge = sampleNonRepeating(`shinjeom-bridge-${tone}`, shinjeomBridgeLines[tone]);
  const closer = sampleNonRepeating(
    `shinjeom-closer-${direction.name}-${tone}`,
    shinjeomDirectionClosers[direction.name][tone],
  );
  return `${card.summary} ${oracle} ${bridge} ${closer}`;
}

function buildShinjeomGuidance(direction, trigram, tone) {
  return `${sampleNonRepeating(
    `shinjeom-guidance-${direction.name}-${tone}`,
    shinjeomGuidanceByDirection[direction.name][tone],
  )} ${trigram.advice}`;
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
  const focus = { key: currentFocusMode, ...(focusModes[currentFocusMode] ?? focusModes.overall) };
  const subfocus = getCurrentSubfocus();
  const card = sampleNonRepeating("main-card", tarotCards);
  const direction = createDirectionVariant(
    weightedPickNonRepeating("direction", directions, choice.directionBias),
  );
  const trigram = createTrigramVariant(sampleNonRepeating("trigram", trigrams));
  const oracle = sampleNonRepeating("oracle", oracleLines);
  const scores = deriveScores(card, direction, trigram, choice, currentFocusMode, subfocus);
  const headline = buildHeadline(direction, trigram, focus);
  const interpretation = buildInterpretation(card, direction, trigram, focus, subfocus);
  const advice = buildAdvice(direction, trigram, scores, focus, subfocus);
  const caution = buildCaution(card, direction, scores, focus, subfocus);
  const shinjeomBase = buildShinjeomLine(card, direction, choice);
  const shinjeomLine = shinjeomBase.text;
  const shinjeomDeepMessage = buildShinjeomDeepMessage(card, direction, oracle, shinjeomBase.tone);
  const shinjeomGuidance = buildShinjeomGuidance(direction, trigram, shinjeomBase.tone);

  return {
    choice,
    focus,
    subfocus,
    card,
    direction,
    trigram,
    oracle,
    scores,
    headline,
    summary: `${focus.label}의 ${subfocus.label}을 중점으로 두고, ${choice.label} 카드의 선택 위에 ${card.name}의 중심 메시지, ${direction.label}의 방향성, ${trigram.label}의 기운이 겹쳐진 결과입니다.`,
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
    drawStatus.textContent = "먼저 카드 뒷면 한 장을 고른 뒤 기운을 불러 주세요";
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
  drawStatus.textContent = `${draw.focus.label} 중심으로 ${draw.choice.label}의 기운이 열렸습니다`;
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
  drawStatus.textContent = `${focusModes[currentFocusMode].label} · ${getCurrentSubfocus().label} 중심으로, 카드 뒷면을 고르고 기운을 불러 보세요`;
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
  renderSubfocusOptions();
  choiceButtons.forEach((button) => {
    button.classList.remove("is-selected");
    button.disabled = false;
  });
}

initializeView();

drawButton.addEventListener("click", () => {
  if (pendingChoiceSlot === null) {
    drawStatus.textContent = "카드 뒷면 한 장을 먼저 고르세요";
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
    drawStatus.textContent = `${pendingChoiceSlot + 1}번째 카드가 선택되었습니다. 이제 구슬을 눌러 기운을 부르세요`;
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

focusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFocusMode = button.dataset.focusMode;
    focusButtons.forEach((item) => {
      item.classList.toggle("is-selected", item === button);
    });
    const linkedPromptMode = focusModes[currentFocusMode]?.promptMode;
    if (linkedPromptMode) {
      currentPromptMode = linkedPromptMode;
      promptModeButtons.forEach((item) => {
        item.classList.toggle("is-selected", item.dataset.promptMode === linkedPromptMode);
      });
    }
    renderSubfocusOptions();
    if (!latestDraw) {
      drawStatus.textContent = `${focusModes[currentFocusMode].label} · ${getCurrentSubfocus().label} 중심으로, 카드 뒷면을 고르고 기운을 불러 보세요`;
    }
    updatePromptOutput();
  });
});

retryButton.addEventListener("click", () => {
  initializeView();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
