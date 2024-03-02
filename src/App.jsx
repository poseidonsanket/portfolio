import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { useState } from "react";
import Loader from "./components/Loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
