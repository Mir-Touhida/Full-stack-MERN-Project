import { NavLink, useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const pDetails = useLoaderData();
    const{id}= useParams();
    console.log(id);
    console.log(pDetails);
    const {_id, course_id, title, lession, student, duration, price, assessments, author, level, ratings, author_img_url, img_url } = Details;
    return (
        <div>
           <div className="card bg-base-100 w-80 h-80 shadow-xl mt-8">
                <figure>
                    <img src={courseDetail.img_url} alt="courseimage" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-pink-500">{courseDetail.title}</h2>
                    <p>Duration of this course is {courseDetail.duration} and this course is for {courseDetail.level}</p>
                    <div className="card-actions justify-end">
                        <NavLink to={`/details/${course_id}`}>
                        <button className="btn btn-active btn-secondary">View Details</button>

                        </NavLink>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default Details;