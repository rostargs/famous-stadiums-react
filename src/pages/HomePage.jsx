import { homePageContent } from "../data";
import Content from "../components/Content/Content";

const HomePage = () => {
    return homePageContent.map((item, index) => <Content {...item} key={index} reversed={++index % 2 === 0} />);
};

export default HomePage;
