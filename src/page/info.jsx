import React from "react";
import brain from "../image/brain.jpg"
import apple from "../image/apple.jpg"

export default function Info()
{

    return(
        <>
        <div style={{width:"100%"}}>
             <div className="row bg-light w-100 m-0 p-0 my-5">
                <div className="col-12 border border-dark">
                    <p className="text-dark">اطلاعات شما</p>

                </div>

             </div>
             <div className="w-100 bg-light" >
                <div className="row w-100 m-0 p-0 my-5">
                    <div className="col-7">
                      <i class="fa fa-id-card icon" aria-hidden="true"></i>
                        <input className=" p-3 input-field" type="text" placeholder="نام" />
                    </div>
                    <div className="col-5">
                        <input className="w-100 p-3" type="text" placeholder="نام خانوادگی" />
                    </div>
                </div>
                 <div className="row w-100 m-0 p-0 my-5 ">
                    <div className="col-7">
                        <input className="w-100 p-3" type="text" placeholder="ایمیل" />
                    </div>
                    <div className="col-5">
                        <input className="w-100 p-3" type="text" placeholder="نام کاربری" />
                    </div>
                </div>
                 <div className="row w-100 m-0 p-0 my-5">
                    <div className="col-4">
                        <input className="w-100 p-3" type="text" placeholder="رمز" />
                    </div>
                    <div className="col-4">
                        <input className="w-100 p-3" type="text" placeholder="رمز جدید" />
                    </div>
                      <div className="col-4">
                        <input className="w-100 p-3" type="text" placeholder="تکرار رمز" />

                    </div>
                </div>
                <div className="row w-100 m-0 p-0 my-5 ">
                    <div className="col-4">
                        <div className="w-100 border border-dark p-4">
                            <p className="text-center">پروفایل</p>
                            <img className="w-100" src={apple} alt="apple" style={{height:"150px"}}></img>

                        </div>
                    </div>
                    <div className="col-8">
                        <div className="w-100 border border-dark p-4">
                            <p className="text-center">بنر</p>
                            <img className="w-100" src={brain} alt="apple" style={{height:"150px"}}></img>

                        </div>
                    </div>
                </div>
             </div>
             
        </div>
        </>
    )
}