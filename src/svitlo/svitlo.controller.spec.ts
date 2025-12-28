import { Test, TestingModule } from '@nestjs/testing';
import { SvitloController } from './svitlo.controller';

describe('SvitloController', () => {
  let controller: SvitloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SvitloController],
    }).compile();

    controller = module.get<SvitloController>(SvitloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
