import "./App.css";
import { Home } from "./pages";
import { Navbar } from "./components";
import { LayoutContainter } from "./styled-components/layout.styled.component";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <LayoutContainter>
          <Home />
        </LayoutContainter>
      </div>
    </>
  );
}

export default App;
