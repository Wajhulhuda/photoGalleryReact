import React, { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="container-fluid bg-light p-2">
      <div className="row">
        <div className="col-8">
          <h3 className="ms-4">WajhulGallery</h3>
        </div>
        <div className="col-4 d-flex">
          <input
            className="form-control"
            type="text"
            value={search}
            placeholder="Search"
            aria-label="default input example"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="button" className="btn btn-outline-success me-3 ms-3">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
