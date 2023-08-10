import { IInputFieldsProps } from './InputFields.props';
import './InputFields.scss';

const InputFields: React.FC<IInputFieldsProps> = (props: IInputFieldsProps): JSX.Element => {
  const { register, errors } = props;
  return (
    <>
      <div className="input__wrapper">
        <label className="input__label" htmlFor="email">
          Email:
        </label>
        <input className="input" type="email" autoComplete="current-email" {...register('email')} />
        {errors.email && <span className="input__error">{errors.email.message}</span>}
      </div>
      <div className="input__wrapper">
        <label className="input__label" htmlFor="password">
          Password:
        </label>
        <input
          className="input"
          type="password"
          autoComplete="current-password"
          {...register('password')}
        />
        {errors.password && <span className="input__error">{errors.password.message}</span>}
      </div>
    </>
  );
};

export default InputFields;
