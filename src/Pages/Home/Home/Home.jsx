import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const Home = () => {
      return (
            <div>
                  <Navbar></Navbar>
                  <Banner></Banner>
                  <h2 className="text-3xl font-poppins">This is a Home pages</h2>
                  <Footer></Footer>
            </div>
      );
};

export default Home;
