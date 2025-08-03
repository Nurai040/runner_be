import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class RunsService {
  async createRun(body, userId: number) {
    const { distance, time, location, photoUrl } = body;

    return prisma.run.create({
      data: {
        distance: Number(distance),
        time: Number(time),
        location,
        photoUrl: photoUrl || null,
        userId,
      },
    });
  }

  async getRuns(userId: number) {
    return prisma.run.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }
}
