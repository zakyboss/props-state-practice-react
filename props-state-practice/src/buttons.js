import './index.css';

export default function Buttons({ setVisibleCategory }) {
  return (
    <div className="menu">
      <span
        className="menu-button"
        onClick={() => setVisibleCategory('cars')}
      >
        Cars
      </span>
      <span
        className="menu-button"
        onClick={() => setVisibleCategory('shoes')}
      >
        Shoes
      </span>
      <span
        className="menu-button"
        onClick={() => setVisibleCategory('fruits')}
      >
        Fruits
      </span>
    </div>
  );
}
