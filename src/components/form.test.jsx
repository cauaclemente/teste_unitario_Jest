import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./form";

test("Verificar se o submit ocorreu", () => {
    const handleSubmit = jest.fn();
    
    render(<Form onSubmit={handleSubmit} />);

  const input = screen.getByTestId("input-text");

  fireEvent.change(input, { target: { value: "algum texto"} });
  
  const form = screen.getByTestId("form");
  fireEvent.submit(form);
  
  const success = screen.getByTestId("success");
  expect(success).toBeInTheDocument();
});
