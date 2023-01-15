import { filenames, writeJSONToFile } from "@/lib/db/db-utils";

import { readFakeData } from "../../fakeData";

export const resetDb = async () => {
  // failsafe against resetting prod db

  const safeToReset = process.env.NODE_ENV === "test" || process.env.CYPRESS;
  if (!safeToReset) {
    console.log(
      "WARNING: database reset unavailable outside test environment!"
    );

    return;
  }
  const { fakeShows, fakeBands, fakeUsers, fakeReservations } =
    await readFakeData();

  // overwrite fake data
  await Promise.all([
    writeJSONToFile(filenames.bands, fakeBands),
    writeJSONToFile(filenames.shows, fakeShows),
    writeJSONToFile(filenames.reservations, fakeReservations),
    writeJSONToFile(filenames.users, fakeUsers),
  ]);
};
