import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="card bg-light">
      <div className="card-heading">
        <h2 className="text-center m-3">Indie Band</h2>
        <div className="row">
          <div className="col-12">
            {/* <Link to="전환할 URI" */}
            {/* NavLink : Link 가 현재 경로와 일치하면 css 설정 */}
            <NavLink
              className={({ isActive }) => {
                return isActive ? "btn menu btn-dark" : "btn menu btn-success";
              }}
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return isActive ? "btn menu btn-dark" : "btn menu btn-success";
              }}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return isActive ? "btn menu btn-dark" : "btn menu btn-success";
              }}
              to="/members"
            >
              Members
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return isActive ? "btn menu btn-dark" : "btn menu btn-success";
              }}
              to="/songs"
            >
              Songs
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
