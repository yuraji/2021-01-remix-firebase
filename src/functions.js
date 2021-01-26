const express = require("express");
const morgan = require("morgan");
const { createRequestHandler } = require("@remix-run/express");

const admin = require("firebase-admin");
const functions = require("firebase-functions");

const appServer = require("../server");

admin.initializeApp();

// HTTP Cloud Functions
const app = functions.https.onRequest(appServer);

exports.app = app;
