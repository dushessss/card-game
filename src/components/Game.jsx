import React, {useEffect, useRef, useState} from 'react';
import {createDeck} from "../utils/constants.js";
import logo from "../image/LogoShuffleStorm.png";
import {FaUserAlt} from "react-icons/fa";
import {MdComputer} from "react-icons/md";
import styles from "../css/game.module.css";
import {deckImages} from "../utils/deckImages.jsx";

console.log(deckImages("2club.svg"))
const Game = ({name, changePage, changeResult}) => {
    const compDeck = useRef([]);
    const playerDeck = useRef([]);
    const [compCard, setCompCard] = useState("");
    const [compCardImg, setCompCardImg] = useState();
    const [playerCard, setPlayerCard] = useState("");
    const [playerCardImg, setPlayerCardImg] = useState();
    const [result, setResult] = useState({
        compGameScore: 0,
        playerGameScore: 0
    });

    useEffect(() => {
        const deck = createDeck();
        deck.sort(() => Math.random() - 0.5);
        compDeck.current = deck.slice(0, deck.length / 2);
        playerDeck.current = deck.slice(deck.length / 2);
    }, []);


    const handleClickNext = () => {
        if (playerDeck.current.length) {
            const player = playerDeck.current.pop();
            const comp = compDeck.current.pop();
            if (player.rank > comp.rank) {
                setResult({
                    compGameScore: result.compGameScore,
                    playerGameScore: result.playerGameScore + 1
                })
            }
            if (comp.rank > player.rank) {
                setResult({
                    compGameScore: result.compGameScore + 1,
                    playerGameScore: result.playerGameScore
                })
            }
            setCompCard(`${comp.suit} ${comp.rank} `);
            setCompCardImg(comp.image);
            setPlayerCard(`${player.suit} ${player.rank}`);
            setPlayerCardImg(player.image);
        } else {
            changeResult(result);
            changePage("ResultGame");
        }
    }
    return (
        <div className={"container flex flex-col flex-wrap justify-center content-center items-center"}>
            <img src={logo} alt="logo" className={"max-h-44 mt-11"}/>
            <div className={"flex items-center"}>
                <div className={styles.players}>
                    <h2><FaUserAlt className={"float-left"}/>{name}</h2>
                    <p className={"mt-11"} onClick={handleClickNext}><img src={deckImages(playerCardImg)} alt={playerCard}/></p>

                </div>
                <div className={styles.score}>
                    <p>Score:</p>
                    <span>{result.playerGameScore} : {result.compGameScore}</span>
                </div>
                <div className={styles.players}>
                    <h2><MdComputer className={"float-left mr-2"}/>Computer</h2>
                    <p className={"mt-11"} onClick={handleClickNext}><img src={deckImages(compCardImg)} alt={compCard}/> </p>
                </div>
            </div>
        </div>
    );
};

export default Game;