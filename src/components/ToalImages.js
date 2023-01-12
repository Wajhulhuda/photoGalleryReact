import React from "react";
import { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

const ToalImages = () => {
  const [myData, setMyData] = useState([]);

  const getData = () => {
    console.log();

    fetch(
      `https://api.unsplash.com/photos?page=1&per_page=30&client_id=vnOUc1o6iieQmIA_M3akqwRIRpTStxBPpnzdqd55PE8`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyData(data);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="d-flex  overflow-hidden flex-start flex-wrap">
      {myData.map((elem, index) => {
        return (
          <NavLink to={`/${elem.id}`} key={elem.id}>
            <div
              className="col-lg-11 col-md-5 col-11 m-3 img-div text-center"
              key={index}
            >
              <img className="image" src={elem.urls.small} alt="loading" />
              <p className="user">{elem.user.name}</p>
              <p className="desc">{elem.created_atnpm}</p>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default ToalImages;
