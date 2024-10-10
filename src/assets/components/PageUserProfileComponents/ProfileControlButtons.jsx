import './ProfileControlButtons.css';

function ControlButtons({onPrimaryFunction, primaryText, onSecondaryFunction, secondaryText}) {
  return (
    <div className="control-buttons">
      <button className="primary-btn" onClick={onPrimaryFunction}>
        {primaryText}
      </button>
      <button className="secondary-btn" onClick={onSecondaryFunction}>
        {secondaryText}
      </button>
    </div>
  );
};

export default ControlButtons;