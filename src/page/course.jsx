import React from "react";
import course from '../image/course.jpg'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getcoursefromeserver } from "../REDUX/store/course";
import { removecoursefromserver } from "../REDUX/store/course";
export default function Course()
{
  const courses = useSelector(state => state.courses)
 const dispatch = useDispatch()
 useEffect(()=>{
  dispatch(getcoursefromeserver( "https://redux-cms.iran.liara.run/api/courses"))
  console.log(courses)
 },[])
 const removehandler = (event)=>{
  dispatch(removecoursefromserver(event.target.id))
 }
  return(
    <>
    {courses.map(course=>(
      <div className="w-100">
        <div className="border border-dark mx-auto my-5" style={{width:"70%"}}>
            <div className="row w-100 p-0 m-0">
            
                <div className="col-4 p-0 m-0">
                    <img className="w-100" src={course} style={{height:"210px"}}></img>
                </div>
                <div className="col-8 p-0 m-0 position-relative">
                     <span  class="badge bg-danger text-white position-absolute  p-3 off" style={{top:"-20px",left:"-10px"}}>{course.discount}</span>
                    <div className="w-100 bg-light" style={{height:"200px"}}>
                        <h4 className="text-warning my-1">{course.title}</h4>
                        <p className="text-dark " style={{fontFamily:"name"}}>{course.desc}</p>
                    </div>
                  <div className="w-100 position-absolute  bottom-0 bg-secondary row p-0 m-0">
                    <div className="col-8 p-0 m-0">
                     <ul className="d-flex w-100 m-0 p-0" >
                        <li className="mx-2 text-info p-0 m-0" style={{listStyle:"none"}}>قیمت:{course.price} </li>
                        <li className="mx-2 text-info p-0 m-0" style={{listStyle:"none"}}>  {course.registersCount}</li>
                        <li className="mx-2 text-info p-0 m-0" style={{listStyle:"none"}}> {course.registersCount}تعداد فروش</li>
                     </ul>
                    </div>
                    <div className="col-4 d-flex p-0 m-0">
                    <button className="btn btn-primary w-100 ">ویرایش</button>
                    <button className="btn btn-danger w-100" onClick={removehandler} id={course._id}>حذف</button>
                    </div>
                  </div>
                </div>
                
            </div>
        </div>
    </div>
    ))}
    </>
  )
}