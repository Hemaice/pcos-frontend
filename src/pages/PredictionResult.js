import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./PredictionResult.css";

const PredictionResult = () => {
  const location = useLocation();
  const { prediction, formData } = location.state || {};

  if (!prediction && prediction !== 0) {
    return (
      <div className="result-container">
        <div className="result-card">
          <h2>No Results Found</h2>
          <p>Please complete the assessment first.</p>
          <Link to="/diagnose" className="btn-primary">Take Assessment</Link>
        </div>
      </div>
    );
  }

  const isPositive = prediction === 1;

  const positiveRecommendations = [
    {
      icon: "🏥",
      title: "Consult Healthcare Provider",
      description: "Schedule an appointment with a gynecologist or endocrinologist for proper diagnosis and treatment plan.",
      priority: "high"
    },
    {
      icon: "🥗",
      title: "Dietary Changes",
      description: "Adopt a low glycemic index diet rich in whole grains, lean proteins, and vegetables. Limit processed foods and sugars.",
      tips: ["Include omega-3 rich foods", "Eat smaller, frequent meals", "Stay hydrated", "Consider anti-inflammatory foods"]
    },
    {
      icon: "🏃‍♀️",
      title: "Regular Exercise",
      description: "Engage in both cardio and strength training exercises to improve insulin sensitivity and manage weight.",
      tips: ["30 minutes of moderate exercise daily", "Include HIIT workouts", "Try yoga or pilates", "Stay consistent"]
    },
    {
      icon: "🧘‍♀️",
      title: "Stress Management",
      description: "Practice stress-reduction techniques as chronic stress can worsen PCOS symptoms.",
      tips: ["Daily meditation (10-15 minutes)", "Deep breathing exercises", "Adequate sleep (7-9 hours)", "Mindfulness practices"]
    },
    {
      icon: "💊",
      title: "Consider Supplements",
      description: "Discuss with your doctor about supplements that may help manage PCOS symptoms.",
      tips: ["Inositol", "Vitamin D", "Omega-3", "Spearmint tea"]
    }
  ];

  const negativeRecommendations = [
    {
      icon: "😌",
      title: "Stay Calm & Positive",
      description: "Your assessment suggests low PCOS risk. Don't stress about having PCOS, but maintain healthy habits for prevention.",
      priority: "normal"
    },
    {
      icon: "🍎",
      title: "Maintain Healthy Diet",
      description: "Continue eating a balanced diet to prevent future hormonal imbalances and maintain overall health.",
      tips: ["Eat plenty of fruits and vegetables", "Choose whole grains", "Include lean proteins", "Limit processed foods"]
    },
    {
      icon: "💪",
      title: "Stay Active",
      description: "Regular physical activity helps maintain hormonal balance and prevents insulin resistance.",
      tips: ["150 minutes of moderate exercise weekly", "Include strength training", "Try different activities", "Make it enjoyable"]
    },
    {
      icon: "🧘",
      title: "Stress Management",
      description: "Continue practicing stress management techniques to maintain hormonal balance.",
      tips: ["Regular meditation", "Adequate sleep", "Work-life balance", "Relaxation techniques"]
    },
    {
      icon: "📅",
      title: "Regular Check-ups",
      description: "Schedule regular health check-ups to monitor your reproductive and metabolic health.",
      tips: ["Annual gynecological exams", "Monitor menstrual cycles", "Check hormone levels if needed", "Maintain health records"]
    }
  ];

  const recommendations = isPositive ? positiveRecommendations : negativeRecommendations;

  return (
    <div className="result-container">
      <div className="result-header">
        <div className={`result-status ${isPositive ? 'positive' : 'negative'}`}>
          <div className="status-icon">
            {isPositive ? '⚠️' : '✅'}
          </div>
          <h1 className="status-title">
            {isPositive ? 'PCOS Risk Detected' : 'Low PCOS Risk'}
          </h1>
          <p className="status-description">
            {isPositive 
              ? 'Based on your responses, there may be a risk of PCOS. Please consult with a healthcare provider for proper diagnosis and treatment.'
              : 'Great news! Your assessment indicates a low risk for PCOS. Continue maintaining healthy lifestyle habits.'
            }
          </p>
        </div>
      </div>

      <div className="recommendations-section">
        <h2 className="section-title">
          {isPositive ? 'Recommended Actions' : 'Prevention & Wellness Tips'}
        </h2>
        
        <div className="recommendations-grid">
          {recommendations.map((rec, index) => (
            <div key={index} className={`recommendation-card ${rec.priority || ''}`}>
              <div className="rec-header">
                <span className="rec-icon">{rec.icon}</span>
                <h3 className="rec-title">{rec.title}</h3>
              </div>
              <p className="rec-description">{rec.description}</p>
              {rec.tips && (
                <ul className="rec-tips">
                  {rec.tips.map((tip, tipIndex) => (
                    <li key={tipIndex}>{tip}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {isPositive && (
        <div className="urgent-notice">
          <div className="notice-content">
            <h3>⚠️ Important Notice</h3>
            <p>
              This assessment is for informational purposes only and should not replace professional medical advice. 
              Please consult with a qualified healthcare provider for proper diagnosis and treatment.
            </p>
          </div>
        </div>
      )}

      <div className="action-buttons">
        <Link to="/diagnose" className="btn-secondary">Take Assessment Again</Link>
        <Link to="/" className="btn-primary">Back to Home</Link>
      </div>
    </div>
  );
};

export default PredictionResult;