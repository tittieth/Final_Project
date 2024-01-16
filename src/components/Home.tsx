import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [name, setName] = useState<string>(() => {
    const getFromLs: string | null = localStorage.getItem('name');
    const initialValue = JSON.parse(getFromLs || 'null') || '';
    return initialValue || '';
  });
  console.log(name);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', name);
    localStorage.setItem('name', JSON.stringify(name));
    navigate('/weather');
  };

  return (
    <div className="home-wrapper">
      <h1>
        <span>S</span>uperklädhjälten
      </h1>
      <img className="rain-cloud" src="/weather-icons/shower-rain.png" alt="rain cloud" width={200} height={200} />
      <img
        className="running-boy"
        src="/img/3d-boy-in-superhero-cape-running.png"
        alt="3d boy in superhero cape running"
        width={230}
        height={230}
      />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Skriv in ditt namn:</label>
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          type="text"
          name="name"
          value={name}
          placeholder="Namn.."
          id="name"
        />

        <button type="submit">Start</button>
      </form>
    </div>
  );
};

export default Home;
