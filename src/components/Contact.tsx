import { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';
import submitForm from '../services/ContactFormService';
import { useFormik } from 'formik';
import { validationSchema } from '../models/ValidationSchema';
import { FormikHelpers } from 'formik';
import Navigation from './Navigation';

export type FormValues = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
    console.log(values);
    console.log(actions);
    await submitForm(values);
    console.log('Form submitted:', values);
    setConfirmation(true);
    actions.resetForm();
  };
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik<FormValues>({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit,
  });

  console.log(values);
  console.log('errors' + errors);

  const [confirmation, setConfirmation] = useState(false);

  return (
    <>
      <div className="contact-wrapper">
        <h1>Kontakt</h1>
        <p className="contact-info">Har du frågor eller funderingar? Skicka oss ett meddelande!</p>
        <form onSubmit={handleSubmit}>
          <label className="input-wrapper">
            Namn:
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.name && touched.name ? 'input-error' : ''}
            />
          </label>
          <div className="error">{errors.name && touched.name && <p>{errors.name}</p>}</div>

          <label className="input-wrapper">
            Mejladress:
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email ? 'input-error' : ''}
            />
          </label>
          {errors.email && touched.email && <p className="error">{errors.email}</p>}

          <label className="input-wrapper">
            Meddelande:
            <textarea
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.message && touched.message ? 'input-error' : ''}
            />
          </label>
          {errors.message && touched.message && <p className="error">{errors.message}</p>}

          <div>
            <button type="submit" disabled={isSubmitting}>
              Skicka
            </button>
          </div>
        </form>
        <div className="contact-img-wrapper">
          <img
            className="contact-img"
            src="/public/img/casual-life-3d-young-woman-in-headphones-sitting-in-front-of-laptop-and-waving.png"
            alt="3d woman in headphones sitting in front of laptop"
            width={130}
            height={130}
          />
        </div>
        {confirmation && <ConfirmationModal setConfirmation={setConfirmation}></ConfirmationModal>}
      </div>
      <Navigation></Navigation>
    </>
  );
};

export default Contact;
