// src/wizard/Step2Business.jsx
export default function Step2Business({ value, onChange, onNext, onBack }) {
  const canContinue = value.businessName.trim().length > 0;

  return (
    <div className="wizard-panel">
      <div className="wizard-panel-header">
        <h1>Tell us about your business</h1>
        <p>We'll use this throughout your site.</p>
      </div>

      <div className="wizard-form">
        <label className="wizard-field">
          <span className="wizard-field-label">Business name *</span>
          <input
            className="wizard-input"
            type="text"
            placeholder="Joe's Pizza"
            value={value.businessName}
            onChange={(e) => onChange({ businessName: e.target.value })}
            autoFocus
          />
        </label>

        <label className="wizard-field">
          <span className="wizard-field-label">Tagline (optional)</span>
          <input
            className="wizard-input"
            type="text"
            placeholder="Best slice in Brooklyn"
            value={value.tagline}
            onChange={(e) => onChange({ tagline: e.target.value })}
          />
        </label>
      </div>

      <div className="wizard-actions">
        <button className="wizard-btn ghost" onClick={onBack}>Back</button>
        <button className="wizard-btn primary" disabled={!canContinue} onClick={onNext}>
          Continue
        </button>
      </div>
    </div>
  );
}