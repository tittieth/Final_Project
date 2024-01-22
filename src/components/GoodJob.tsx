const GoodJob = () => {
  const name = JSON.parse(localStorage.getItem('name') || '');

  console.log(name);

  return (
    <div>
      <h1>Bra jobbat {name}</h1>
    </div>
  );
};

export default GoodJob;
