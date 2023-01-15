# Popular Concert Venue

This course shows how to test a sample Next app. Since the purpose is to show how to test the different types of files, testing is not complete. 

The app being tested is a concert venue app, where the user can see what upcoming shows have tickets available, see band bios, and purchase tickets.

Testing:

Static page: home.test.tsx

SSG: band.test.tsx

MSW: Reservations component (what is displayed when user clicks on tickets)

Routes: Using cypress against the prod version, and the testing-library way 


### An app to support the Udemy course [Testing Next.js Apps](https://www.udemy.com/course/nextjs-testing/)

## Installation

1. Run `npm install`
2. Run `cp .env.development.local_template .env.development.local`
3. Run `cp .env.test.local_template .env.test.local`
4. Run `cp .env.local_template .env.local`
5. In _.env.local_:

- add long, hard-to-guess strings as the values for `NEXTAUTH_SECRET` and `REVALIDATION_SECRET`

  - command to generate a random string: `openssl rand -base64 32`

  - add needed paths and keys

## Running the App

Run `npm run dev`. The app will be found at [http://localhost:3000]

## To run [cypress](cypress.io)
- I am initially building the tests in v9, but will run the migration later. (To use cypress < v12, install @testing-library/cypress@8 version.)

- App should be running in your browser
`npm start`

- Use the :test to run against the test db

- Add cypress to the path (e.g., on a default mac running catalina,  ~/.zprofile)

(first time)
In another terminal:
`npm run cypress`

`cypress open`
- Note: This might take 2 attempts


- Build the app in the test environment (resetting the db), start cypress and when ready run tests, then open cypress

`npm run cypress:build`

and for subsequent runs:

`npm cypress:open`

This opens a cypress console. On the right is a button to select the browser from a dropdown list.

The available integration tests ar shown in a list, you can click on an individual test to run it. This opens a runner window.




