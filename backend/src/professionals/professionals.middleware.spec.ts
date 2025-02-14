import { ProfessionalsMiddleware } from './professionals.middleware';

describe('ProfessionalsMiddleware', () => {
  it('should be defined', () => {
    expect(new ProfessionalsMiddleware()).toBeDefined();
  });
});
