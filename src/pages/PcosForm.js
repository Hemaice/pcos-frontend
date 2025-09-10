import React, { useState } from "react";
import axios from "axios";
import "./PcosForm.css"; // import CSS file

const PcosForm = () => {
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

  const [prediction, setPrediction] = useState(null);
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

      const res = await axios.post("http://localhost:8080/api/predict", payload);
      setPrediction(res.data.prediction);
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
        <form onSubmit={handleSubmit} className="form-grid">
          
          {/* Y/N dropdowns */}
          {["Skin darkening (Y/N)", "hair growth(Y/N)", "Hair loss(Y/N)", "Pimples(Y/N)", "Weight gain(Y/N)", "Pregnant(Y/N)", "Fast food (Y/N)", "Reg.Exercise(Y/N)"].map((field) => (
            <div key={field} className="form-group">
              <label>{field}</label>
              <select name={field} value={formData[field]} onChange={handleChange} required>
                <option value="">Select</option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>
          ))}

          {/* Cycle dropdown */}
          <div className="form-group">
            <label>Cycle (R/I)</label>
            <select
              name="Cycle(R/I)"
              value={formData["Cycle(R/I)"]}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value={1}>Regular</option>
              <option value={2}>Irregular</option>
            </select>
          </div>

          {/* Numeric inputs */}
          {["Cycle length(days)", "No. of abortions", "Weight (Kg)", "Height(Cm)", "BMI", "Waist(inch)", "Hip(inch)", "Waist:Hip Ratio"].map((field) => (
            <div key={field} className="form-group">
              <label>{field}</label>
              <input
                type="number"
                step="any"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <div className="form-actions">
            <button type="submit" disabled={loading}>
              {loading ? "Predicting..." : "Predict"}
            </button>
          </div>
        </form>

        {prediction !== null && (
          <div className={`result ${prediction === 1 ? "positive" : "negative"}`}>
            Prediction: {prediction === 1 ? "PCOS Positive" : "PCOS Negative"}
          </div>
        )}
      </div>
    </div>
  );
};

export default PcosForm;

