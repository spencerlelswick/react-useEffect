export default function Navigation({ brand }) {
  return (
    <nav className="bg-medium">
      <ul className="split-navigation">
        <li className="split-navigation__item">
          <span href="#">{brand}</span>
        </li>

        <li className="split-navigation__item split-navigation__item--right">
          <span>Other Links</span>
        </li>
      </ul>
    </nav>
  );
}
