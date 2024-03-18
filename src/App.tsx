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

import { useQuiz } from "./hooks/useQuiz";
import { displayOptions } from "./context/reducers/initialState";

function App() {
  const { display, answer } = useQuiz();

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
        {display === displayOptions.ready && <Ready />}
        {display === displayOptions.start && <Start />}
        {display === displayOptions.result && <Result />}
        {display === displayOptions.wrong && <Wrong />}
      </Main>
      <Footer>{answer !== null && <Commentary />}</Footer>
    </div>
  );
}

export default App;
