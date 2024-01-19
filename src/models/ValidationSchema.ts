import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup.string().required('Detta fält är obligatoriskt. Vänligen fyll i det'),
  email: yup
    .string()
    .email('Ogiltig e-postadress. Vänligen ange en giltig e-postadress')
    .required('Detta fält är obligatoriskt. Vänligen fyll i det'),
  message: yup.string().required('Detta fält är obligatoriskt. Vänligen fyll i det'),
});
