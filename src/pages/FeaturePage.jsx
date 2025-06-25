import React, { useEffect, useState } from "react";
import { fetchFeatures } from "../services/featureService";

const FeaturePage = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetchFeatures()
      .then(setFeatures)
      .catch((error) => {
        console.error("Ошибка загрузки функций:", error);
      });
  }, []);

  return (
    <div className="feature-page">
      <h2>Функциональность приложения</h2>
      {features.map((f) => (
        <div key={f.id} className="feature-item">
          <h3>{f.name}</h3>
          <p>{f.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturePage;
