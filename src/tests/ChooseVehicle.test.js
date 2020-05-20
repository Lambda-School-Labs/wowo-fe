import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import ChooseVehicle from "../components/ClientDashboard/FindWash/WashSteps/ChooseVehicle";
//imports for mocking redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import initialState from "../reducers/initialState";
import rootReducer from "../reducers/rootReducer";
// import Address from "./signup-steps/Address";
// jest.mock("./signup-steps/Address");

function renderWithRedux(
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
  };
}

test("choose next and prev vehicles", async () => {
  const { getByTestId, getByText, debug } = renderWithRedux(
    <Router>
      <ChooseVehicle prev={jest.fn()} next={jest.fn()} />
    </Router>
  );
  expect(getByText(/bmw/i)).toBeInTheDocument();
  const back = getByTestId(/back/i);
  await userEvent.click(back);
  const next = getByTestId(/nextbtn/i);
  await userEvent.click(next);
});

test("select vehicle model ", async () => {
  const { getByText, getByTestId, debug } = renderWithRedux(
    <Router>
      <ChooseVehicle vehicleOnClick={jest.fn()} />
    </Router>
  );
  const car1 = getByText(/bmw/i);
  await userEvent.click(car1);
  const car2 = getByTestId(/car2/i);
  await userEvent.click(car2);
  expect(car2).toBeInTheDocument();
});
