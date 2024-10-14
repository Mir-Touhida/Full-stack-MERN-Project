import { NavLink, useLoaderData, useParams } from "react-router-dom";
import CourseDetails from "../CourseDetails/CourseDetails";
import Navbar from "../Navbar/Navbar";


const Details = () => {
    const pDetails = useLoaderData();
    const{id}= useParams();
    console.log(id);
    console.log(pDetails);
    const {title, lession, details, student, duration, price, assessments, author, level, ratings, author_img_url, img_url } = pDetails;
    return (
        
        <div>
            <Navbar></Navbar>
            <div>
           <div className="card bg-base-100 w-1/2 h-1/3 shadow-xl mt-8 text-center content-center">
           <h2 className="card-title text-pink-500 font-bold m-4 text-4xl">{pDetails.title}</h2>
                <figure>
                    <img src={pDetails.img_url} alt="courseimage" />
                </figure>
                <div className="card-body">
                    <h2 className="text-3xl font-bold">Details of {title} </h2>
                    <h3> {details} </h3>
                    <p>Duration of this course is {duration} and this course is for {level}</p>
                    <p className="font-bold">Course Fee: {price}</p>
                    <p >Author: {author} </p>
                </div>
            </div>  
        </div>
        </div>
    );
};

export default Details;