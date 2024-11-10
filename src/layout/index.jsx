import Header from "../components/Header/Header";
import Container from "../components/Container/Container";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Container>
                    <Outlet />
                </Container>
            </main>
        </>
    );
};

export default Layout;
