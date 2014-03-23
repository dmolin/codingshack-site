# Main Stack for www.codingshack.com

This project is the source tree for the 'coming soon' www.codingshack.com website.
It's still in development. At the moment there isn't that much, only the basic project structure for the front-end (the client/ folder), along with basic project configurations.

When finished, this will be the project structure:

- client/
  containing the front-end code, with the following technologies:
  - Node.js + Grunt as a build tool
  - AngularJS
  - browserify (with/without bower, I still need to define this point)
  - Karma + phantomJS + Protractor for UI and end2end testing

- server/
  for the backend code, with the following technologies:
  - Node.js + Express
  - Passport/OAuth
  - MongoDB (if time available) for storing mutable data (if any)

