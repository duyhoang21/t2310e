import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import MyNav from "./components/MyNav";
import EmployeeForm from "./components/EmployeeForm";
import Form from "./components/Form";
import DisplayEmployee from "./components/DisplayEmployee";
import {useState} from "react";

// components in Class 3
import Home from "./class3/Home";
import About from "./class3/About";
import Contact from "./class3/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import * as PropTypes from "prop-types";
import Layout from "./Layout";
import Products from "./class3/Products";
import DetailProduct from "./class3/DetailProduct";
import Users from "./class3/Users";

Routes.propTypes = {children: PropTypes.node};

function App() {

    //object JSON
    const emp = {
        firstName : "Tuan",
        lastName : "Nguyen",
        email : "tuan@gmail.com"
    }

    // const [employeeData, setEmployeeData] = useState(null);
    //
    // const handleEmployeeSubmit = (data) => {
    //     // console.log(data.firstName);
    //     // console.log(data.lastName);
    //     // console.log(data.email);
    //     setEmployeeData(data);
    // };


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="home" element={<Home />} />
                    <Route path="product" element={<Products />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="about" element={<About />} />
                    <Route path="users" element={<Users />} />
                    <Route path="/products/:id" element={ <DetailProduct/> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

export default App;
