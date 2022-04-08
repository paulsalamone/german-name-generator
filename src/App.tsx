import GlobalStyle from "./globalStyles";
import Header from "./components/Header";
import Selector from "./components/Selector";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Selector />
      </main>
      <Footer />
    </>
  );
}

export default App;
