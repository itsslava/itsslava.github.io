import { FieldError } from 'react-hook-form';

export interface IInputFieldsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  errors: {
    email?: FieldError;
    password?: FieldError;
  };
}
