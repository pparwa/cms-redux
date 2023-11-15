import React from "react";
import apple from "../image/apple.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getuserfromeserver } from "../REDUX/store/users";
import { removeuser } from "../REDUX/store/users";
export default function User()
{
    const users = useSelector((state)=>state.users)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getuserfromeserver("https://redux-cms.iran.liara.run/api/users"))
        console.log(users)
    },[])
    const removehandler = (id)=>{
        console.log(id)
    }
    return(
        <>
        <div className="my-4 mx-auto" style={{width:"90%"}}>
        <div className="row">
            <div className="col-md-7 col-8">
                <input className="p-1" placeholder="نام یا ایمیل کاربر را وارد کنید" style={{width:"100%"}}/>
            </div>
            <div className="col-md-4  col-4 ">
                
                <button className="btn btn-dark" style={{width:"100%"}} id="deletuser">حذف کاربر</button>
            </div>

        </div>
        </div>
    {users.map((user)=>(
        <div style={{width:"100%"}} className="my-4 border border-dark mx-auto">
       
         <div className="row">
            <div className="col-4 d-flex">
                <img src={apple} alt="apple" style={{width:"50%",height:"150px"}}/>
                <p style={{fontFamily:"name"}}>{user.firstname}</p>
                

            </div>
            <div className="col-8">
                <div className="w-100 d-flex align-items-center" style={{height:"100%"}}>
                <button className="btn btn-dark fs-sm-1" style={{width:"30%"}}>پیام</button>
                <button className="btn btn-primary fs-sm-1" style={{width:"40%"}}>اطالاعات</button>
               
                </div>  
            </div>
         </div>
        </div>
    ))}
    
    

        </>
    )
}