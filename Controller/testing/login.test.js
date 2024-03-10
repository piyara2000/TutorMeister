const loginController = require("../backend/login_controller");
const db = require("../common/database");
const utils = require("../common/utils");

jest.mock("../common/database"); // Mock the database module

describe("Login Controller", () => {
  afterEach(() => {
    jest.restoreAllMocks(); // Restore mocks after each test
  });

  test('health should render "health" template', () => {
    const renderMock = jest.fn();
    const res = { render: renderMock };

    loginController.health({}, res);

    expect(renderMock).toHaveBeenCalledWith("health");
  });

  test('login should render "login" template with no message', () => {
    const renderMock = jest.fn();
    const res = { render: renderMock };

    loginController.login({}, res);

    expect(renderMock).toHaveBeenCalledWith("login", { message: undefined });
  });

  test('loginPost should render "login" template with "Please enter valid credentials" message when no username or password is provided', () => {
    const renderMock = jest.fn();
    const req = { body: {} };
    const res = { render: renderMock };

    loginController.loginPost(req, res);

    expect(renderMock).toHaveBeenCalledWith("login", {
      message: "Please enter valid credentials",
    });
  });

  test('logout should redirect to "/login"', () => {
    const res = { redirect: jest.fn() };

    loginController.logout({}, res);

    expect(res.redirect).toHaveBeenCalledWith("/login");
  });
});
