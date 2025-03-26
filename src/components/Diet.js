import React from "react";

const Diet = ({ bmi }) => {
  let dietPlan = "";

  if (bmi < 18.5) {
    dietPlan = "Increase calorie intake with protein-rich foods, whole grains, and healthy fats.";
  } else if (bmi < 24.9) {
    dietPlan = "Maintain a balanced diet with fruits, vegetables, lean protein, and whole grains.";
  } else if (bmi < 29.9) {
    dietPlan = "Reduce processed food, eat more fiber, and include moderate exercise.";
  } else {
    dietPlan = "Adopt a high-fiber, low-calorie diet with plenty of water and regular exercise.";
  }

  return (
    <div className="diet-plan">
      <h2>Recommended Diet Plan</h2>
      <p>{dietPlan}</p>
    </div>
  );
};

export default Diet;
