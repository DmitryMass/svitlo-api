import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SvitloModule } from './svitlo/svitlo.module';

@Module({
  imports: [SvitloModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
