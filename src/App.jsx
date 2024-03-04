import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { useState } from "react";
import Loader from "./components/Loader";
import { useTheme } from "./context/ThemeContext";
import "./App.css";

const App = () => {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  return isLoading ? (
    <Loader />
  ) : (
    <div className={theme == "dark" ? "dark-mode-app" : ""}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
