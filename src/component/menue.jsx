import React from "react";
import { NavLink } from "react-router-dom";

export default function Menue()
{

    return(
        <>
        <div className="border border-dark shadow rounded p-md-2" style={{width:'100%'}}>
            <ul className="d-flex justify-content-start  align-items-center" style={{width:"100%"}} id="menuelist">
                <li className="mx-2  item d-flex p-2" style={{fontFamily:"name"}}><NavLink to='/user' exact={true}>کاربران</NavLink><i class="fa fa-user-circle-o" aria-hidden="true"></i></li>
                <li className="mx-2 item d-flex p-2" style={{fontFamily:"name"}}><NavLink to="/info">اطالاعات</NavLink><i class="fa fa-graduation-cap" aria-hidden="true"></i></li>
                <li className="mx-2 item d-flex p-2" style={{fontFamily:"name"}}><NavLink to="/courses">دوره</NavLink> <i class="fa fa-cart-arrow-down" aria-hidden="true"></i></li>
                <li className="mx-2 item d-flex p-2" style={{fontFamily:"name"}}> <NavLink to="/articles"> وبلاگ </NavLink><i class="fa fa-wpforms" aria-hidden="true"></i></li>

            </ul>
        </div>
        </>
    )
}