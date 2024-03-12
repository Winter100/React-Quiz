export const reactQuizData = [
  {
    question: "리액트에서 컴포넌트란 무엇인가요?",
    options: [
      "A. 사용자 인터페이스 레이아웃을 정의하는 코드 조각",
      "B. 데이터 모델을 정의하는 객체",
      "C. 서버에서 데이터를 가져오는 함수",
      "D. 라우팅을 관리하는 라이브러리",
    ],
    answer: 0,
    explanation:
      "리액트 컴포넌트는 사용자 인터페이스 레이아웃을 정의하는 코드 조각입니다.",
  },
  {
    question: "JSX는 무엇의 약자이며, 어떤 역할을 하나요?",
    options: [
      "A. JavaScript XML, React에서 UI를 작성하기 위한 문법",
      "B. Java XML, 브라우저 간 통신을 위한 표준",
      "C. JSON XML, 데이터 교환 형식",
      "D. JavaScript Extension, 기본 자바스크립트를 확장하는 라이브러리",
    ],
    answer: 0,
    explanation:
      "JSX는 JavaScript XML의 약자로, React에서 UI를 작성하기 위한 문법입니다.",
  },
  {
    question:
      "리액트 함수 컴포넌트에서 상태(state)를 관리하기 위해 사용되는 훅은 무엇인가요?",
    options: ["A. useStatus", "B. useState", "C. setState", "D. useReducer"],
    answer: 1,
    explanation:
      "'useState' 훅은 함수 컴포넌트에서 상태를 추가하고 관리하기 위한 것입니다.",
  },
  {
    question: "리액트에서 컴포넌트의 재렌더링을 트리거하는 것은 무엇인가?",
    options: [
      "A. props의 변경",
      "B. state의 변경",
      "C. props와 state의 변경",
      "D. 컴포넌트의 메소드 호출",
    ],
    answer: 2,
    explanation:
      "컴포넌트의 재렌더링은 'props'나 'state'가 변경되었을 때 발생하며, 둘 중 하나라도 변경되면 화면이 다시 그려집니다.",
  },
  {
    question: "리액트에서 전역 상태 관리를 위해 사용하는 hook은 무엇인가?",
    options: ["A. useContext", "B. useGlobal", "C. useStore", "D. useShared"],
    answer: 0,
    explanation:
      "전역 상태 관리를 위해 리액트에서는 'useContext'를 사용하는 컨텍스트 API를 제공합니다. 이를 활용하여 전역 상태를 관리할 수 있습니다.",
  },
  {
    question: "리액트에서 컴포넌트 스타일을 지정하는 방법은 무엇인가요?",
    options: [
      "A. Inline 스타일",
      "B. CSS 파일로 외부 스타일링",
      "C. CSS-in-JS 라이브러리 활용",
      "D. 모든 옵션",
    ],
    answer: 3,
    explanation:
      "리액트에서 컴포넌트 스타일을 지정하는 방법은 'Inline 스타일', 'CSS 파일로 외부 스타일링', 'CSS-in-JS 라이브러리' 등이 있습니다.",
  },
  {
    question:
      "React Router에서 특정 경로로 이동하기 위해 사용되는 컴포넌트는 무엇인가요?",
    options: ["A. Redirect", "B. Link", "C. Navigate", "D. Route"],
    answer: 1,
    explanation:
      "React Router에서 특정 경로로 이동하기 위해 'Link' 컴포넌트를 사용합니다.",
  },
  {
    question: "리액트에서 컴포넌트의 상태를 업데이트하는 올바른 방법은?",
    options: [
      "A. 직접 상태 변경",
      "B. setState 메서드 사용",
      "C. forceUpdate 메서드 사용",
      "D. props 변경",
    ],
    answer: 1,
    explanation:
      "'setState' 메서드를 사용하여 리액트에서 컴포넌트의 상태를 업데이트해야 합니다.",
  },
  {
    question: "리액트에서 특정 요소를 참조하기 위한 기능은 무엇인가요?",
    options: [
      "A. reference",
      "B. ref 속성",
      "C. getElementById 메서드",
      "D. useReference 훅",
    ],
    answer: 1,
    explanation:
      "'ref' 속성을 사용하여 리액트에서 특정 요소를 참조할 수 있습니다.",
  },
  {
    question: "React에서 'CSS Modules'를 사용하는 이유는 무엇인가요?",
    options: [
      "A. 컴포넌트 간 스타일 충돌을 방지하기 위해",
      "B. 스타일을 동적으로 조작하기 위해",
      "C. 전역 스타일을 효율적으로 관리하기 위해",
      "D. 특정 브라우저에서의 호환성을 고려하기 위해",
    ],
    answer: 0,
    explanation:
      "'CSS Modules'를 사용하는 주된 이유는 컴포넌트 간 스타일 충돌을 방지하기 위해서입니다.",
  },
  {
    question:
      "React에서 'useEffect' 훅을 사용할 때 의존성 배열을 비우는 경우 어떤 효과가 있나요?",
    options: [
      "A. 의존성 배열이 비어있으면 항상 렌더링 됨",
      "B. 컴포넌트가 언마운트될 때만 호출됨",
      "C. 의존성 배열이 비어있으면 단 한 번만 호출됨",
      "D. 에러 발생",
    ],
    answer: 2,
    explanation:
      "'useEffect' 훅의 의존성 배열이 비어있으면 해당 효과는 단 한 번만 호출됩니다.",
  },
  {
    question:
      "React에서 'useReducer' 훅을 사용할 때, 디스패치 함수가 어떤 역할을 하나요?",
    options: [
      "A. 액션을 발생시키는 역할",
      "B. 상태를 갱신하는 역할",
      "C. 액션과 상태를 연결시키는 역할",
      "D. 비동기 작업을 수행하는 역할",
    ],
    answer: 1,
    explanation:
      "'useReducer' 훅에서 디스패치 함수는 상태를 갱신하는 역할을 합니다.",
  },
  {
    question: "React에서 'Lazy Loading'은 어떤 상황에서 사용되나요?",
    options: [
      "A. 데이터를 비동기적으로 불러올 때",
      "B. 컴포넌트를 지연하여 렌더링할 때",
      "C. 상태를 관리할 때",
      "D. 라우팅을 설정할 때",
    ],
    answer: 1,
    explanation: "'Lazy Loading'은 컴포넌트를 지연하여 렌더링할 때 사용됩니다.",
  },
  {
    question: "리액트에서 테스트를 위해 주로 사용되는 도구는?",
    options: ["A. Jest", "B. Mocha", "C. Jasmine", "D. Enzyme"],
    answer: 0,
    explanation:
      "'Jest'는 리액트에서 테스트를 위해 주로 사용되는 도구 중 하나입니다.",
  },
  {
    question: "React에서 'Portals'은 어떤 상황에서 사용될 수 있나요?",
    options: [
      "A. 모달 팝업을 구현할 때",
      "B. 상태를 갱신할 때",
      "C. 라우팅을 처리할 때",
      "D. 이벤트 핸들러를 등록할 때",
    ],
    answer: 0,
    explanation:
      "'Portals'은 모달 팝업과 같이 DOM 트리의 다른 위치에 컴포넌트를 렌더링해야 할 때 사용됩니다.",
  },
  {
    question: "React에서 'Suspense' 컴포넌트는 주로 어떤 상황에서 활용되나요?",
    options: [
      "A. 초기 렌더링 시",
      "B. 데이터를 가져오는 동안 로딩 상태를 처리할 때",
      "C. 에러 발생 시",
      "D. 컴포넌트의 렌더링을 중단할 때",
    ],
    answer: 1,
    explanation:
      "'Suspense' 컴포넌트는 데이터를 가져오는 동안 로딩 상태를 처리하기 위해 사용됩니다.",
  },
  {
    question:
      "React에서 'React Router'의 'NavLink'와 'Link'의 차이점은 무엇인가요?",
    options: [
      "A. 'Link'는 활성 상태를 제공하지 않음, 'NavLink'는 활성 상태를 제공",
      "B. 'Link'는 스타일을 설정할 수 없음, 'NavLink'는 스타일을 설정할 수 있음",
      "C. 'NavLink'는 'Link'와 똑같음",
      "D. 'Link'는 외부 링크를 지원하지 않음, 'NavLink'는 외부 링크를 지원",
    ],
    answer: 0,
    explanation:
      "'NavLink'는 'Link'의 모든 기능을 포함하며 추가로 활성 상태를 제공합니다.",
  },
  {
    question:
      "React Hooks 중에서 컴포넌트의 생명주기 메서드를 함수형 컴포넌트에서 대체하는 역할을 하는 훅은 무엇인가요?",
    options: ["A. useEffect", "B. useReducer", "C. useMemo", "D. useContext"],
    answer: 0,
    explanation:
      "'useEffect' 훅은 컴포넌트의 생명주기 메서드를 함수형 컴포넌트에서 대체하는 역할을 합니다.",
  },
  {
    question: "React에서 'StrictMode'는 어떤 상황에서 사용되나요?",
    options: [
      "A. 렌더링 성능 최적화를 위해",
      "B. 엄격한 모드에서 개발 중일 때",
      "C. 비동기 작업을 처리할 때",
      "D. 렌더링 중 에러 발생 시",
    ],
    answer: 1,
    explanation:
      "'StrictMode'는 엄격한 모드에서 개발 중일 때 사용되며, 잠재적인 문제를 조기에 감지할 수 있도록 돕습니다.",
  },
  {
    question:
      "React에서 'Higher Order Component (HOC)' 패턴을 사용할 때, 주로 어떤 문제를 해결하기 위해 활용되나요?",
    options: [
      "A. 상태 관리",
      "B. 라우팅 설정",
      "C. 코드의 중복",
      "D. 컴포넌트의 렌더링 최적화",
    ],
    answer: 2,
    explanation:
      "'Higher Order Component (HOC)' 패턴은 주로 코드의 중복을 해결하기 위해 활용됩니다.",
  },
];
