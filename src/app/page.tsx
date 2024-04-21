import Image from "next/image";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Rentals from "./components/Rentals";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <div className="sticky z-20  top-0 bg-white rounded-md">
      <Navbar />
      <Filters />
      </div>
      
      <Rentals />
      <Footer />
    </div>
  );
}
