import React from "react";


export const Header = () => {
    return (  
        <div className="Header">
            <div className="Header_logo"><img className="Logo" src="https://res.cloudinary.com/jorgepardor/image/upload/v1652198954/mainlogo_lmbkm0.png" alt="Logotipo"/></div>
            <div className="Header_search">
                <form className="Search_form">
                    <input type="search" placeholder="Are you looking for something?" />
                    <button type="submit">Search</button>
                </form>
            </div>
        </div>
    );
};