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
        srcSet="/Final_Project/weather-icons/shower-rain-200.png 200w, /Final_Project/weather-icons/shower-rain-250.png 250w"
        sizes="(max-width: 700px) 200px,
         250px"
        alt="rain cloud"
      />
      <img
        className="running-boy"
        src="/Final_Project/img/casual-life-3d-boy-in-superhero-cape-running.png"
        srcSet="/Final_Project/img/casual-life-3d-boy-in-superhero-cape-running-230.png 230w, /Final_Project/img/casual-life-3d-boy-in-superhero-cape-running-300.png 300w"
        sizes="(max-width: 700px) 230px,
         300px"
        alt="3d boy in superhero cape running"
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
