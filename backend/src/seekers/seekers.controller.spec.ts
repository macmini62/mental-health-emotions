import { Test, TestingModule } from '@nestjs/testing';
import { SeekersController } from './seekers.controller';

describe('SeekersController', () => {
  let controller: SeekersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeekersController],
    }).compile();

    controller = module.get<SeekersController>(SeekersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
