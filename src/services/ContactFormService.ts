import axios from 'axios';
import { FormValues } from '../components/Contact';

const submitForm = async (formData: FormValues) => {
  try {
    const response = await axios.post('https://formsubmit.co/ajax/tittie.thomasson@medieinstitutet.se', {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });

    return response;
  } catch (error) {
    throw new Error('Något gick fel. Försök igen');
  }
};

export default submitForm;
