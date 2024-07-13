import { render } from "@testing-library/react";
import App from "./App";
import { mockReactFlow } from "./tests/__mocks__/mockReactFlow";

describe("App", () => {
  beforeAll(() => {
    mockReactFlow();
  });

  test("Renders App component without crashing", () => {
    render(<App />);
  });
});