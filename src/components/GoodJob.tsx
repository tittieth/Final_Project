const GoodJob = () => {
  const name = JSON.parse(localStorage.getItem('name') || '');

  console.log(name);

  return (
    <div>
      <h1>Bra jobbat {name}!</h1>
      <div>
        <img
          src="/public/img/casual-life-3d-yellow-star.png"
          alt="casual-life-3d-yellow-star.png"
          width={50}
          height={50}
        />
        <img
          src="/public/img/casual-life-3d-yellow-star.png"
          alt="casual-life-3d-yellow-star.png"
          width={50}
          height={50}
        />
        <img
          src="/public/img/casual-life-3d-yellow-star.png"
          alt="casual-life-3d-yellow-star.png"
          width={50}
          height={50}
        />
        <img
          src="/public/img/casual-life-3d-yellow-star.png"
          alt="casual-life-3d-yellow-star.png"
          width={50}
          height={50}
        />
      </div>
      <p>Nu är du redo att gå ut! Ha så kul!</p>
    </div>
  );
};

export default GoodJob;
