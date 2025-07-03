import logo from "./logo.svg";
import "./App.css";

import ThemeApp from "./components/Toggle Theme with Props and Conditional Styling/ToggleTheme";
import QuoteViewer from "./components/Daily Quote Generator (Auto-refresh + Button)/QuoteViewer";

function App() {
  return (
    <div className="App">
      {/* <ThemeApp /> */}
      <QuoteViewer />
    </div>
  );
}

export default App;
