import React from "react";
import apple from '../image/apple.jpg'
export default function Navbar(){




    return(
        <>
        <div className="w-100 d-flex justify-content-center align-items-center" style={{height:"20%"}} id="navbar">
            <div className="border border-dark d-flex justify-content-between align-items-center shadow rounded my-5" style={{width:"80%",height:"70%"}}>
                <div className="d-flex justify-content-center" style={{width:"20%",height:"150%"}}>
                    <img src={apple} alt="prpfile" style={{width:"100%",height:"150px"}}/>
                    <div className="d-flex flex-column justify-content-center align-items-center" style={{width:"100%"}}>
                        <p style={{fontFamily:"name",width:"100%"}}>پارسا پروا</p>
                        <p style={{fontFamily:"name",width:"100%"}}>توسعه دهنده فرانت</p>
                        
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center" style={{width:"50%",height:"100%"}} id="navparent">
                    <button className="btn btn-primary m-2 navbtn" style={{fontFamily:"dokme",width:"100%"}}>خروج از پنل <i class="fa fa-sign-out" aria-hidden="true"></i></button>
                    <button className="btn btn-dark m-2 navbtn" style={{fontFamily:"dokme",width:"50%"}}><i class="fa fa-signal" aria-hidden="true"></i></button>
                    <button className="btn btn-warning m-2 navbtn" style={{fontFamily:"dokme",width:"50%"}}><i class="fa fa-sun-o" aria-hidden="true"></i></button>
                </div>
                
            </div>
        </div>
        </>
    )
}