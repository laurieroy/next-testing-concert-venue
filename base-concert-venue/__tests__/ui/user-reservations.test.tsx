import { render, screen } from "@testing-library/react";

import { UserReservations } from "@/components/user/UserReservations";

test("when user already has tickets purchased, button displays `Purchase more tickets`", async () => {
  render(<UserReservations userId={0} />);
  const purchaseButton = await screen.findByRole("button", {
    name: /purchase more tickets/i,
  });
  expect(purchaseButton).toBeInTheDocument();
});
