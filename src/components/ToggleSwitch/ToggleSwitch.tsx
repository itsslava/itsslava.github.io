import { IToggleSwitchProps } from './ToggleSwitch.props';
import './ToggleSwitch.scss';

const ToggleSwitch: React.FC<IToggleSwitchProps> = (props: IToggleSwitchProps): JSX.Element => {
  const { isBackgroundChangeOn, handleToggleChange } = props;
  return (
    <div className="toggle-wrapper">
      <p className="toggle-title">Hover Shift</p>
      <input
        type="checkbox"
        id="switch"
        className="toggle"
        checked={isBackgroundChangeOn}
        onChange={handleToggleChange}
      />
      <label htmlFor="switch" className="toggle__label"></label>
    </div>
  );
};

export default ToggleSwitch;
