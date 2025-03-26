import React, { useState } from "react";

const BMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      if (bmiValue < 18.5) setStatus("Underweight");
      else if (bmiValue < 24.9) setStatus("Normal weight");
      else if (bmiValue < 29.9) setStatus("Overweight");
      else setStatus("Obese");
    } else {
      setBmi(null);
      setStatus("");
    }
  };

  const getDietPlan = () => {
    if (bmi === null) return "Enter your details to get a diet plan.";
    if (bmi < 18.5) return "Eat more protein, healthy fats, whole grains, and dairy.";
    if (bmi < 24.9) return "Maintain a balanced diet with fruits, veggies, and lean protein.";
    if (bmi < 29.9) return "Cut processed food, eat more fiber, and stay active.";
    return "Follow a low-calorie, high-fiber diet with regular exercise.";
  };

  return (
    <div className="bmi-diet">
      <h2>Calculate Your BMI</h2>
      <div className="input-group">
        <label>Weight (kg):</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Enter weight" />
      </div>

      <div className="input-group">
        <label>Height (cm):</label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Enter height" />
      </div>

      <button onClick={calculateBMI}>Calculate BMI</button>

      {bmi && (
        <div className="result">
          <h2>Your BMI: {bmi}</h2>
          <p>Status: <span className={status.toLowerCase()}>{status}</span></p>
        </div>
      )}

      <div className="diet-plan">
        <h2>Diet Plan</h2>
        <p>{getDietPlan()}</p>
      </div>
    </div>
  );
};

export default BMI;
