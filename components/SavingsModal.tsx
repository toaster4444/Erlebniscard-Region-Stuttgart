"use client";

export function SavingsModal(props: {
  open: boolean;
  title: string;
  description: string;
  value: string;
  onChange: (value: string) => void;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  if (!props.open) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className="modal-field">
          <label htmlFor="savings-input">Wie viel wurde gespart?</label>
          <div className="modal-input-row">
            <input
              id="savings-input"
              type="number"
              inputMode="decimal"
              step="0.01"
              min="0"
              value={props.value}
              onChange={(event) => props.onChange(event.target.value)}
            />
            <span>€</span>
          </div>
        </div>
        <div className="modal-actions">
          <button className="btn" onClick={props.onCancel}>
            Abbrechen
          </button>
          <button className="btn primary" onClick={props.onConfirm}>
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}
