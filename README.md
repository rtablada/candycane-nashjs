## Candycane.js Nash JS Example

This is an example of using Candycane.js in your project.
This application was shown at Nash.js.

It creates a base API with resources at `/nash.js` and `/frameworks`.

To run this project:

```
git clone https://github.com/rtablada/candycane-nashjs
cd candycane-nashjs
npm install
```

Setup the database configuration in `app/config/environment.js`.

This works well with [PostgresApp](postgresapp.com), then you can run

```
createdb store-api
```

Once the database is configured:

```
npm run start
```

And now you should be able to visit:

* http://locahost:3000
* http://locahost:3000/nash.js
* http://locahost:3000/frameworks
