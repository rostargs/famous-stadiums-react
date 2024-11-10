import "./Navigation.scss";
import { navigation } from "../../data";
import Container from "../Container/Container";
import NavItem from "../NavList/NavItem";

const Navigation = ({ isVisible, setMenu }) => {
    return (
        <div className={`navigation ${isVisible && "navigation--visible"}`}>
            <Container>
                <div className="navigation__content">
                    <ul>
                        {navigation.map((item, index) => (
                            <NavItem {...item} key={index} onClick={() => setMenu(false)} />
                        ))}
                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default Navigation;
