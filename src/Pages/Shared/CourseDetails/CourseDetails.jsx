import { useEffect, useState } from "react";
import CourseDetail from "../CourseDetail/CourseDetail";


const CourseDetails = () => {
    const [courseDetails, setcourseDetails] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/courseDetails`)
        .then(res=>res.json())
        .then((data)=>setcourseDetails(data));
    },[]);
    console.log(courseDetails)
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
            
            {
                courseDetails.map((courseDetail)=>(
                <CourseDetail key={courseDetail._id} courseDetail={courseDetail}> 
                </CourseDetail>))
            }
        </div>
    );
};

export default CourseDetails;