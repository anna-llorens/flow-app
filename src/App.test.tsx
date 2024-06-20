import { render } from "@testing-library/react";
import App from "./App";
import { mockReactFlow } from "./test";

describe('App', () => {

  beforeAll(() => {
    mockReactFlow();
  });

  test('renders App component without crashing', () => {
    render(<App />);
  });

});