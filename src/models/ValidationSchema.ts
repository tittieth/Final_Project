import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup.string().required('Namn är obligatoriskt'),
  email: yup.string().email('Fyll i en giltig mejl').required('email är obligatorisk'),
  message: yup.string().required('Du måste skriva ett meddelande'),
});
