import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { SvitloService } from './svitlo.service';
import type {
  DsoId,
  PlannedOutagesResponse,
  ProbableOutagesResponse,
} from './svitlo.types';

@Controller('svitlo')
export class SvitloController {
  constructor(private readonly svitloService: SvitloService) {}

  @Get('planned-outages/:dsoId')
  async getPlannedOutages(
    @Param('dsoId', ParseIntPipe) dsoId: number,
  ): Promise<PlannedOutagesResponse> {
    return this.svitloService.getPlannedOutages(dsoId as DsoId);
  }

  @Get('probable-outages/:dsoId')
  async getProbableOutages(
    @Param('dsoId', ParseIntPipe) dsoId: number,
  ): Promise<ProbableOutagesResponse> {
    return this.svitloService.getProbableOutages(dsoId as DsoId);
  }
}
