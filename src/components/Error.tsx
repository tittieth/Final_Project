import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/weather');
  };

  return (
    <div className="error-wrapper">
      <h1>Vilse?</h1>
      <div>
        <img
          src="/Final_Project/img/boy-with-umbrella.png"
          alt="3d boy walking with an umbrella"
          width={150}
          height={250}
          loading="lazy"
        />
      </div>
      <div>
        <p>
          Vi kunde tyvärr inte hitta sidan du försökte nå. Det kan bero på att sidan har flyttats eller att vi har tagit
          bort den.
        </p>
        <button onClick={handleClick}>Tillbaka till vädersidan</button>
      </div>
    </div>
  );
};

export default Error;
