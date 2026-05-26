import React, { useState } from 'react'
import './App.css'
import ask from './assets/ask.gif'
import happyGif from './assets/yes.gif'
import Button from '@mui/material/Button';

function App() {
  const [noClickCount, setNoClickCount] = useState(0);
  const [yesClicked, setYesClicked] = useState(false);

  const handleNoClick = () => {
    setNoClickCount(prev => prev + 1);
  };

  const handleYesClick = () => {
    setYesClicked(true);
    setNoClickCount(0); // reset size back to normal
  };

  const noButtonText =
    noClickCount === 0 ? "لا" :
    noClickCount === 1 ? "متاكد؟" :
    "فكر مره ثانية";

  const yesButtonScale = 1 + noClickCount * 0.3;

  return (
    <div className="main">
      <img
        src={yesClicked ? happyGif : ask}
        alt="askImage"
        className="askImage"
      />
      <h1>
        {yesClicked ? "يلا نعيشها سوا ❤️" : "عندك مجال 40 سنه نعيشها سوية؟"}
      </h1>
      <div className="btn">
        {!yesClicked ? (
          <Button
            variant="contained"
            color="success"
            onClick={handleYesClick}
            style={{
              transform: `scale(${yesButtonScale})`,
              transition: "transform 0.3s ease-in-out"
            }}
          >
            اي
          </Button>
        ) : (
          <div style={{ textAlign: "center" }}>
            <h2 style={{ color: "red" }}>احبك ❤️</h2>
            <p style={{ marginTop: "10px", fontStyle: "italic", color: "#555" }}>
              صنع بكل حب بواسطة مريم احسان لغيث
            </p>
          </div>
        )}
        <Button
          variant="contained"
          color="error"
          onClick={handleNoClick}
          disabled={yesClicked} // disable "لا" after yes is clicked
        >
          {noButtonText}
        </Button>
      </div>
    </div>
  )
}

export default App;
