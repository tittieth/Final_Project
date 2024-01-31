const GoodJob = () => {
  const nameFromLs = localStorage.getItem('name') || '';
  const name = JSON.parse(nameFromLs);

  console.log(name);

  return (
    <>
      <div className="goodjob-wrapper">
        <h1>Bra jobbat {name}!</h1>
        <div className="star-wrapper">
          <img
            className="star-one"
            src="/img/casual-life-3d-yellow-star.png"
            alt="casual-life-3d-yellow-star.png"
            width={50}
            height={50}
          />
          <img
            className="star-two"
            src="/img/casual-life-3d-yellow-star.png"
            alt="casual-life-3d-yellow-star.png"
            width={50}
            height={50}
            loading="lazy"
          />
          <img
            className="star-three"
            src="img/casual-life-3d-yellow-star.png"
            alt="casual-life-3d-yellow-star.png"
            width={50}
            height={50}
            loading="lazy"
          />
          <img
            className="star-four"
            src="/img/casual-life-3d-yellow-star.png"
            alt="casual-life-3d-yellow-star.png"
            width={50}
            height={50}
            loading="lazy"
          />
        </div>
        <p>Nu är du redo att gå ut! Ha så kul!</p>
      </div>
    </>
  );
};

export default GoodJob;
