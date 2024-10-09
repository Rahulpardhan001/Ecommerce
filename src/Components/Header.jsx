import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleSearch } from "../Redux/actions/apiActions";

function Header() {
  const { cartItems } = useSelector((state) => state.cart);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  // const handleSearching = (e) => {
  //   e.preventDefault();
  //   setSearch(e.target.value);
  //   dispatch(handleSearch(e.target.value));
  // };

  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" href="#">
                Shoping Now!
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNav"
              >
              {/* search */}
                <form className="Nav-search d-flex justify-content-center position-relative">
                  <input
                    className="form-control me-2 position-relative"
                    type="search"
                    placeholder="Search..."
                    // value={search}
                    onChange={(e) => dispatch(handleSearch(e.target.value))}
                  />
                  <i className="fa-solid fa-magnifying-glass "></i>
                </form>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      Features
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link position-relative" to="/cart">
                      <i className="fa-solid fa-cart-arrow-down"></i>
                      <span className="position-absolute pb-2  top-0 h-50 w-50 text-center ">
                        {cartItems.length}
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
