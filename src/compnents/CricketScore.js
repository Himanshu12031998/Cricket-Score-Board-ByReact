import React, { useState, useEffect } from "react";
import "../styles/CricketScore.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const CricketScore = () => {
  const [score, setScore] = useState(0);
  const [wicket, setWicket] = useState(0);
  const [over, setOver] = useState(0);
  const [count, setCount] = useState(0);

//   const setScores = (num) => {
//     if (over < 10 && wicket <= 9) {
//       setScore(score + num);
//       setCount(count + 1);

//       if (count === 6 ) {
//         setOver(over + 1);
//         setCount(0);
//       }
//     }
//     if (over === 10) {
//       toast.success("The Over Has Ended");
//     }
//   };

//   const setWickets = (wic) => {
    // if (wicket <= 9) {
    //   if (wicket === 9) {
    //     toast.success("All Out ! Game over");
    //   }
//       setWicket(wicket + 1);
//       setCount(count + 1);
//     }
//   };
useEffect(()=>{
if(over === 10){
    toast.warning('Over has Ended ! Game Over')
}
    if(count===6){
       setOver(over+1);
       setCount(0);
    }
   },[count]
   )
const setScores=(num)=>{
    if( over <=9 && wicket <=9 ){
    if(num!=='wicket'){
    
        setScore(score+num);
        setCount(count+1);
    }else{
        if (wicket <= 9) {
            if (wicket === 9) {
              toast.warning("All Out ! Game over");
            }
        setWicket(wicket + 1);
        setCount(count+1);
    }}
}
}
  return (
    
    <div className="main-container">
 <ToastContainer
position="top-center"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    <div className="container">    
      <h2 className="project-title">Cricket Score Board</h2>
      <h3 className="project-score">
        Score  : {score}/{wicket}
      </h3>
      <h3 className="project-over">
        Over : {over}.{count}
      </h3>
      <div className="all-btn">
        <button onClick={() => setScores(0)}>0</button>
        <button onClick={() => setScores(1)}>1</button>
        <button onClick={() => setScores(2)}>2</button>
        <button onClick={() => setScores(3)}>3</button>
        <button onClick={() => setScores(4)}>4</button>
        <button onClick={() => setScores(6)}>6</button> <br />
        <button  className='wic-btn' onClick={() => setScores('wicket')}>wicket</button>
      </div>
      

      
</div>

    </div>
  );
};

export default CricketScore;
