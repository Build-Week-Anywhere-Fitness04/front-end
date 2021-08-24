import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup
    .string()
    .trim()
    .email('Email is required')
    .required('Email is required'),
    password: yup
    .string()
    .required('Hey.. whats your password?')
    .min(6, 'Password must be at least 6 characters')
})

export default schema;