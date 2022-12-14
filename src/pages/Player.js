import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

const Player = (props) => {
  // URI 파라메터 처리
  const params = useParams();
  // 강제 화면 전환
  const navigate = useNavigate();
  // state 데이터
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  // 데이터가 존재하는지 useEffect()
  useEffect(() => {
    // params 객체의 속성은 문자열이므로
    const id = params.id ? parseInt(params.id, 10) : 0;
    // 아이디에 해당하는 객체를 찾음.
    const song = props.songs.find((item) => item.id === id);
    if (song) {
      setTitle(song.title ? song.title : "No Title");
      setLink(song.youtube_link ? song.youtube_link : "");
    } else {
      // 강제 이동
      navigate("/songs");
    }
  });

  return (
    <div className="modal">
      <div className="box">
        <div className="heading">
          <Link to="/songs" className="menu">
            <span className="float-start badge bg-secondary pointer">X</span>
          </Link>
          <span className="title">{title}</span>
        </div>
        <div className="player">
          <div>
            <YouTube
              videoId={link}
              opts={{
                width: "320",
                height: "240",
                playerVars: { autoplay: 1 },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
