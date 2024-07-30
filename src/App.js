/*import './App.css';*/
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedbackSection from "./components/Feedback";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import ShoppingCommunity from "./components/ShoppingCommunity";
import Women from "./components/Women";
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
       
       
       <Routes> <Route path="/Women" element={<Women />} /></Routes>
       

    </div>
  );
}

export default App;
