import { render, screen } from "../../../test-utils/testing-library-utils";
import Options from "../Options";
import userEvent from "@testing-library/user-event";

test("displays image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  //find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("displays image for each topping option from server", async () => {
  render(<Options optionType="toppings" />);

  //find images
  const scoopImages = await screen.findAllByRole("img", { name: /topping$/i });
  expect(scoopImages).toHaveLength(3);
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});

test("don't update total if scoops input is invalid", async () => {
  render(<Options optionType="scoops" />);

  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  await userEvent.clear(vanillaInput);
  await userEvent.type(vanillaInput, "-1");

  const scoopsSubtotal = screen.getByText("Scoops total: $0.00");
  expect(scoopsSubtotal).toBeInTheDocument();
});
