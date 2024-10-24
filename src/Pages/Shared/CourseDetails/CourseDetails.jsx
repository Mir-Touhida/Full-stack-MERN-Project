import { useEffect, useState } from "react";
import CourseDetail from "../CourseDetail/CourseDetail";
import Navbar from "../Navbar/Navbar";
// import { useLoaderData } from "react-router-dom";


const CourseDetails = () => {
    // const details = useLoaderData();
    // console.log(details);
    const [courseDetails, setcourseDetails] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/courseDetails`)
        .then(res=>res.json())
        .then((data)=>setcourseDetails(data));
    },[]);
    console.log(courseDetails)
    
    return (
       
        <div>
            
            <div>
            
            <div className="font-bold text-3xl text-center m-6">Course Details</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">      
            {
                courseDetails.map((courseDetail)=>(
                <CourseDetail key={courseDetail._id} courseDetail={courseDetail}> 
                </CourseDetail>))
            }
        </div>
        </div>
        </div>
    );
};

export default CourseDetails;