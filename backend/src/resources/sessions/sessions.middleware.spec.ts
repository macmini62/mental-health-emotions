import { SessionsMiddleware } from './sessions.middleware';

describe('SessionsMiddleware', () => {
  it('should be defined', () => {
    expect(new SessionsMiddleware()).toBeDefined();
  });
});
