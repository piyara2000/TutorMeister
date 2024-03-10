const supertest = require('supertest');
const app = require('../app'); 

// Mocking the database connection and encryption functions
jest.mock('../common/database');
jest.mock('../common/utils');

const db = require('../common/database');
const utils = require('../common/utils');
const signUpQuery = require('../querymanager/signUpQuery');
const signUpController = require('../backend/signup_controller');

describe('Instructor SignUp Controller', () => {
  test('insSignUpPost should redirect to "/login" on successful signup', async () => {
    // Mocking the database query results
    db.getMySQLConnection.mockReturnValueOnce({
      connect: jest.fn(),
      query: jest.fn().mockImplementationOnce((query, values, callback) => {
        callback(null, []); // Mocking user does not exist
      }).mockImplementationOnce((query, values, callback) => {
        callback(null, { insertId: 1 }); // Mocking successful user insertion
      }),
      end: jest.fn(),
    });

    utils.getEncrptedValue.mockReturnValueOnce('mockedEncryptedPassword');

    const response = await supertest(app)
      .post('/instructor-register')
      .send({
        firstname: 'John1',
        lastname: 'Doe',
        username: 'john_doe1',
        country: 'USA',
        email: 'john.doe1@example.com',
        password: 'password1234',
      });

    expect(response.status).toBe(302);
    expect(response.header.location).toBe('/login');
  });

});

describe('Student SignUp Controller', () => {
    test('stuSignUpPost should redirect to "/login" on successful signup', async () => {
      // Mocking the database query results
      db.getMySQLConnection.mockReturnValueOnce({
        connect: jest.fn(),
        query: jest.fn().mockImplementationOnce((query, values, callback) => {
          callback(null, []); // Mocking user does not exist
        }).mockImplementationOnce((query, values, callback) => {
          callback(null, { insertId: 1 }); // Mocking successful user insertion
        }),
        end: jest.fn(),
      });
  
      utils.getEncrptedValue.mockReturnValueOnce('mockedEncryptedPassword');
  
      const response = await supertest(app)
        .post('/student-register')
        .send({
          stufirstname: 'Jane',
          stulastname: 'Doe',
          stuusername: 'jane_doe',
          stucountry: 'Canada',
          stuemail: 'jane.doe@example.com',
          stupassword: 'securepass456',
          eduQual: 'Bachelor',
          learningStyle: 'Visual',
          learningPace: 'Medium',
          isGroup: false,
          learningMode: 'Online',
          additionalText: 'Some additional information.',
        });
  
      expect(response.status).toBe(302);
      expect(response.header.location).toBe('/login');
    });
  
  });