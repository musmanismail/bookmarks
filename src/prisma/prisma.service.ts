import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://postgres:password@localhost:5432/bookmarks_db?schema=public', //process.env.DATABASE_URL,
        },
      },
    });
  }
}
