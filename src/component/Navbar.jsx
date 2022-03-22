import React from 'react'


const Navbar = () => {
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
            <div class="container">
    <a class="navbar-brand fw-bold fs-4" to="#">DR COLLECTION</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" to="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" to="/products">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" to="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" to="/contact">Contact</a>
        </li>
      </ul>
        <div className="buttons">
            <a to="/login" className="btn btn-outline-dark">
                 Login <i className="fa fa-sign-in me-1"></i>
            </a>
            <a to="/register" className="btn btn-outline-dark ms-2">
                 Register <i className="fa fa-user-plus ms-1"></i>
            </a>
            <a to="/cart" className="btn btn-outline-dark ms-2">
                 Cart (0) <i className="fa fa-shopping-cart me-1"></i>
            </a>
        </div>
    </div>
  </div>
</nav>
        </div>
    );
}
export default Navbar;