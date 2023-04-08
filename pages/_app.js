import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getRooms } from "../redux/actions/roomActions";
import { wrapper } from "../redux/store";

function App({ Component, pageProps }) {
  return (
    <main className="main">
      <Header />
      <Component {...pageProps} />
      <ToastContainer position="bottom-right" />
      <Footer />
    </main>
  );
}

// export default App;
export default wrapper.withRedux(App);
