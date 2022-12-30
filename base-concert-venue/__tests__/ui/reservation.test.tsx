import { render, screen } from "@testing-library/react";

import { Reservation } from "@/components/reservations/Reservation";

it("reservation page shows correct number of seats available", async () => {
  render(<Reservation showId={0} submitPurchase={jest.fn()} />);

  const seatCountText = await screen.findByText(/10 seats left/i);
  expect(seatCountText).toBeInTheDocument();
});