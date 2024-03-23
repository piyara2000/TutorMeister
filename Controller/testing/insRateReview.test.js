const controller = require('./controller');
const db = require('../common/database');
const insRateReviewQuery = require('../querymanager/insRateReviewQuery');

jest.mock('../common/database');

describe('insRateReview', () => {
  let req, res;

  beforeEach(() => {
    req = {
      session: {
        instructorId: 'instructor_id',
        userid: 'student_id'
      }
    };
    res = {
      redirect: jest.fn(),
      render: jest.fn()
    };
  });

  test('redirects to login if instructorId is not in session', () => {
    req.session.instructorId = undefined;

    controller.insRateReview(req, res);

    expect(res.redirect).toHaveBeenCalledWith('/login');
  });

  test('renders insRateReview template with student data', () => {
    const mockConnection = {
      query: jest.fn().mockImplementation((query, params, callback) => {
        callback(null, [{ firstname: 'John', lastname: 'Doe', eduLevel: 'Grade 10' }]);
      }),
      end: jest.fn()
    };

    db.getMySQLConnection.mockReturnValueOnce(mockConnection);

    controller.insRateReview(req, res);

    expect(db.getMySQLConnection).toHaveBeenCalled();
    expect(mockConnection.query).toHaveBeenCalledWith(insRateReviewQuery.GET_STUDENT_DATA, ['student_id'], expect.any(Function));
    expect(res.render).toHaveBeenCalledWith('insRateReview', {
      dbRecordList: [{ Name: 'John Doe', Subject: 'Grade 10' }]
    });
  });
});

// You can write similar tests for insRateReviewPost method as well
