import { render, screen, cleanup } from "@testing-library/react";
import InsetList from "../components/InsetList";

afterEach(() => {
  cleanup();
});

test("should find the a list exist in document and find button inner text ", () => {
  const pokemon = {
    name: "ivysaur",
    url: "https://pokeapi.co/api/v2/pokemon/2/",
  };
  render(<InsetList pokemon={pokemon} />);

  const insetListItem = screen.getByTestId("inset-list-ivysaur");
  expect(insetListItem).toBeInTheDocument();
  const insetListbutton = screen.getByTestId("inset-list-button-ivysaur");
  expect(insetListbutton).toBeInTheDocument();
  expect(insetListbutton).toHaveTextContent("Learn More");
});
