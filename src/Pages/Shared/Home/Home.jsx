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
            <div className="container mx-auto min-h-screen p-10"></div>
            <Footer></Footer>
        </div>
    );
};

export default Home;