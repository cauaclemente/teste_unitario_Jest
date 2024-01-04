import React from "react";
import {render, screen} from "@testing-library/react";

import "@testing-library/jest-dom"

import Greeting from "./Greent";

test("Verificar o heading do componente com a prop enviada", () => {
    render(<Greeting name={"João"} />);

    const headingElement = screen.getByRole("heading"); 
    expect(headingElement).toHaveTextContent("Hello, João");
});