import "./App.css";
import NavBar from "./components/Navbar";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <NavBar />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
