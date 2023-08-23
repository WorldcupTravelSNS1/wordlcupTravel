import { useEffect, useState } from "react";
import "./Worldcup.css"
import vsImage from "../assets/VS.png"


const Worldcup = ({ contry }) => {


    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    const [shuffledData, setshuffledData] = useState(() => shuffleArray(contry))

    const selectWinner = (num) => {
        if (num === 0) {
            setshuffledData((prev) => [...prev.slice(2), prev[0]])
        }
        else {
            setshuffledData((prev) => [...prev.slice(2), prev[1]])
        }

    }

    return <div className="worldcup-container">
        {(shuffledData.length >= 2) && (
            <>
                <div className="half">
                    <div className="item">
                        <img src={shuffledData[0].image} alt={shuffledData[0].name} />
                        <h2>{shuffledData[0].name}</h2>
                        <button onClick={() => selectWinner(0)}>여기 어때?</button>
                    </div>
                </div>
                <div className="vs">
                    <img src={vsImage} alt="VS" />
                </div>

                <div className="half">
                    <div className="item">
                        <img src={shuffledData[1].image} alt={shuffledData[1].name} />
                        <h2>{shuffledData[1].name}</h2>
                        <button onClick={() => selectWinner(1)}>여기 어때?</button>
                    </div>
                </div>

            </>)
        }

        {
            (shuffledData.length === 1) && (
                <div className="winner">
                    <h2>우승자</h2>
                    <img src={shuffledData[0].image} alt={shuffledData[0].name} />
                    <h2>{shuffledData[0].name}</h2>
                </div>
            )
        }
    </div>
}

export default Worldcup