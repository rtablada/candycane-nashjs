## Candycane.js Nash JS Example

This is a deployable API using Heroku.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

This is an example of using Candycane.js in your project.
This application was shown at Nash.js.

It creates a base API with resources at `/nash.js` and `/frameworks`.

To run this project:

```
git clone https://github.com/rtablada/candycane-nashjs
cd candycane-nashjs
npm install
```

Setup the database configuration in `app/config/environment.js` and `knexfile.js`.

This works well with [PostgresApp](postgresapp.com), then you can run the following to create a nashjs database and you won't have to change the config.

```
createdb nashjs
```

Once the database is configured:

```
npm run build
npm run start
```

And now you should be able to visit:

* http://locahost:3000
* http://locahost:3000/nash.js
* http://locahost:3000/frameworks

If you would like to learn more about Candycane.js or help out visit the [documentation](https://github.com/candycanejs/candycane-cli).

* https://github.com/candycanejs/candycane-cli

See the slides: http://slides.com/rtablada/deck-3
