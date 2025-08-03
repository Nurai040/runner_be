import { Controller, Post, Get, Body, Req, UseGuards } from '@nestjs/common';
import { RunsService } from './runs.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('runs')
@UseGuards(AuthGuard('jwt'))
export class RunsController {
  constructor(private readonly runsService: RunsService) {}

  @Post()
  createRun(@Body() body, @Req() req: Request) {
    return this.runsService.createRun(body, (req as any).user.userId);
  }

  @Get()
  getRuns(@Req() req: Request) {
    const user = (req as any).user.userId;
    return this.runsService.getRuns(user.userId);
  }
}
