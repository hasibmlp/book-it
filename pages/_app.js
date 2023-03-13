import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import { wrapper } from "../redux/store";

function App({ Component, pageProps }) {
  return (
    <main className="main">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

export default wrapper.withRedux(App);
