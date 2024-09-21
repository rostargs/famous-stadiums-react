import { createPortal } from "react-dom";

const appendBodyPortalElement = (id) => {
    const element = document.createElement("div");
    element.setAttribute("id", id);
    document.body.appendChild(element);
    return element;
};

const Portal = ({ id, children }) => {
    let portalElement = document.getElementById(id);

    if (!portalElement) {
        portalElement = appendBodyPortalElement(id);
    }

    return createPortal(children, portalElement);
};

export default Portal;
