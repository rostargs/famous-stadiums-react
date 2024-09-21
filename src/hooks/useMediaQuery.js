import { useEffect, useState, useCallback } from "react";

export const useMediaQuery = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const getInnerWidth = useCallback(() => {
        setScreenWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        window.addEventListener("resize", getInnerWidth);
        return () => window.removeEventListener("resize", getInnerWidth);
    }, []);

    return screenWidth;
};
