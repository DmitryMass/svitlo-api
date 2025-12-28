import { Test, TestingModule } from '@nestjs/testing';
import { SvitloService } from './svitlo.service';

describe('SvitloService', () => {
  let service: SvitloService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SvitloService],
    }).compile();

    service = module.get<SvitloService>(SvitloService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
