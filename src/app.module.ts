import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { RunsModule } from './runs/runs.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [AuthModule, ConfigModule.forRoot(), RunsModule, UploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
