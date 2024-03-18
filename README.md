
# 프론트엔드 문제풀기!

## 프로젝트 소개
React의 useReducer기능을 활용한 프론트엔드 관련 문제 풀기 사이트입니다.

각 컴포넌트마다 useState를 무분별하게 사용하는 것이 아닌 관련된 state끼리 reducer로 한 컴포넌트에서 관리하게 되니 나중에 수정하기도 편하고 보기도 편한 코드가 되었다.


**Link(깃허브) : [깃허브](https://github.com/Winter100/React-Quiz)**

**Link(배포) : [프론트엔드 문제풀기!](https://quiz-jch9q9rvw-winter100.vercel.app/)**

**제작기간 : 2024-03-11 ~ 2024-03-14**

**리팩토링 : 2024-03-18 (리팩토링 전 코드는 useReducer브랜치에 있다.)** 
<hr>

## 사용 기술
***프론트*** : React(useContext, useReducer), TypeScript
***CSS*** : module.css
***배포*** : Vercel

<hr>

## 프로젝트 이미지
### 메인
![메인](https://velog.velcdn.com/images/winter109/post/060ce882-8d4a-4c63-bcb2-a136982930e1/image.png)

<hr>

### 문제풀이
![문제풀이](https://velog.velcdn.com/images/winter109/post/18023cf7-01d8-42e7-947f-34e506d154db/image.png)


### 결과
![결과](https://velog.velcdn.com/images/winter109/post/f7428e76-f9de-4d3d-ba8d-df7fc9e1b3fd/image.png)

### 오답노트
![오답노트](https://velog.velcdn.com/images/winter109/post/19fafd98-8db2-464d-be85-254712dda911/image.png)

<hr>

## 진행하며 느낀점

**1. 반응형 CSS 생각보다 어렵지 않다?**
##### 반응형 CSS를 적용해서 모바일에서도 나름 쾌적하게 풀수있게했다. 적용하는게 생각보다 어렵지 않았지만 어떤 디바이스의 width를 기준으로 나눠야할지 고민했고 PC, 테블릿, 갤럭시를 기준으로 만들었다. 반응형 CSS를 작성할때 큰 width부터 작은 width순으로 작성해야 꼬이지 않았다.

**2. 폰트만 적용해도 봐줄만하다**
##### 글로벌로 활용하는 css에 @font-face로 폰트를 import해오고 사용해봤는데 폰트만 적용해도 프로젝트가 봐줄만 해졌다. 하지만 이것들도 다 용량이 크니 적당히 이것저것 폰트를 import하지말고 폰트만 가져와 사용하자. 번들 크기를 줄이는것 도 중요하다.

**3. 연관된 상태가 여러개라면 useReducer를 활용하자**
##### 일단 useReducer과 Context API를 활용한 버전으로 리팩토링 할 예정이다. 이 프로젝트에서 useReducer를 어떤식으로 활용하면 좋은지 조금은 알 것 같다. state, action로직을 한 파일에서 관리하니 관련된 state를 한눈에 볼수도 있고 나중에 수행 로직을 변경할때도 굉장히 편했다. Context API를 사용하지않아 프롭스 드릴링이 일어났지만 나중에 사용한다면 코드도 깔끔해지고 원하는 컴포넌트에서 바로 value를 가져와 사용하면 되니 편할 것 같다.

<hr>

## 2024.03.18 추가) useContext로 리팩토링 후기

**1. 코드가 깔끔해 졌다.**

![리팩토링 후 App](https://velog.velcdn.com/images/winter109/post/18c0c3a7-2084-416b-90d3-10fb0c49531f/image.png)

##### 기존이 왼쪽 사진인데 다 담아지지도 않는다.. useContext도 함께사용하면서 오른쪽 코드가 됐는데 코드가 깔끔해지고 보기가 편해졌다.

<hr>

![Wrong](https://velog.velcdn.com/images/winter109/post/ad98f263-9778-4398-b1b2-d515273e369b/image.png)
##### 이런식으로 데이터가 필요한 컴포넌트에서 바로 가져와 사용하니 Props 드릴링을 피할수도있어서 좋았고 무엇보다 깔끔해져서 읽기가 너무 편했다.

<hr>

**2. useContext를 사용할때 주의하기!**
##### 크게 어렵지 않았는데 처음시작할때 한번 막힌게 있다. 약 10분정도 고민하다 결국 "아!" 하면서 떠올렸는데 Provider를 설정할때 주의하자


```js
// 원하는대로 동작하지 않았던 첫 코드.(Provider의 위치가 문제였다)
import React from 'react';
import { useQuiz, displayOptions } from './useQuiz';

function App() {
  const { display } = useQuiz(); // Provider로 value를 공급받을 수 없었음. 왜냐하면 App은 Provider로 감싸주지않았으니까

  const isDisplayTitle =
    display === displayOptions.ready || display === displayOptions.start;

  return (
    <QuizContextProvider> // 이 안의 컴포넌트만 Value를 공급받음.
      <div className={styles.container}>
        {isDisplayTitle && (
          <Header>
            <Title />
          </Header>
        )}

        <Main>
          <Ready />
          {display === displayOptions.start && <Start />}
          {display === displayOptions.result && <Result />}
          {display === displayOptions.wrong && <Wrong />}
        </Main>
        <Footer>{answer !== null && <Commentary />}</Footer>
      </div>
    </QuizContextProvider>
  );
}

export default App;
```
##### 위 코드를 보면 useContext의 커스텀훅인 useQuiz와 QuizContextProvider가 같은 App 컴포넌트안에 있다. 
##### 이러면 App컴포넌트는 QuizContextProvider의 영향을 받지못해 값을 얻어올수가 없다. 
##### 난 처음 이걸 생각못해서 'Provider도 설정해줬는데 display값이 안나오지??? 안쪽은 값이 나오는데...' 라고 10분간 생각했다.. 
##### 결국 'Provider로 공급받기 전에 사용하는데 당연히 값이 없지!' 라고 떠올리고 다음과 main컴포넌트로 QuizContextProvider를 옮기고 App을 감싸주었더니 해결되었다.

```js
// 수정후 (main.tsx)
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import QuizContextProvider from "./context/QuizContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QuizContextProvider>
    <App />
  </QuizContextProvider>
);

// 수정후... Provider를 옮겨줬다. (App.tsx)
import React from 'react';
import { useQuiz, displayOptions } from './useQuiz';

function App() {
  const { display } = useQuiz(); // 위에서 provider로 공급받기 때문에 이젠 값이 잘 들어옴.

  const isDisplayTitle =
    display === displayOptions.ready || display === displayOptions.start;

  return (
      <div className={styles.container}>
        {isDisplayTitle && (
          <Header>
            <Title />
          </Header>
        )}

        <Main>
          <Ready />
          {display === displayOptions.start && <Start />}
          {display === displayOptions.result && <Result />}
          {display === displayOptions.wrong && <Wrong />}
        </Main>
        <Footer>{answer !== null && <Commentary />}</Footer>
      </div>
  );
}

export default App;
```

##### 이후 잘 마무리했다!
