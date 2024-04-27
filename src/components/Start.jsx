import React, {useState} from 'react';
import logo from "../image/LogoShuffleStorm.png";

const Start = ({changeName,changePage}) => {
    const [nameStart, setNameStart] = useState("");

    const saveName = () =>{
        changeName(nameStart);
        changePage("Game");
    }

    return (
        <div className={"container flex h-screen flex-col flex-wrap justify-center content-center items-center"}>
            <img src={logo} alt="logo"/>
            <input type={"text"}
                   onKeyDown={e => {
                       if(e.key === "Enter") {
                           saveName();
                       }
                   }}
                   onChange={e => setNameStart(e.target.value)}
                   placeholder={"Enter your name"} className={"mb-14 mt-16"} id={"nameInput"} required={true}/>
            <button onClick={()=>saveName()} className={"btn--primary"} id={"btnStart"}>Let's shuffle it</button>
        </div>
    );
};

export default Start;