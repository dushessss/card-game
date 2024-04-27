import React from 'react';
import logo from "../image/LogoShuffleStorm.png";
import {FaUserAlt} from "react-icons/fa";
import {MdComputer} from "react-icons/md";
import "../css/result.css";
import sadIcon from "../image/iconSad.svg";
import happyIcon from "../image/iconHappy.svg";


const ResultGame = ({changePage, currentScore, totalScore, name}) => {
    let styles = {
        stylePlayer : "playersWIN flex flex-col",
        styleComp : "playersWIN flex flex-col",
        textPlayer : "Draw",
        textComp : "Draw",
        iconComp : happyIcon,
        iconPlayer: happyIcon
    }

    if (currentScore.resultString === "WIN") {
        styles.styleComp = "playersLOSE flex flex-col";
        styles.textPlayer = "Won!";
        styles.textComp = "Lost";
        styles.iconComp = sadIcon;
    }
    if (currentScore.resultString === "LOSE") {
        styles.stylePlayer = "playersLOSE flex flex-col";
        styles.textPlayer = "Lost";
        styles.textComp = "Won!";
        styles.iconPlayer = sadIcon;
    }
    return (
        <div className={"container flex flex-col flex-wrap justify-center content-center items-center"}>
            <img src={logo} alt="logo" className={"max-h-44 mt-11"}/>
            <div className={"flex items-center"}>
                <div className={styles.stylePlayer}>
                    <h2><FaUserAlt className={"float-left"}/>{name}</h2>
                    <div className={"mt-11 flex flex-col flex-wrap justify-evenly"}>
                        <img src={styles.iconPlayer} alt={""}/>
                        <p>{styles.textPlayer}</p>
                    </div>
                </div>
                <div className={"score flex items-center flex-col justify-center mx-10"}>
                    <p>Total Score:</p>
                    <span>{totalScore.playerTotalScore} : {totalScore.compTotalScore}</span>
                </div>
                <div className={styles.styleComp}>
                    <h2><MdComputer className={"float-left mr-2"}/>Computer</h2>
                    <div className={"mt-11 flex flex-col flex-wrap justify-evenly"}>
                        <img src={styles.iconComp} alt=""/>
                        <p>{styles.textComp}</p>
                    </div>
                </div>
            </div>
            <button onClick={() => changePage("Game")} className={"btn--primary mt-20"}>Shuffle again!</button>
        </div>
    )
        ;
};

export default ResultGame;