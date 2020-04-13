const functions = require('firebase-functions')
const admin = require("firebase-admin");
const serviceAccount = require("./raufoon-projects-firebase-adminsdk-mqker-1b5d6bcea7.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://raufoon-projects.firebaseio.com"
});

const express = require('express')
const app = express()

const {fetchAppList, fetchAppSource} = require('./src/src-fetcher')

app.get('/project/:id', fetchAppSource)
app.get('/projects', fetchAppList)


exports.api = functions.https.onRequest(app)