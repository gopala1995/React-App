import logo from "./logo.svg";
import "./App.css";

import ThemeApp from "./components/Toggle Theme with Props and Conditional Styling/ToggleTheme";
import QuoteViewer from "./components/Daily Quote Generator (Auto-refresh + Button)/QuoteViewer";
import UserListApp from "./components/Fetch and Display User Profiles/UserListApp";

function App() {
  return (
    <div className="App">
      {/* <ThemeApp /> */}
      {/* <QuoteViewer /> */}
      <UserListApp/>
    </div>
  );
}

export default App;
