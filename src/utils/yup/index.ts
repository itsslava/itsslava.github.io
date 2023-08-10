import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
  email: yup.string().email('Please enter valid email.').required('Field is required.'),
  password: yup.string().required('Field is required.'),
});
