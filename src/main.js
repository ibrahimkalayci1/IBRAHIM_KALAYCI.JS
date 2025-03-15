import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import ProductDetail from "./components/ProductDetail.js";
import Carousel from "./components/Carousel/Carousel.js";
import { setupMenuToggle } from "./utils/menuHandler.js";


// 📌 Header ve Footer yükle
document.getElementById("header").innerHTML = Header();
document.getElementById("footer").innerHTML = Footer();
document.getElementById("product-detail").innerHTML = ProductDetail();

// 📌 Carousel yükle
Carousel();

// 📌 Menü eventlerini başlat
setupMenuToggle();