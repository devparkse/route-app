import React from "react";
import { Link, Outlet } from "react-router-dom";

const SongList = (props) => {
  const list = props.songs.map((item) => {
    return (
      <li key={item.id} className="list-group-item">
        <Link to={`/songs/${item.id}`} style={{ textDecoration: "none" }}>
          {item.title} ({item.musician})
          
          {/* font-awsome 추가 */}
          <span className="float-end badge bg-secondary">
            <i className="fa fa-play"></i>
          </span>
        </Link>
      </li>
    );
  });
  return (
    <div className="card card-body">
      <h2>SongList</h2>
      <ul className="list-group">{list}</ul>
      <Outlet />
    </div>
  );
};

export default SongList;
