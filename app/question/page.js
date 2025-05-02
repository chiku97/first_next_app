'use client'
import React, { useEffect, useRef, useState } from 'react'

export default function Dashboard() {
    const [inputValue, setInputValue] = useState({
        name: "",
        minNumber: 5,
        maxNumber: 5
    });
    const [data, setData] = useState([]);
    const ref = useRef(null);
    const [isClickable, setIsClickable] = useState(true);
    const [page, setPage] = useState(1)
    const [correctCount, setCorrectCOunt] = useState(0)

    useEffect(() => {
        fetch(`https://6805f6b0ca467c15be6a9494.mockapi.io/wapcohort2dummyapi/students/questions?category=WAP&page=${page}&limit=1`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [page]);
    const handleQuestionChange=(e)=>{
        setPage(e.target.value)
    }

    const handleQuizSubmit = () =>{
        const finalResult = correctCount;
        console.log(finalResult)
    }

    const handleClick = (e) => {
        if (!isClickable) return;
        console.log(e.target.value);
        if (data[0].correctOption === data[0].options[e.target.value]) {
            console.log(e.target);
            ref.current = e.target;
            ref.current.style.background = "green";
            setIsClickable(false);
            setCorrectCOunt(prev=>prev+1)
        } else {
            ref.current = e.target;
            ref.current.style.background = "red";
            setIsClickable(false);
            const correctIndex = data[0].options.indexOf(data[0].correctOption);
            const allOptions = e.target.parentElement.querySelectorAll("li");
            if (allOptions[correctIndex]) {
                allOptions[correctIndex].style.background = "green";
            }
        }
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2>Good luck, <span style={{ fontWeight: 'bold' }}>Uttam!</span></h2>
                <div style={{ fontSize: '18px' }}>14:52</div>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <h3>Question 1 of 10</h3>
                <div style={{ height: '10px', background: '#e0e0e0', borderRadius: '5px', overflow: 'hidden' }}>
                    <div style={{ width: '10%', height: '100%', background: '#4caf50' }}></div>
                </div>
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ flex: '1', border: '1px solid #ddd', borderRadius: '5px', padding: '10px' }}>
                    <h4>Questions</h4>
                    <ul style={{ listStyle: 'none', padding: '0', margin: '0', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
                        {[...Array(10)].map((_, index) => (
                            <li
                                key={index}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    border: '1px solid #ddd',
                                    borderRadius: '50%',
                                    background: index === page - 1 ? '#000' : '#fff',
                                    color: index === page - 1 ? '#fff' : '#000',
                                    fontWeight: index === page - 1 ? 'bold' : 'normal',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                value={index + 1}
                                onClick={(e) => handleQuestionChange(e)}
                            >
                                {index + 1}
                            </li>
                        ))}
                    </ul>
                    <button style={{
                        marginTop: '10px',
                        width: '100%',
                        padding: '10px',
                        background: '#f44336',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                    onClick={handleQuizSubmit}
                    >Submit Quiz</button>
                </div>
                <div style={{ flex: '3' }}>
                    <h3>{data[0]?.question || "Loading question..."}</h3>
                    <ul style={{ listStyle: 'none', padding: '0' }}>
                        {data[0]?.options.map((option, index) => (
                            <li key={index} style={{
                                border: '1px solid #ddd',
                                padding: '10px',
                                marginBottom: '10px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }} onClick={(e) => handleClick(e)} value={index}>
                                {option}
                            </li>
                        ))}
                    </ul>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                        <button style={{
                            padding: '10px 20px',
                            background: '#ddd',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}>Previous</button>
                        <button style={{
                            padding: '10px 20px',
                            background: '#000',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
