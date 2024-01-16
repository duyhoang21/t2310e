import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Project SEM1</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="product">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="users">Users</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="about">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;