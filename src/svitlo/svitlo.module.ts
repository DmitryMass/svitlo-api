import { Module } from '@nestjs/common';
import { SvitloController } from './svitlo.controller';
import { SvitloService } from './svitlo.service';

@Module({
  controllers: [SvitloController],
  providers: [SvitloService]
})
export class SvitloModule {}
