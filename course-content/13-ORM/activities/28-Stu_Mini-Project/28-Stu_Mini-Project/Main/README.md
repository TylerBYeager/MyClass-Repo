# Deployment

In this activity we will deploy the Mini Project application to Heroku with MySQL provisioning.

## Instructions

* To deploy the Mini Project application to Heroku make sure to perform the following:

  * Initialize the project folder as a git repo.

  * Create a Heroku app for the Mini Project application.

  * Add a MySQL Addon for the Mini Project Heroku app.

  * Add and commit your changes before pushing up to Heroku.

### Hints

* If your deployment fails, run `heroku logs` while in the project directory. This should print all of the logs produced from the failed deployment. Usually the issue can be found at the start of any errors.

# Deploying a MySQL App on Heroku

## Instructions
1. With Terminal / Git Bash, navigate to your app's directory.
2. Make sure your directory is `git tracked`, if it isn't run this command: `git init`
3. Make sure you have created a Heroku app and linked your repository to it.  If you don't, run this command: `heroku create` in your app's directory.
4. Make sure your database (DB) is provisioned on Heroku. If it isn't run:
    - **MySQL:** `heroku addons:create jawsdb`
5. Update "scripts" to the following in the `package.json` file:
```javascript
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "if-env NODE_ENV=production && npm run start:prod || npm run start:dev",
    "start:prod": "node server.js",
    "start:dev": "nodemon server.js"
  },
  ```
6. Make sure you have this dependency installed: `if-env`
7. Make sure you have this dependency installed as a development dependency: `nodemon`
```shell
npm i --save-dev nodemon
```
8. `git add .`
9. `git commit -m "some meaningful commit message"`
10. `git push heroku master`