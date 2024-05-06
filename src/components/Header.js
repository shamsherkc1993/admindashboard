import React from "react";
import { FcAbout } from "react-icons/fc";
import { FcAdvertising } from "react-icons/fc";
import TotalDetail from "./Total/TotalDetail";
import TotalBardiagram from "./Total/TotalBardiagram";
import RecentOrders from "./Total/RecentOrders";
const Header = (props) => {
  const users = props.user;
  console.log(users)
  return (
    < div className="row">
      <div className="col-sm-8">
        <div class="mb-3 mt-3">
          <input type="text" class="form-control" placeholder="Search" />
        </div>
      </div>
      <div className="col-sm-4 nav-right">
        <FcAbout className="message" />
        <FcAdvertising className="bell" />
        {users.map((userImage) => {
          return userImage.id == 1 ? (
            <img
              src={userImage.avatar}
              alt="profile-image"
              className="userimgs"
            />
          ) : (
            ""
          );
        })}
      </div>
     
    </div>
    
  );
};

export default Header;
