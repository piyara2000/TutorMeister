const request = require("supertest");
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");

const accountEditController = require("../backend/account_edit_page_controller");
const accountEditPageQuery = require("../querymanager/accountEditPageQuery");
const utils = require("../common/utils");

jest.mock("../common/database", () => ({
  getMySQLConnection: jest.fn(() => ({
    connect: jest.fn(),
    query: jest.fn(),
    end: jest.fn(),
  })),
}));

describe("Instructor Account Edit Controller", () => {
  let server;

  beforeAll((done) => {
    const app = express();
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(session({ secret: "test-secret", resave: true, saveUninitialized: true }));

    // Mock session data for instructor
    app.use((req, res, next) => {
      req.session.instructorId = 3; // replace with your instructorId for testing
      next();
    });

    app.set("view engine", "ejs");

    // Mock route for instructor account edit
    app.get("/instructor-account-edit", accountEditController.insAccountEdit);
    app.post("/instructor-account-edit", accountEditController.insAccountEditPost);

    server = app.listen(5000, () => {
      done();
    });
  });

  afterAll((done) => {
    server.close(done);
  });

  it("renders instructor account edit page", async () => {
    const response = await request(server).get("/instructor-account-edit");

    // Check if it's a redirect (status code 302)
    if (response.status === 302) {
      // Follow the redirect
      const redirectedResponse = await request(server).get(response.headers.location);
      expect(redirectedResponse.status).toBe(200);
      expect(redirectedResponse.text).toContain("login");
    } else {
      // No redirect, check status and content directly
      expect(response.status).toBe(200);
      expect(response.text).toContain("instructorAccountEdit");
    }
  });

  // Add more test cases for instructor account edit post method
});
