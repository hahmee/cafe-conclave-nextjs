import CafeItem from './cafe-item';
import classes from './cafes-grid.module.css';

export default function CafesGrid({ cafes }) {
  return (
    <ul className={classes.cafes}>
      {cafes.map((cafe) => (
        <li key={cafe.id}>
          <CafeItem {...cafe} />
        </li>
      ))}
    </ul>
  );
}
