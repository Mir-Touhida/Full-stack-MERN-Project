import { NavLink } from "react-router-dom";
import CourseDetails from "../CourseDetails/CourseDetails";



const CourseDetail = ({ courseDetail }) => {
    const {_id, course_id, title, details, lession, student, duration, price, assessments, author, level, ratings, author_img_url, img_url } = courseDetail;
    return (
        
        
        <div className="mt-10" > 
            <div className="card bg-base-100 w-80 h-80 shadow-xl mt-8">
                <figure>
                    <img src={courseDetail.img_url} alt="courseimage" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-pink-500">{courseDetail.title}</h2>
                    <p>Duration of this course is {courseDetail.duration} and this course is for {courseDetail.level}</p>
                    <div className="card-actions justify-end">
                        <NavLink to={`/pDetails/${course_id}`}>
                        <button className="btn btn-active btn-secondary">View Details</button>
                        </NavLink>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CourseDetail;