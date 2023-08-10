import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoginSchema } from '../../utils/yup';
import InputFields from '../InputFields/InputFields';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import './LoginForm.scss';

interface FormData {
  email: string;
  password: string;
}

const LoginForm: React.FC = (): JSX.Element => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormData>({ mode: 'onBlur', resolver: yupResolver(LoginSchema) });

  const [isBackgroundChangeOn, setIsBackgroundChangeOn] = useState<boolean>(false);

  const handleToggleChange = () => {
    setIsBackgroundChangeOn((prevIsBackgroundChangeOn) => !prevIsBackgroundChangeOn);
  };

  const handleButtonMouseEnterLeave = () => {
    if (isBackgroundChangeOn) {
      document.body.classList.toggle('hovered');
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      const res = await mockResponse(data);
      console.log(res);
      alert('Login successful!');
      setErrorMessage('');
      reset();
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Invalid email or password. Please try again.');
    }
  };

  const mockResponse = ({ email, password }: { email: string; password: string }) => {
    return new Promise((resolve, reject) => {
      if (email === 'test@example.com' && password === 'password') {
        resolve({ message: 'Login successful!' });
      } else {
        reject({ status: 401, message: 'Invalid email or password.' });
      }
    });
  };

  return (
    <>
      <h1 className="login__title">Sign in to Authentica</h1>
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <InputFields register={register} errors={errors} />
        <button
          type="submit"
          className={`login__button ${isBackgroundChangeOn ? 'hovered' : ''}`}
          onMouseEnter={handleButtonMouseEnterLeave}
          onMouseLeave={handleButtonMouseEnterLeave}
        >
          Sign in
        </button>
      </form>
      {errorMessage && <p className="auth-error">{errorMessage}</p>}
      <div className="auth__link">
        Don't have an account? <a href="#">Sign up</a>
      </div>
      <ToggleSwitch
        isBackgroundChangeOn={isBackgroundChangeOn}
        handleToggleChange={handleToggleChange}
      />
    </>
  );
};

export default LoginForm;
