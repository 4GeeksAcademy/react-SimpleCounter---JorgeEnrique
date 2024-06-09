import React from "react";
import SecondsCounter from "./secondscounter.jsx";

//create your first component
const Home = () => {
    return (
        <div>
            <div className="text-center">
                <h1 className="text-center mt-5">Clock is ticking...</h1>
                <SecondsCounter seconds={0} onAlertTime={10} />
            </div>
            <footer className="text-center">
                <p>
                    Made by <strong>Jorge Astorga</strong>, for
                    <strong> 4Geeks Academy. ©2024 </strong>
                </p>
            </footer>
        </div>
    );
};

export default Home;
