import { useEffect, useState } from 'react';
import ConfirmationModal from './ConfirmationModal';
import submitForm from '../services/ContactFormService';
import { useFormik } from 'formik';
import { validationSchema } from '../models/ValidationSchema';

export type FormValues = {
  name: string;
  email: string;
  message: string;
};

const onSubmit = () => {
  console.log('form submitted');
};

const Contact = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik<FormValues>({
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

  // const [formValues, setFormValues] = useState<FormValues>({
  //   name: '',
  //   email: '',
  //   message: '',
  // });
  // const [confirmation, setConfirmation] = useState(false);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;
  //   setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   await submitForm(formValues);
  //   console.log('Form submitted:', formValues);
  //   setConfirmation(true);
  //   setFormValues({
  //     name: '',
  //     email: '',
  //     message: '',
  //   });
  // };

  return (
    <div className="contact-wrapper">
      <h1>Kontakt</h1>
      <p>Har du frågor eller funderingar? Skicka oss ett meddelande!</p>
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

        <div>
          <button type="submit">Skicka</button>
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
      {/* {confirmation && <ConfirmationModal setConfirmation={setConfirmation}></ConfirmationModal>} */}
    </div>
  );
};

export default Contact;
