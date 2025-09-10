import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./PcosForm.css"; // import CSS file

const PcosForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    "Skin darkening (Y/N)": "",
    "hair growth(Y/N)": "",
    "Hair loss(Y/N)": "",
    "Pimples(Y/N)": "",
    "Weight gain(Y/N)": "",
    "Cycle(R/I)": "",
    "Cycle length(days)": "",
    "Pregnant(Y/N)": "",
    "No. of abortions": "",
    "Weight (Kg)": "",
    "Height(Cm)": "",
    "BMI": "",
    "Waist(inch)": "",
    "Hip(inch)": "",
    "Waist:Hip Ratio": "",
    "Fast food (Y/N)": "",
    "Reg.Exercise(Y/N)": ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {};
      Object.keys(formData).forEach((key) => {
        payload[key] = isNaN(formData[key]) ? formData[key] : Number(formData[key]);
      });

      const res = await axios.post("https://pcos-api-5mno.onrender.com/api/predict", payload);
      // Navigate to result page with prediction data
      navigate('/result', { 
        state: { 
          prediction: res.data.prediction,
          formData: payload 
        } 
      });
    } catch (error) {
      console.error(error);
      alert("Error fetching prediction");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="form-card">
        <h2 className="title">PCOS Prediction Form</h2>
        <p className="form-subtitle">
          Please fill out this comprehensive form to assess your PCOS risk. All information is confidential and used only for assessment purposes.
        </p>
        
        <form onSubmit={handleSubmit} className="form-grid">
          
          <div className="form-section">
            <h3 className="section-title">
              <span className="section-icon">🩺</span>
              Physical Symptoms
            </h3>
          </div>
          
          {/* Y/N dropdowns */}
          {["Skin darkening (Y/N)", "hair growth(Y/N)", "Hair loss(Y/N)", "Pimples(Y/N)", "Weight gain(Y/N)", "Pregnant(Y/N)", "Fast food (Y/N)", "Reg.Exercise(Y/N)"].map((field) => (
            <div key={field} className="form-group">
              <label>
                {field.replace('(Y/N)', '')} <span className="required-indicator">*</span>
              </label>
              <select name={field} value={formData[field]} onChange={handleChange} required>
                <option value="">Select</option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>
          ))}

          <div className="form-section">
            <h3 className="section-title">
              <span className="section-icon">📅</span>
              Menstrual Cycle Information
            </h3>
          </div>

          {/* Cycle dropdown */}
          <div className="form-group">
            <label>Menstrual Cycle <span className="required-indicator">*</span></label>
            <select
              name="Cycle(R/I)"
              value={formData["Cycle(R/I)"]}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value={1}>Regular</option>
              <option value={0}>Irregular</option>
            </select>
          </div>

          <div className="form-section">
            <h3 className="section-title">
              <span className="section-icon">📏</span>
              Physical Measurements
            </h3>
          </div>

          {/* Numeric inputs */}
          {["Cycle length(days)", "No. of abortions", "Weight (Kg)", "Height(Cm)", "BMI", "Waist(inch)", "Hip(inch)", "Waist:Hip Ratio"].map((field) => (
            <div key={field} className="form-group">
              <label>
                {field} <span className="required-indicator">*</span>
              </label>
              <input
                type="number"
                step="any"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
              />
              {field === "BMI" && <span className="form-help-text">Normal range: 18.5-24.9</span>}
              }
              {field === "Waist:Hip Ratio" && <span className="form-help-text">Healthy ratio: &lt;0.85 for women</span>}
              }
            </div>
          ))}

          <div className="form-actions">
            <button type="submit" disabled={loading}>
              {loading && <span className="loading-spinner"></span>}
              }
              {loading ? "Analyzing..." : "Get Assessment Results"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PcosForm;

