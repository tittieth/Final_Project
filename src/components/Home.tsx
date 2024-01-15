import { ChangeEvent, useState } from 'react';

const Home = () => {
  const [name, setName] = useState<string>('');
  console.log(name);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', name);
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
