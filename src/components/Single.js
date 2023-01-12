import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Single = () => {
  const param = useParams();
  const [single, setSingle] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos/${param.id}?per_page=10&client_id=vnOUc1o6iieQmIA_M3akqwRIRpTStxBPpnzdqd55PE8`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSingle(data);

        setLoad(false);
      });
  }, [param]);
  return (
    <>
      {load && <h3 className="text-center mt-4">Loading....</h3>}
      {!load && (
        <div className="container p-4 mt-5 bg-light">
          <div className="row">
            <div className="col-6">
              <img src={single.urls.small} alt="" />
            </div>
            <div className="col-6">
              <h2>Uploaded By: {single.user.name}</h2>
              <h3>Upload Date: {single.updated_at}</h3>
              <hr />
              <h5>Width: {single.width}</h5>
              <h5>Height: {single.height}</h5>
              <br />
              <hr />
              <br />
              <button type="button" className="btn btn-success">
                <a
                  className="download"
                  href={single.links.download}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Download
                </a>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Single;
