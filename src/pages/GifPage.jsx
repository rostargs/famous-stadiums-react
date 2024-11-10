import { gifPageContent } from "../data";
import Content from "../components/Content/Content";

const GifPage = () => {
    return gifPageContent.map((item, index) => <Content {...item} key={index} reversed={++index % 2 === 0} />);
};

export default GifPage;
