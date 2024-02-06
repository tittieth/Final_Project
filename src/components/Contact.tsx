import { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';
import submitForm from '../services/ContactFormService';
import { useFormik } from 'formik';
import { validationSchemaContactForm } from '../models/ValidationSchema';
import { FormikHelpers } from 'formik';

export type FormValues = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [confirmation, setConfirmation] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
    setError('');
    try {
      await submitForm(values);
      setConfirmation(true);
      actions.resetForm();
    } catch (error) {
      setError(error.message);
      actions.setSubmitting(false);
    }
  };
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik<FormValues>({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchemaContactForm,
    onSubmit,
  });

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
          {errors.name && touched.name && <p className="error">{errors.name}</p>}

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
          {error && <p className="error">{error}</p>}
        </form>
        <div className="contact-img-wrapper">
          <img
            className="contact-img"
            src="/Final_Project/img/casual-life-3d-young-woman-in-headphones-sitting-in-front-of-laptop-and-waving.png"
            alt="3d woman in headphones sitting in front of laptop"
            width={130}
            height={130}
            loading="lazy"
          />
        </div>
        {confirmation && <ConfirmationModal setConfirmation={setConfirmation}></ConfirmationModal>}
      </div>
    </>
  );
};

export default Contact;
