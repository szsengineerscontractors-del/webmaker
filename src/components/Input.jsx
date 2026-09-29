// components/Input.jsx
'use client';

import { useId } from 'react';
import { color, space, radius, text } from './tokens';

export default function Input({
  label,
  helper,
  error,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled = false,
  required = false,
  className = '',
  style = {},
  ...rest
}) {
  const autoId = useId();
  const inputId = id ?? `input-${autoId}`;
  const hasError = Boolean(error);

  const borderColor = hasError
    ? color.stateErrorTx
    : color.borderDefault;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: space(2), width: '100%' }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            fontSize: text('sm'),
            fontWeight: 500,
            color: color.textPrimary,
          }}
        >
          {label}
          {required && <span style={{ color: color.stateErrorTx, marginLeft: '4px' }}>*</span>}
        </label>
      )}

      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        aria-invalid={hasError || undefined}
        aria-describedby={helper || error ? `${inputId}-help` : undefined}
        className={className}
        style={{
          width: '100%',
          padding: `${space(3)} ${space(4)}`,
          fontSize: text('base'),
          fontFamily: 'inherit',
          color: color.textPrimary,
          background: disabled ? color.surface2 : color.surface1,
          border: `1px solid ${borderColor}`,
          borderRadius: radius('md'),
          outline: 'none',
          transition: 'border-color 150ms ease, box-shadow 150ms ease',
          opacity: disabled ? 0.6 : 1,
          ...style,
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = color.borderFocus;
          e.currentTarget.style.boxShadow = `0 0 0 3px ${color.interactiveFocus}`;
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = borderColor;
          e.currentTarget.style.boxShadow = 'none';
        }}
        {...rest}
      />

      {(helper || error) && (
        <span
          id={`${inputId}-help`}
          style={{
            fontSize: text('xs'),
            color: hasError ? color.stateErrorTx : color.textMuted,
          }}
        >
          {error ?? helper}
        </span>
      )}
    </div>
  );
}