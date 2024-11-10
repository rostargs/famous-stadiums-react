import { attributesPageContent } from "../data";
import Content from "../components/Content/Content";

const AttributesPage = () => {
    return attributesPageContent.map((item, index) => <Content {...item} key={index} reversed={++index % 2 === 0} />);
};

export default AttributesPage;
