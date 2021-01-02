import React from "react";
import TitleComponent from "../components/TitleComponent";

export const withTitle = (component, title) => (
    <>
        <TitleComponent title={title} />
        {component}
    </>
);

export const titleWithEnding = (title) => `${title} - Okcerk.com`;