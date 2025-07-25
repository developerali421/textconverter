import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar( { mode, modename, toggleMode, brandName } ){
  


  const txtColor = mode ==="white"?"#03dac6":"#00bcd4";

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-0">
      <div className="container-fluid py-1" style={{ backgroundColor: mode==="white"?"#0d6efd":"#333333", color: txtColor }}>
        <a className="navbar-brand" href="/" style={{ color: txtColor }}>{brandName}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" style={{ color: txtColor }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about" style={{ color: txtColor }}>About</Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onChange={toggleMode} />
            <label className="form-check-label" htmlFor="switchCheckDefault" style={{ color: txtColor }}>{modename}</label>
          </div>
        </div>
      </div>
    </nav>
  );
}
