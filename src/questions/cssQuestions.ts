export const CssQuizData = [
  {
    question: "CSS에서 박스 모델의 내부 여백을 설정하는 속성은 무엇인가?",
    options: ["A. margin", "B. padding", "C. border", "D. space"],
    answer: 1,
    explanation:
      "박스 모델의 내부 여백을 설정할 때는 padding 속성을 사용합니다.",
  },

  {
    question: "CSS에서 요소의 투명도를 설정하는 속성은 무엇인가?",
    options: [
      "A. opacity",
      "B. transparent",
      "C. visibility",
      "D. translucent",
    ],
    answer: 0,
    explanation: "요소의 투명도를 설정할 때는 opacity 속성을 사용합니다.",
  },
  {
    question: "CSS에서 요소의 배경 이미지를 설정하는 속성은 무엇인가?",
    options: [
      "A. background-image",
      "B. image",
      "C. background",
      "D. image-source",
    ],
    answer: 0,
    explanation:
      "요소의 배경 이미지를 설정할 때는 background-image 속성을 사용합니다.",
  },
  {
    question: "CSS에서 박스의 너비와 높이를 설정하는 속성은?",
    options: [
      "A. box-width / box-height",
      "B. size",
      "C. width / height",
      "D. dimension",
    ],
    answer: 2,
    explanation:
      "박스의 너비와 높이를 설정하기 위해 width와 height 속성을 사용합니다.",
  },
  {
    question: "CSS에서 박스의 네 귀퉁이를 둥글게 만드는 속성은?",
    options: [
      "A. box-style",
      "B. corner-radius",
      "C. border-radius",
      "D. round-corner",
    ],
    answer: 2,
    explanation:
      "박스의 네 귀퉁이를 둥글게 만들기 위해 border-radius 속성을 사용합니다.",
  },
  {
    question: "CSS에서 요소의 글꼴 크기를 설정하는 속성은?",
    options: ["A. text-font", "B. text-size", "C. font-style", "D. font-size"],
    answer: 3,
    explanation:
      "요소의 글꼴 크기를 설정하기 위해 font-size 속성을 사용합니다.",
  },
  {
    question:
      "CSS에서 특정 요소를 마우스 오버시 다른 스타일을 적용하는 것을 나타내는 가상 클래스는?",
    options: ["A. :hover", "B. :active", "C. :focus", "D. :visited"],
    answer: 0,
    explanation:
      "특정 요소를 마우스 오버시 다른 스타일을 적용하기 위해 :hover 가상 클래스를 사용합니다.",
  },
  {
    question: "CSS에서 박스에 그림자 효과를 추가하는 속성은?",
    options: [
      "A. shadow",
      "B. box-shadow",
      "C. text-shadow",
      "D. element-shadow",
    ],
    answer: 1,
    explanation:
      "요소에 그림자 효과를 추가하기 위해 box-shadow 속성을 사용합니다.",
  },
  {
    question: "CSS에서 요소의 크기를 절대값으로 설정하는 단위는?",
    options: ["A. px", "B. %", "C. em", "D. rem"],
    answer: 0,
    explanation: "요소의 크기를 절대값으로 설정하기 위해 px 단위를 사용합니다.",
  },
  {
    question: "CSS에서 rem 사이즈의 기준이 되는 요소는?",
    options: ["A. html", "B. head", "C. body", "D. div"],
    answer: 0,
    explanation:
      "rem은 최상위 요소(html)의 사이즈를 기준으로 삼는다. rem의 r은 root를 의미한다.",
  },
  {
    question: "display에서 block 설명으로 틀린 것은?",
    options: [
      "A. 항상 새로운 라인에서 시작한다.",
      "B. 화면 크기의 전체의 가로폭을 차지한다.",
      "C. width, heigth, margin, padding 프로퍼티 지정이 불가능하다.",
      "D. block 레벨 요소 내에 inline 레벨 요소를 포함할 수 있다.",
    ],
    answer: 2,
    explanation:
      "block 요소는 width, heigth, margin, padding 프로퍼티 지정이 '가능'하다",
  },
  {
    question: "display에서 inline 속성 설명으로 틀린 것은?",
    options: [
      "A. 줄을 바꾸지않고 다른 요소와 함께 한 행에 위치한다.",
      "B. content의 너비만큼 가로폭을 차지한다.",
      "C. width, height, margin-top, margin-bottom를 지정할 수 있다.",
      "D. inline 레벨 요소 내에 block 레벨 요소를 포함할 수 없다.",
    ],
    answer: 2,
    explanation:
      "inline 요소는 width, height, margin-top, margin-bottom 프로퍼티를 지정할 수 없다. 상, 하 여백은 line-height로 지정한다.",
  },
  {
    question: "display에서 inline-block 속성 설명으로 틀린 것은?",
    options: [
      "A. block과 inline 레벨 요소의 특징을 모두 갖는다.",
      "B. 한 줄에 표현되면서 width, height, margin를 모두 지정할 수 없다",
      "C. content의 너비만큼 가로폭을 차지한다.",
      "D. 정답없음",
    ],
    answer: 1,
    explanation:
      "inline 레벨 요소와 같이 한 줄에 표현되면서 width, height, margin 프로퍼티를 모두 지정할 수 '있다'.",
  },
  {
    question: "visibility 프로퍼티의 설명으로 틀린 것은?",
    options: [
      "A. visible - 기본값으로 요소를 보이게 한다.",
      "B. hidden - 해당 요소를 보이지 않게한다.",
      "C. collapse - table 요소에 사용하며 행이나 열을 보이지 않게 한다.",
      "D. display: none; 과 같은 효과이다.",
    ],
    answer: 3,
    explanation:
      "display:none;은 해당 요소의 공간까지 사라지고, visibility: hidden;은 해당 요소의 공간은 사라지지 않고 남아있게 된다.",
  },
  {
    question: "font-family의 설명으로 틀린 것은?",
    options: [
      "A. 폰트를 지정할때 사용한다",
      "B. 폰트는 여러 개를 동시에 지정이 불가능하다. ",
      "C. 컴퓨터에 해당 폰트가 설치되어 있지 않으면 적용되지 않는다. ",
      "D. 첫번째 지정한 폰트가 컴퓨터에 설치되어 있지 않은 경우, 다음 폰트를 적용한다.",
    ],
    answer: 1,
    explanation:
      "폰트는 여러 개를 동시에 지정이 가능하다. 첫번째 지정한 폰트가 클라이언트 컴퓨터에 설치되어 있지 않은 경우, 다음에 지정된 폰트를 적용한다.",
  },

  {
    question: "CSS에서 position의 설명으로 틀린 것은??",
    options: [
      "A. static - 부모 요소 내에 자식 요소로서 존재할 때는 부모 요소의 위치를 기준으로 배치된다.",
      "B. relative - 부모를 기준으로 위치하게 된다.",
      "C. absolute - 요소는 부모 요소의 영역을 벗어나 자유롭게 어디든지 위치할 수 있다",
      "D. fixed - 스크롤이 되면 화면에서 사라진다.",
    ],
    answer: 3,
    explanation:
      "fixed는 스크롤이 되더라도 화면에서 사라지지 않고 항상 같은 곳에 위치한다.",
  },
  {
    question: "CSS에서 텍스트의 색상을 지정하는 속성은?",
    options: ["A. text-color", "B. font-color", "C. color", "D. text-style"],
    answer: 2,
    explanation: "텍스트의 색상을 지정하기 위해 color 속성을 사용합니다.",
  },
  {
    question: "Flexbox에서 아이템을 가로로 정렬하는 속성은?",
    options: [
      "A. align-items",
      "B. justify-items",
      "C. align-content",
      "D. justify-content",
    ],
    answer: 3,
    explanation:
      "Flexbox에서 아이템을 가로로 정렬하기 위해 justify-content 속성을 사용합니다.",
  },
  {
    question: "Flexbox에서 아이템의 세로 정렬을 설정하는 속성은?",
    options: [
      "A. align-items",
      "B. justify-items",
      "C. align-content",
      "D. justify-content",
    ],
    answer: 0,
    explanation:
      "Flexbox에서 아이템의 세로 정렬을 설정하기 위해 align-items 속성을 사용합니다.",
  },
  {
    question: "Flexbox에서 아이템들의 간격을 조절하는 속성은?",
    options: ["A. flex-gap", "B. item-gap", "C. gap", "D. space-between"],
    answer: 2,
    explanation:
      "Flexbox에서 아이템들의 간격을 조절하기 위해 gap 속성을 사용합니다.",
  },
];
