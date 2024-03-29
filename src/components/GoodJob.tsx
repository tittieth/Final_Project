const GoodJob = () => {
  const nameFromLs = JSON.parse(localStorage.getItem('name') ?? 'null');
  const name = nameFromLs ? nameFromLs.charAt(0).toUpperCase() + nameFromLs.slice(1) : null;

  return (
    <>
      <div className="goodjob-wrapper">
        <h1>Bra jobbat {name}!</h1>
        <div className="star-wrapper">
          <img
            className="star-one"
            src="/Final_Project/img/casual-life-3d-yellow-star.png"
            alt="casual-life-3d-yellow-star.png"
            width={50}
            height={50}
            loading="lazy"
          />
          <img
            className="star-two"
            src="/Final_Project//img/casual-life-3d-yellow-star.png"
            alt="casual-life-3d-yellow-star.png"
            width={50}
            height={50}
            loading="lazy"
          />
          <img
            className="star-three"
            src="/Final_Project/img/casual-life-3d-yellow-star.png"
            alt="casual-life-3d-yellow-star.png"
            width={50}
            height={50}
            loading="lazy"
          />
          <img
            className="star-four"
            src="/Final_Project/img/casual-life-3d-yellow-star.png"
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
