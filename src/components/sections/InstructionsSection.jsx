import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations';
import './InstructionsSection.css';

// Import PDF file
import instructionsPDF from '../../assets/pdfs/Instructuions.pdf';

const InstructionsSection = () => {
  const [expandedChecklist, setExpandedChecklist] = useState(null);
  const { language } = useLanguage();
  const t = translations[language];

  const toggleChecklist = (index) => {
    setExpandedChecklist(expandedChecklist === index ? null : index);
  };

  const handleDownload = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = instructionsPDF;
    link.download = 'Instructions.pdf'; // This will be the name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="instructions" className="instructions-section">
      <div className="container">
        <h2>{t.instructionsTitle}</h2>
        
        <div className="video-guides">
          <h3>{t.videoGuidesTitle}</h3>
          <div className="video-grid">
            <div className="video-item">
              <h4>{t.eGovMobileVideoTitle}</h4>
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/3qegg4jU3sQ"
                  title="Registration Guide"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="video-item">
              <h4>{t.eGovBusinessVideoTitle}</h4>
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/Lbnkk3mIgPo"
                  title="Document Guide"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="checklists">
          <h3>{t.checklistsTitle}</h3>
          <div className="checklist-grid">
            <div className="checklist-item">
              <div 
                className="checklist-header"
                onClick={() => toggleChecklist(0)}
                role="button"
                aria-expanded={expandedChecklist === 0}
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    toggleChecklist(0);
                  }
                }}
              >
                <h4>{t.registrationChecklistTitle}</h4>
                <span className="toggle-icon" aria-hidden="true">
                  {expandedChecklist === 0 ? '−' : '+'}
                </span>
              </div>
              {expandedChecklist === 0 && (
                <ul className="checklist-steps" role="region" aria-label={t.registrationChecklistTitle}>
                  {t.registrationSteps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="checklist-item">
              <div 
                className="checklist-header"
                onClick={() => toggleChecklist(1)}
                role="button"
                aria-expanded={expandedChecklist === 1}
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    toggleChecklist(1);
                  }
                }}
              >
                <h4>{t.documentChecklistTitle}</h4>
                <span className="toggle-icon" aria-hidden="true">
                  {expandedChecklist === 1 ? '−' : '+'}
                </span>
              </div>
              {expandedChecklist === 1 && (
                <ul className="checklist-steps" role="region" aria-label={t.documentChecklistTitle}>
                  {t.documentSteps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="download-instructions">
          <button onClick={handleDownload} className="download-button">
            {t.downloadInstructions}
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstructionsSection; 