import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { validationSchemaName } from '../models/ValidationSchema';

type FormValues = {
  name: string;
};

const Home = () => {
  const navigate = useNavigate();

  const getFromLs: string | null = localStorage.getItem('name');
  const initialValue = JSON.parse(getFromLs || 'null') || '';

  const onSubmit = async (values: FormValues) => {
    localStorage.setItem('name', JSON.stringify(values.name));
    navigate('/weather');
  };

  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik<FormValues>({
    initialValues: {
      name: initialValue,
    },
    validationSchema: validationSchemaName,
    onSubmit,
  });

  return (
    <div className="home-wrapper">
      <h1>
        <span>S</span>uperklädhjälten
      </h1>
      <img
        className="rain-cloud"
        src="/Final_Project/weather-icons/shower-rain.png"
        alt="rain cloud"
        width={200}
        height={200}
      />
      <img
        className="running-boy"
        src="/Final_Project/img/3d-boy-in-superhero-cape-running.png"
        alt="3d boy in superhero cape running"
        width={230}
        height={230}
        loading="lazy"
      />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Skriv in ditt namn:</label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          type="text"
          name="name"
          placeholder="Namn.."
          id="name"
          className={touched.name && errors.name ? 'input-error' : ''}
        />
        {touched.name && errors.name && <div className="error">{errors.name}</div>}

        <button type="submit" disabled={isSubmitting}>
          Start
        </button>
      </form>
    </div>
  );
};

export default Home;
