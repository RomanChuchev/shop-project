import Header from "../Header";
import Footer from "../Footer";
import Shop from "../Shop";
import "./app.css";
import "../bootstrap.min.css";
import { ContextProvider } from "../../context";

function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
