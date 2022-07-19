import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorMessage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <p>Error!</p>

            <button>Return to Posts</button>
        </div>
    );
};

export default ErrorMessage;


