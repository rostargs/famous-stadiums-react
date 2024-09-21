import "./NavItem.scss";

const NavItem = ({ name, sectionRef, ...props }) => {
    return (
        <li key={name} className="nav-item" {...props}>
            <a href={`#${sectionRef}`}>{name}</a>
        </li>
    );
};

export default NavItem;
