import React from "react";
import { useNavigate } from "react-router";

const Members = (props) => {
  // useNavigate Hook 은 navigate() 메서드를 리턴한다.
  // navigate(to, option) 이 있어요.
  // to : 이동할 경로
  // option : { replace : true/false, state: {} }
  //            replace 란? history 관리
  //                        false 가 기본값(이전 history 교체 안함, history 적립중)
  //                        true (이전 history 교체해버림)
  //            state 란? 네비게이션 할 때 전달할 정보
  //                     이동한 후~~~ 에 location.state 로 사용가능

  const navigate = useNavigate();
  const goHome = () => {
    if (window.confirm("홈으로 이동하시겠습니까?")) {
      navigate("/", { state: { from: "/member" } });
    }
  };

  // 이미지 사이즈 객체 설정
  const imgSize = { width: 90, height: 80 };
  const list = props.members.map((item, index) => {
    return (
      // 반복문에서는 key 속성이 있어야하며, unique 값(중복되면 안된다)
      <div className="col-6 col-md-4 col-lg-3" key={index}>
        <img
          src={item.photo}
          className="img-thumbnail"
          alt={item.name}
          style={imgSize}
        />
        <br />
        <h6>{item.name}</h6>
        <br />
        <br />
      </div>
    );
  });

  return (
    <div className="card card-body">
      <h2>Members</h2>
      <div className="container">
        <div className="row">{list}</div>
      </div>
      <button className="btn btn-primary" onClick={goHome}>
        Go Home
      </button>
    </div>
  );
};

export default Members;
