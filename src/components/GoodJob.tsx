import Navigation from './Navigation';

const GoodJob = () => {
  const name = JSON.parse(localStorage.getItem('name') || '');

  console.log(name);

  return (
    <>
      <div className="goodjob-wrapper">
        <h1>Bra jobbat {name}!</h1>
        <div className="star-wrapper">
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
      <Navigation></Navigation>
    </>
  );
};

export default GoodJob;
