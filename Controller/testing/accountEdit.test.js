const accountEditController = require("../backend/account_edit_page_controller");
const accountEditPageQuery = require("../querymanager/accountEditPageQuery");
const utils = require("../common/utils");
const { validationResult } = require("express-validator");

jest.mock("../common/database"); // Mock the database module
jest.mock("express-validator"); // Mock the express-validator module

describe("Account Edit Controller", () => {
  afterEach(() => {
    jest.restoreAllMocks(); // Restore mocks after each test
  });

  test('insAccountEdit should render "instructorAccountEdit" template', () => {
    const renderMock = jest.fn();
    const req = { session: { instructorId: 3 } };
    const res = { render: renderMock };

    accountEditController.insAccountEdit(req, res);

    expect(renderMock).toHaveBeenCalledWith("instructorAccountEdit", { message: "" });
  });

  test('insAccountEdit should redirect to "/login" when no instructorId in session', () => {
    const redirectMock = jest.fn();
    const req = { session: {} };
    const res = { redirect: redirectMock };

    accountEditController.insAccountEdit(req, res);

    expect(redirectMock).toHaveBeenCalledWith("/login");
  });

  test('insAccountEditPost should redirect to "/login" when no instructorId in session', () => {
    const redirectMock = jest.fn();
    const req = { session: {} };
    const res = { redirect: redirectMock };

    accountEditController.insAccountEditPost(req, res);

    expect(redirectMock).toHaveBeenCalledWith("/login");
  });

  test('stuAccountEdit should render "studentAccountEdit" template', () => {
    const renderMock = jest.fn();
    const req = { session: { studentId: 4 } };
    const res = { render: renderMock };
  
    accountEditController.stuAccountEdit(req, res);
  
    expect(renderMock).toHaveBeenCalledWith("studentAccountEdit", { message: "" });
  });
  
  test('stuAccountEdit should redirect to "/login" when no studentId in session', () => {
    const redirectMock = jest.fn();
    const req = { session: {} };
    const res = { redirect: redirectMock };
  
    accountEditController.stuAccountEdit(req, res);
  
    expect(redirectMock).toHaveBeenCalledWith("/login");
  });
  
  test('stuAccountEditPost should redirect to "/login" when no studentId in session', () => {
    const redirectMock = jest.fn();
    const req = { session: {} };
    const res = { redirect: redirectMock };
  
    accountEditController.stuAccountEditPost(req, res);
  
    expect(redirectMock).toHaveBeenCalledWith("/login");
  });
  
  test('stuAccountEditPost should render "studentAccountEdit" template with validation message', () => {
    const renderMock = jest.fn();
    const invalidData = {
      username: "", 
      emailAddress: "invalid-email",
      password: "short", 
    };
    const req = { session: { studentId: 4 }, body: invalidData };
    const res = { render: renderMock };
    validationResult.mockReturnValueOnce({ isEmpty: () => false, array: () => ["validation error"] });
  
    accountEditController.stuAccountEditPost(req, res);
  
    expect(validationResult).toHaveBeenCalledWith(req);
    expect(renderMock).toHaveBeenCalledWith("studentAccountEdit", {
      message: "",
      userDetails: "",
      validationMessage: ["validation error"],
    });
  });

});
