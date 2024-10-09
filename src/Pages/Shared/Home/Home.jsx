import Banner from "../Banner/Banner";
import CourseDetails from "../CourseDetails/CourseDetails";
import Footer from "../Footer/Footer";
import HowWorks from "../HowWorks/HowWorks";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar ></Navbar>
            <Banner></Banner>
            <HowWorks></HowWorks>
            <CourseDetails></CourseDetails>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;