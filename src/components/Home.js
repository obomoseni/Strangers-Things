import React from "react";
import { Link } from "react-router-dom";
import Logout from "../components/Logout";

const Home = () => {
    return (
        <div>
            <div id="home">
                <h1>Home</h1>
                <h1>Welcome to my page!</h1>
            </div>

            <Logout/>
        </div>
    )

}

export default Home;