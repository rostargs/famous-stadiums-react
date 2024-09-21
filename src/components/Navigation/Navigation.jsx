import "./Navigation.scss";
import { navigation } from "../../data";
import Portal from "../Portal/Portal";
import Container from "../Container/Container";
import NavItem from "../NavList/NavItem";

const Navigation = ({ isVisible, setMenu }) => {
    return (
        <Portal id="nav-portal">
            <div className={`navigation ${isVisible ? "navigation--visible" : ""}`}>
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
        </Portal>
    );
};

export default Navigation;
