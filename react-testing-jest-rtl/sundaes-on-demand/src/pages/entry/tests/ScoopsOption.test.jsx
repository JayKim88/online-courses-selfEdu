import { render, screen } from "@testing-library/react";
import ScoopOption from "../ScoopOption";
import userEvent from "@testing-library/user-event";

test.only("indicate if scoop count is not-int or out of range", async () => {
  render(<ScoopOption name="" imagePath="" updateItemCount={jest.fn()} />);

  const vanillaInput = screen.getByRole("spinbutton");

  await userEvent.clear(vanillaInput);
  await userEvent.type(vanillaInput, "-1");
  expect(vanillaInput).toHaveClass("is-invalid");

  await userEvent.clear(vanillaInput);
  await userEvent.type(vanillaInput, "2.5");
  expect(vanillaInput).toHaveClass("is-invalid");

  await userEvent.clear(vanillaInput);
  await userEvent.type(vanillaInput, "11");
  expect(vanillaInput).toHaveClass("is-invalid");

  await userEvent.clear(vanillaInput);
  await userEvent.type(vanillaInput, "3");
  expect(vanillaInput).not.toHaveClass("is-invalid");
});
