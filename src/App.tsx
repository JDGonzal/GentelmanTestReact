import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import { Home } from "./pages";
import { Navbar } from "./components";
import { LayoutContainter } from "./styled-components/layout.styled.component";



function App() {
  return (
    <>
      <div className="App">
        <Provider store ={store}>
          <Navbar />
          <LayoutContainter>
            <Home />
          </LayoutContainter>
        </Provider>
      </div>
    </>
  );
}

export default App;
