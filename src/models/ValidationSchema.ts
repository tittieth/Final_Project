import * as yup from 'yup';

export const validationSchemaContactForm = yup.object().shape({
  name: yup.string().required('Detta fält är obligatoriskt. Vänligen fyll i det'),
  email: yup
    .string()
    .email('Ogiltig e-postadress. Vänligen ange en giltig e-postadress')
    .required('Detta fält är obligatoriskt. Vänligen fyll i det'),
  message: yup.string().required('Detta fält är obligatoriskt. Vänligen fyll i det'),
});

export const validationSchemaName = yup.object({
  name: yup
    .string()
    .matches(/^[A-Za-z]+$/, 'Endast bokstäver är tillåtna')
    .required('Detta fält är obligatoriskt. Vänligen fyll i det'),
});
