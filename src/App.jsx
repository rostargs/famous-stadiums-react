import Container from "./components/Container/Container";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import { content } from "./data";

function App() {
    return (
        <>
            <Header />
            <main>
                <Container>
                    {content.map((item, index) => (
                        <Content {...item} key={index} reversed={++index % 2 === 0} />
                    ))}
                </Container>
            </main>
        </>
    );
}

export default App;
