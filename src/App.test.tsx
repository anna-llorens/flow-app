import { render } from "@testing-library/react";
import App from "./App";
import { mockReactFlow } from "../__mocks__/mockReactFlow";


describe('App', () => {

  beforeAll(() => {
    mockReactFlow();
  });

  test('renders App component without crashing', () => {
    render(<App />);
  });

});