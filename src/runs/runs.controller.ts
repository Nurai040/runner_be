import {
  Controller,
  Post,
  Get,
  Body,
  Req,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { RunsService } from './runs.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('runs')
@UseGuards(AuthGuard('jwt'))
export class RunsController {
  constructor(private readonly runsService: RunsService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(FileInterceptor('photo'))
  createRun(
    @UploadedFile() file: Express.Multer.File,
    @Body() body,
    @Req() req,
  ) {
    const userId = req.user.userId;
    const photoUrl = file ? `/uploads/${file.filename}` : null;

    return this.runsService.createRun({ ...body, photoUrl }, userId);
  }
  @Get()
  getRuns(@Req() req: Request) {
    const user = (req as any).user.userId;
    return this.runsService.getRuns(user.userId);
  }
}
