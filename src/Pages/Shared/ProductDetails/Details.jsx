import { NavLink, useLoaderData, useParams } from "react-router-dom";
import CourseDetails from "../CourseDetails/CourseDetails";


const Details = () => {
    const pDetails = useLoaderData();
    const{id}= useParams();
    console.log(id);
    console.log(pDetails);
    const {title, lession, student, duration, price, assessments, author, level, ratings, author_img_url, img_url } = pDetails;
    return (
        <div>
           <div className="card bg-base-100 w-80 h-80 shadow-xl mt-8">
                <figure>
                    <img src={pDetails.img_url} alt="courseimage" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-pink-500">{pDetails.title}</h2>
                    <p>Duration of this course is {duration} and this course is for {level}</p>
                </div>
            </div>  
        </div>
    );
};

export default Details;