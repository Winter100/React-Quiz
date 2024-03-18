import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import QuizContextProvider from "./context/QuizContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QuizContextProvider>
    <App />
  </QuizContextProvider>
);
