# Popular Concert Venue

This course shows how to test a sample Next app. Since the purpose is to show how to test the different types of files, testing is not complete. 

The app being tested is a concert venue app, where the user can see what upcoming shows have tickets available, see band bios, and purchase tickets.

Testing:

Static page: home.test.tsx

SSG: band.test.tsx

MSW: Reservations component (what is displayed when user clicks on tickets)
### An app to support the Udemy course [Testing Next.js Apps](https://www.udemy.com/course/nextjs-testing/)

## Installation

1. Run `npm install`
2. Run `cp .env.development.local_template .env.development.local`
3. Run `cp .env.test.local_template .env.test.local`
4. Run `cp .env.local_template .env.local`
5. In _.env.local_:

- add long, hard-to-guess strings as the values for `NEXTAUTH_SECRET` and `REVALIDATION_SECRET`

  - command to generate a random string: `openssl rand -base64 32`

## Running the App

Run `npm run dev`. The app will be found at [http://localhost:3000]
