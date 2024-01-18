import axios from 'axios';
import { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    message: '',
  });
  const [confirmation, setConfirmation] = useState(false);

  console.log(formValues.name + formValues.email + formValues.message);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const submitForm = async (formData: FormValues) => {
    try {
      const response = await axios.post('https://formsubmit.co/ajax/tittie.thomasson@medieinstitutet.se', {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
      return response;
    } catch (error) {
      console.error(error);
      throw new Error('Något gick fel. Försök igen');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm(formValues);
    console.log('Form submitted:', formValues);
    setFormValues({
      name: '',
      email: '',
      message: '',
    });
    setConfirmation(true);
  };

  return (
    <div className="contact-wrapper">
      <h1>Kontakt</h1>
      <p>Har du frågor eller funderingar? Skicka oss ett meddelande!</p>
      <form onSubmit={handleSubmit}>
        <label className="input-wrapper">
          Namn:
          <input type="text" name="name" value={formValues.name} onChange={handleChange} />
        </label>

        <label className="input-wrapper">
          Mejladress:
          <input type="email" name="email" value={formValues.email} onChange={handleChange} />
        </label>

        <label className="input-wrapper">
          Meddelande:
          <textarea name="message" value={formValues.message} onChange={handleChange} />
        </label>

        <div>
          <button type="submit">Skicka</button>
        </div>
      </form>
      {confirmation && <ConfirmationModal setConfirmation={setConfirmation}></ConfirmationModal>}
    </div>
  );
};

export default Contact;
