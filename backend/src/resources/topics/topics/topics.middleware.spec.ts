import { TopicsMiddleware } from './topics.middleware';

describe('TopicsMiddleware', () => {
  it('should be defined', () => {
    expect(new TopicsMiddleware()).toBeDefined();
  });
});
