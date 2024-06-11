import * as yup from 'yup';

export const authFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Пожалуйста введите валидный email')
    .required('email обязателен'),
  password: yup
    .string()
    .min(6, 'Пароль должен быть не менее 6 символов')
    .max(12, 'Пароль должен быть не более 12 символов')
    .required('Пароль обязателен'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Пароли не совпадают')
    .required('Подтверждение пароля обязательно'),
});

export interface AuthForm {
  email: string;
  password: string;
  confirmPassword: string;
}
