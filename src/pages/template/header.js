import React from 'react';

function Header() {

    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="fake_url">
                        <i className="fas fa-bars" />
                    </a>
                </li>
            </ul>

            <form className="form-inline ml-3">
                <div className="input-group input-group-sm">
                    <input className="form-control form-control-navbar" type="search" placeholder="Pesquisar" aria-label="Pesquisar" />
                    <div className="input-group-append">
                        <button className="btn btn-navbar" type="submit">
                            <i className="fas fa-search" />
                        </button>
                    </div>
                </div>
            </form>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <img src=""
                        alt="Login APP"
                        className="img-size-50 mr-3"
                        style={{ opacity: .9 }} />
                </li>
            </ul>
        </nav>
    )
}
export default Header;