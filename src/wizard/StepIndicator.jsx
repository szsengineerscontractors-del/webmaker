// src/wizard/StepIndicator.jsx
export default function StepIndicator({ steps, current }) {
  return (
    <div className="wizard-steps">
      {steps.map((s) => (
        <div
          key={s.id}
          className={`wizard-step ${s.id === current ? 'active' : ''} ${s.id < current ? 'done' : ''}`}
        >
          <span className="wizard-step-num">{s.id < current ? '✓' : s.id}</span>
          <span className="wizard-step-label">{s.label}</span>
        </div>
      ))}
    </div>
  );
}