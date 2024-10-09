import './ProfileControlButtons.css';

function ControlButtons({onPrimaryFunction, primaryText, onSecondaryFunction, secondaryText}) {
  return (
    <div className="control-buttons" onClick={onPrimaryFunction}>
      <button className="primary-btn">
        {primaryText}
      </button>
      <button className="secondary-btn" onClick={onSecondaryFunction}>
        {secondaryText}
      </button>
    </div>
  );
};

export default ControlButtons;