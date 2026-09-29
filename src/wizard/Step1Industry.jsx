// src/wizard/Step1Industry.jsx
export default function Step1Industry({ industries, selected, onSelect, onNext }) {
  return (
    <div className="wizard-panel">
      <div className="wizard-panel-header">
        <h1>What kind of business is this?</h1>
        <p>We'll set up the right sections and look for you.</p>
      </div>

      <div className="industry-grid">
        {industries.map((ind) => (
          <button
            key={ind.id}
            type="button"
            className={`industry-card ${selected === ind.id ? 'selected' : ''}`}
            onClick={() => onSelect(ind.id)}
          >
            <span className="industry-icon">{ind.icon}</span>
            <span className="industry-name">{ind.name}</span>
            <span className="industry-desc">{ind.description}</span>
          </button>
        ))}
      </div>

      <div className="wizard-actions">
        <button
          className="wizard-btn primary"
          disabled={!selected}
          onClick={onNext}
        >
          Continue
        </button>
      </div>
    </div>
  );
}