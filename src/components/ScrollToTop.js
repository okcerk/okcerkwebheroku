import { useState, useEffect } from "react";

const ScrollToTop = (props) => {
    const [prevLocation, setPrevLocation] = useState(props.location);
    useEffect(() => {
        if (props.location !== prevLocation) {
            window.scrollTo(0, 0);
            setPrevLocation(props.location);
        }
    }, [props.location]);

    return props.children;
};

export default ScrollToTop;