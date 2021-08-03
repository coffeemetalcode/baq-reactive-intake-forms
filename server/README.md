# BAQ Reactive Intake Forms
## Server

### Dependencies
`npm install -g nodemon`
### Run
`npm run server`

### Routes

`POST /signup`

User creates a new account by providing a username and password. Creating an account allows users to save address information.

`GET /auth`

User gives username and password to authenticate to the app

`GET /users/:id`

Get the logged in user, including any saved address details

TODO: Make available the user's order history

### Longarm Form

`GET /longarm/options`

Returns lists for pantographs, thread colors, batting choices, and backing choices in an object

`POST /longarm/intake`

Posts the completed longarm intake form. This action will generate an email to the user and to Bon Air Quilt Co.