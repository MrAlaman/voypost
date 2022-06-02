import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Email is invalid').required('Required field'),
  password: Yup.string()
    .required('Required field')
    .min(6, 'Password should be at least 6 characters'),
});

export default SignupSchema;
