import Navbar from "@/Components/Navbar.tsx";
import InitialEngagement from "@/InitialEngagement.tsx";
import Reviews from "@/Reviews.tsx";
import ViewAllVisa from "@/ViewAllVisa.tsx";
import Footer from "@/Footer";
import Searchbar from "@/Components/Searchbar.tsx";

const Homepage = () => {
  return (
      <div className='w-full'>
        <Navbar />
        <Searchbar />
        <InitialEngagement />
        <Reviews />
        <ViewAllVisa />
        <Footer />
      </div>
  )
}

export default Homepage;