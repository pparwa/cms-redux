import React from "react";
import brain from '../image/brain.jpg'

export default function Sidebar()
{

  return(
    <>

    <div className="card" style={{width:" 50%"}}>
  <img src={brain} className="card-img-top" alt="brain" style={{width:"100%"}} />
  <div className="card-body">
    <h5 className="card-title text-center" style={{fontFamily:"name"}}>پارسا پروا</h5>
    <hr></hr>
    <p className="card-text text-center" style={{fontFamily:"name"}}>فرات اند</p>
    <hr></hr>
    <div className="d-flex justify-content-center">
    <a href="#" className="btn btn-primary mx-auto" style={{fontFamily:"dokme"}}>ویرایش اطالاعات</a>
    </div>
  </div>
</div>
    </>
  )
 



}