/**
 * Acts as a mock version of axios since it is in __mocks__ folder
 * Verify file name to axios for manual mock to work
 */

export default {
  get: jest.fn().mockResolvedValue({
    data: {}
  })
};
