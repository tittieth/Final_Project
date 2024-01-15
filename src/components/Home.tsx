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
    <div>
      <h1>Superklädhjälten</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            type="text"
            name="name"
            value={name}
          />
        </label>
        <button type="submit">Start</button>
      </form>
    </div>
  );
};

export default Home;
