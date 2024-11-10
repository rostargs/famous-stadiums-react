import { nivaPageContent } from "../data";
import Content from "../components/Content/Content";

const NivaPage = () => {
    return nivaPageContent.map((item, index) => <Content {...item} key={index} reversed={++index % 2 === 0} />);
};

export default NivaPage;
