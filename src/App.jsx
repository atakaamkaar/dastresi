

import "./assets/css/main.css"
import AvailableNow from "./components/AvailableNow/AvailableNow";
import BestSellers from "./components/BestSellers/BestSellers";
import ChosenCategory from "./components/ChosenCategory/ChosenCategory";
import DailyDiscount from "./components/DailyDiscount/DailyDiscount";
import Header from "./components/Header/Header";
import SwiperFile from "./components/swiper/swiperFile";
import MehboobBrands from "./components/MehboobBrands/MehboobBrands"
import LatestArticles from "./components/LatestArticles/LatestArticles";
import Footer from "./components/Footer/Footer";
import WhyDastresi from "./components/WhyDastresi/WhyDastresi";
import "../src/assets/css/stylesheet.css"


function App() {
  return (
    <div className="App">
      <Header />
      <SwiperFile />
      <DailyDiscount />
      <ChosenCategory />
      <AvailableNow />
      <WhyDastresi />
      <BestSellers />
      <MehboobBrands />
      <LatestArticles />
      <Footer />
    
    </div>
  );
}

export default App;
