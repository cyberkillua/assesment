import BlogHeader from "./Components/BlogHeader";
import CtaBox from "./Components/CtaBox";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import LatestNews from "./Components/LatestNews";

function App() {
  return (
    <div className="App">
      <Header />
      <BlogHeader />
      <LatestNews />
      <CtaBox />
      <Footer />
    </div>
  );
}

export default App;
