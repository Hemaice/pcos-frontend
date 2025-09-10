import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="title">Understanding PCOS</h1>
      <p className="subtitle">
        Polycystic Ovary Syndrome (PCOS) is a common hormonal condition that affects women
        of reproductive age. Early diagnosis and lifestyle management can make a big
        difference in preventing long-term complications.
      </p>

      <div className="card-container">
        <div className="card">
          <h3>What is PCOS?</h3>
          <p>
            PCOS causes irregular menstrual cycles, hormonal imbalance, and can affect
            fertility. It is often linked to insulin resistance and lifestyle factors.
          </p>
        </div>
        <div className="card">
          <h3>Symptoms</h3>
          <p>
            Common symptoms include irregular cycles, acne, weight gain, hair loss, and
            darkening of skin. Not all women have the same symptoms.
          </p>
        </div>
        <div className="card highlight">
          <h3>Diagnose PCOS</h3>
          <p>
            Answer a few questions and check your risk of PCOS instantly.
          </p>
          <Link to="/diagnose">
            <button className="btn">Start Diagnosis</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
