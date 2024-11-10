import { Link } from "react-router-dom";
import "./NavItem.scss";

const NavItem = ({ name, path, ...props }) => {
    return (
        <li key={name} className="nav-item" {...props}>
            <Link to={path} onClick={() => window.scrollTo({ top: 0 })}>
                {name}
            </Link>
        </li>
    );
};

export default NavItem;
