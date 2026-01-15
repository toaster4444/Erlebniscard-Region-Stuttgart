"use client";

export function ConfirmModal(props: {
  open: boolean;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  if (!props.open) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className="modal-actions">
          <button className="btn" onClick={props.onCancel}>
            {props.cancelText ?? "Abbrechen"}
          </button>
          <button className="btn primary" onClick={props.onConfirm}>
            {props.confirmText ?? "Ja, besucht"}
          </button>
        </div>
      </div>
    </div>
  );
}
