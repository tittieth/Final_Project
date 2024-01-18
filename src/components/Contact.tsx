import { useState } from 'react';

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

  console.log(formValues.name + formValues.email + formValues.message);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <>
      <form>
        <div>
          <label>
            Namn:
            <input type="text" name="name" value={formValues.name} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Mejladress:
            <input type="email" name="email" value={formValues.email} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Meddelande:
            <textarea name="message" value={formValues.message} onChange={handleChange} />
          </label>
        </div>
        <div>
          <button type="submit">Skicka</button>
        </div>
      </form>
    </>
  );
};

export default Contact;
