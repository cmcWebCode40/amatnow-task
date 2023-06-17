import * as Yup from 'yup';

export const LoginAuthSchema = Yup.object().shape({
  email: Yup.string().email('email is not valid!').required(),
  password: Yup.string().required('password is required!'),
});
