import { getByPlaceholderText, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// test("sum", () => {
//   const { getByText } = render(<App />);
//   expect(getByText("Hello World")).toBeInTheDocument();
// });

describe("App Component", () => {
  it("should render list items ", () => {
    const { getByText } = render(<App />);

    expect(getByText("Diego")).toBeInTheDocument();
    expect(getByText("Rodz")).toBeInTheDocument();
    expect(getByText("Mayk")).toBeInTheDocument();
  });

  it("should be able to add new item to the list", () => {
    const { getByText, debug, getByPlaceholderText } = render(<App />);

    const inputElement = getByPlaceholderText("Novo item");
    const addButton = getByText("Adicionar");

    debug();

    userEvent.type(inputElement, "Novo");
    userEvent.click(addButton);

    debug();

    expect(getByText("Novo")).toBeInTheDocument();
  });
});
