import { useState } from "react";


const Worldcup = ({ contry }) => {

    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap
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

    return <>
        {(shuffledData.length >= 2) && (
            <>
                <div>
                    <img src={shuffledData[0].image} alt={shuffledData[0].name} />
                    <h2>{shuffledData[0].name}</h2>
                    <button onClick={() => selectWinner(0)}>이상형 선택</button>
                </div>s
                <div>
                    <img src={shuffledData[1].image} alt={shuffledData[1].name} />
                    <h2>{shuffledData[1].name}</h2>
                    <button onClick={() => selectWinner(1)}>이상형 선택</button>
                </div>

            </>)
        }
        {(shuffledData.length === 1) && (
            <div>
                <h2>우승자</h2>
                <img src={shuffledData[0].image} alt={shuffledData[0].name} />
                <h2>{shuffledData[0].name}</h2>
            </div>
        )}
    </>
}

export default Worldcup