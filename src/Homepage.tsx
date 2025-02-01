import Navbar from "@/Components/Navbar.tsx";
import InitialEngagement from "@/InitialEngagement.tsx";
import Reviews from "@/Reviews.tsx";
import ViewAllVisa from "@/ViewAllVisa.tsx";
import Footer from "@/Footer";

const Homepage = () => {
  return (
      <div className='w-full'>
        <Navbar />
        <Reviews />
        <ViewAllVisa />
        <Footer />
      </div>
  )
}

export default Homepage;