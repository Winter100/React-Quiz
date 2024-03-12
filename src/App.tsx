import { useReducer } from "react";
import { displayOptions, initialState } from "./util/reducer/initialState";
import { reducer } from "./util/reducer/reducer";

import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Title from "./components/Header/Title";
import Main from "./components/Main/Main";
import Commentary from "./components/Commentary/Commentary";
import Start from "./components/display/Start";
import Ready from "./components/display/Ready";
import Result from "./components/display/Result";
import Wrong from "./components/display/Wrong";

function App() {
  const [{ questions, index, answer, score, display, wrongNote }, dispatch] =
    useReducer(reducer, initialState);

  return (
    <div className={styles.container}>
      <Header>
        <Title />
      </Header>
      <Main>
        {display === displayOptions.ready && <Ready dispatch={dispatch} />}
        {display === displayOptions.start && (
          <Start
            questions={questions}
            index={index}
            dispatch={dispatch}
            answer={answer}
            score={score}
          />
        )}
        {display === displayOptions.result && (
          <Result
            score={score}
            wrongLength={wrongNote?.length}
            dispatch={dispatch}
          />
        )}
        {display === displayOptions.wrong && (
          <Wrong wrongNote={wrongNote} dispatch={dispatch} />
        )}
      </Main>
      <Footer>
        {answer !== null && <Commentary questions={questions} index={index} />}
      </Footer>
    </div>
  );
}

export default App;
