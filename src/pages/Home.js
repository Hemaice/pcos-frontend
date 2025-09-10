import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [selectedCard, setSelectedCard] = useState(null);

  const pcosInfo = {
    symptoms: {
      title: "PCOS Symptoms",
      content: "PCOS symptoms vary but commonly include irregular periods, excess hair growth (hirsutism), acne, weight gain, hair loss, and skin darkening. Many women also experience mood changes, fatigue, and difficulty losing weight. Early recognition of these symptoms is crucial for timely diagnosis and management."
    },
    causes: {
      title: "What Causes PCOS?",
      content: "PCOS is caused by a combination of genetic and environmental factors. Insulin resistance plays a major role, leading to elevated androgen levels. Family history, obesity, and sedentary lifestyle can increase risk. Hormonal imbalances affect ovulation and can lead to cyst formation in ovaries."
    },
    prevention: {
      title: "Prevention & Management",
      content: "While PCOS cannot be completely prevented, lifestyle modifications can significantly reduce symptoms. Maintain a healthy weight through balanced diet and regular exercise. Limit processed foods and sugar intake. Practice stress management through meditation or yoga. Regular medical check-ups help monitor hormone levels."
    },
    diet: {
      title: "PCOS-Friendly Diet",
      content: "Focus on low glycemic index foods like whole grains, lean proteins, and plenty of vegetables. Include anti-inflammatory foods such as fatty fish, nuts, and berries. Avoid refined sugars and processed foods. Consider intermittent fasting under medical supervision. Stay hydrated and limit caffeine intake."
    },
    exercise: {
      title: "Exercise for PCOS",
      content: "Regular physical activity improves insulin sensitivity and helps manage weight. Combine cardio exercises like walking, swimming, or cycling with strength training. High-intensity interval training (HIIT) can be particularly effective. Aim for at least 150 minutes of moderate exercise weekly."
    },
    fertility: {
      title: "PCOS & Fertility",
      content: "PCOS is a leading cause of infertility, but many women with PCOS can conceive with proper treatment. Weight management, medications like metformin, and fertility treatments can help. Ovulation induction and lifestyle changes often improve pregnancy chances significantly."
    }
  };

  const handleCardClick = (cardType) => {
    setSelectedCard(selectedCard === cardType ? null : cardType);
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="main-title">PCOS Care & Management</h1>
        <p className="hero-subtitle">
          Comprehensive support for Polycystic Ovary Syndrome. Get diagnosed, learn about management, 
          and take control of your health with evidence-based information and tools.
        </p>
        <div className="cta-section">
          <Link to="/diagnose" className="cta-button primary">
            Start PCOS Assessment
          </Link>
          <button className="cta-button secondary" onClick={() => document.getElementById('info-section').scrollIntoView({behavior: 'smooth'})}>
            Learn More
          </button>
        </div>
      </div>

      <div id="info-section" className="info-section">
        <h2 className="section-title">Understanding PCOS</h2>
        <div className="info-grid">
          <div className={`info-card ${selectedCard === 'symptoms' ? 'expanded' : ''}`} onClick={() => handleCardClick('symptoms')}>
            <div className="card-icon">🩺</div>
            <h3>Symptoms & Signs</h3>
            <p>Recognize the common signs and symptoms of PCOS</p>
            {selectedCard === 'symptoms' && (
              <div className="card-details">
                <p>{pcosInfo.symptoms.content}</p>
              </div>
            )}
          </div>

          <div className={`info-card ${selectedCard === 'causes' ? 'expanded' : ''}`} onClick={() => handleCardClick('causes')}>
            <div className="card-icon">🧬</div>
            <h3>Causes & Risk Factors</h3>
            <p>Understanding what leads to PCOS development</p>
            {selectedCard === 'causes' && (
              <div className="card-details">
                <p>{pcosInfo.causes.content}</p>
              </div>
            )}
          </div>

          <div className={`info-card ${selectedCard === 'prevention' ? 'expanded' : ''}`} onClick={() => handleCardClick('prevention')}>
            <div className="card-icon">🛡️</div>
            <h3>Prevention & Management</h3>
            <p>Lifestyle strategies to manage and prevent PCOS</p>
            {selectedCard === 'prevention' && (
              <div className="card-details">
                <p>{pcosInfo.prevention.content}</p>
              </div>
            )}
          </div>

          <div className={`info-card ${selectedCard === 'diet' ? 'expanded' : ''}`} onClick={() => handleCardClick('diet')}>
            <div className="card-icon">🥗</div>
            <h3>Nutrition & Diet</h3>
            <p>PCOS-friendly foods and dietary recommendations</p>
            {selectedCard === 'diet' && (
              <div className="card-details">
                <p>{pcosInfo.diet.content}</p>
              </div>
            )}
          </div>

          <div className={`info-card ${selectedCard === 'exercise' ? 'expanded' : ''}`} onClick={() => handleCardClick('exercise')}>
            <div className="card-icon">💪</div>
            <h3>Exercise & Fitness</h3>
            <p>Physical activities that help manage PCOS symptoms</p>
            {selectedCard === 'exercise' && (
              <div className="card-details">
                <p>{pcosInfo.exercise.content}</p>
              </div>
            )}
          </div>

          <div className={`info-card ${selectedCard === 'fertility' ? 'expanded' : ''}`} onClick={() => handleCardClick('fertility')}>
            <div className="card-icon">👶</div>
            <h3>Fertility & Pregnancy</h3>
            <p>PCOS impact on fertility and pregnancy planning</p>
            {selectedCard === 'fertility' && (
              <div className="card-details">
                <p>{pcosInfo.fertility.content}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="diagnosis-section">
        <div className="diagnosis-card">
          <h2>Ready for Assessment?</h2>
          <p>Take our comprehensive PCOS risk assessment to understand your symptoms and get personalized recommendations.</p>
          <div className="diagnosis-features">
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span>Quick 5-minute assessment</span>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span>Evidence-based evaluation</span>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span>Personalized recommendations</span>
            </div>
          </div>
          <Link to="/diagnose" className="diagnosis-button">
            Start Assessment Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;