import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { RunsModule } from './runs/runs.module';

@Module({
  imports: [AuthModule, ConfigModule.forRoot(), RunsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
