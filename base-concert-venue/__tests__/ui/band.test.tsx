import { render, screen } from "@testing-library/react";

import { readFakeData } from "@/__tests__/__mocks__/fakeData";
import BandComponent from "@/pages/bands/[bandId]";

it("band component displays correct band information", async () => {
  const { fakeBands } = await readFakeData();
  render(<BandComponent band={fakeBands[0]} error={null} />);

  const heading = screen.getByRole("heading", {
    name: /the wandering bunnies/i,
  });
  expect(heading).toBeInTheDocument();
  // real app would have more tests, img, descripton, link, etc
});

it("band component displays error", () => {
  render(<BandComponent band={null} error="NOTHING TO SEE HERE" />);

  const error = screen.getByRole("heading", {
    error: "NOTHING TO SEE HERE",
    // error: /Could not retrieve band data:/i,
  });
  expect(error).toBeInTheDocument();
});
