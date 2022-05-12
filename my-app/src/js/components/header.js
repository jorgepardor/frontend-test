import React, { useState } from 'react'

export const Header = () => {

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
        // console.log (lowerCase);
    };

    let keySearch = (event) => {
        if(event.key === 'Enter'){
          console.log('enter press here! ')
        }
      }

    return (  
        <div className="Header">
            <div className="Header_logo"><img className="Logo" src="https://res.cloudinary.com/jorgepardor/image/upload/v1652198954/mainlogo_lmbkm0.png" alt="Logotipo"/></div>
            <div className="Header_search">
                <form>

                    <input type="text" className="Search_form" onChange={inputHandler} placeholder="Are you looking for something?" onKeyPress={keySearch}></input>

                </form>
            </div>
        </div>
    );
};




