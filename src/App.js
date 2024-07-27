/*import './App.css';*/

import FeedbackSection from "./components/Feedback";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import ShoppingCommunity from "./components/ShoppingCommunity";
import BigSavingZone from "./pages/BigSaving";
import CategoriesMen from "./pages/Categoriesmen";
import CategoriesWomen from "./pages/CategoriesWomen";
import Clothes from "./pages/DesignerClothes";
import Newarrivals from './pages/Newarrivals';
import TopSelling from "./pages/TopSelling";

function App() {
  return (
    <div>
       <Navbar />
       <Shop />
       
       <Newarrivals />
       <TopSelling />
       <CategoriesWomen />
       <CategoriesMen />
       <Clothes />
       <BigSavingZone />
       <FeedbackSection />
       <ShoppingCommunity />
       <Footer />
    </div>
  );
}

export default App;
