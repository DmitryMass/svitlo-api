import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios, { AxiosError } from 'axios';
import {
  DsoId,
  PlannedOutagesResponse,
  ProbableOutagesResponse,
} from './svitlo.types';

@Injectable()
export class SvitloService {
  private readonly baseURL =
    'https://app.yasno.ua/api/blackout-service/public/shutdowns';
  private readonly regionId = 3; // Дніпро

  async getPlannedOutages(dsoId: DsoId): Promise<PlannedOutagesResponse> {
    try {
      const response = await axios.get<PlannedOutagesResponse>(
        `${this.baseURL}/regions/${this.regionId}/dsos/${dsoId}/planned-outages`,
        {
          timeout: 10000,
        },
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new HttpException(
          {
            message: 'Failed to fetch planned outages',
            error: error.message,
          },
          error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getProbableOutages(dsoId: DsoId): Promise<ProbableOutagesResponse> {
    try {
      const response = await axios.get<ProbableOutagesResponse>(
        `${this.baseURL}/probable-outages`,
        {
          params: {
            regionId: this.regionId,
            dsoId,
          },
          timeout: 10000,
        },
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new HttpException(
          {
            message: 'Failed to fetch probable outages',
            error: error.message,
          },
          error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
