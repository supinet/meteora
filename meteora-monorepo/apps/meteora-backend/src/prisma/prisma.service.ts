import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
    extends PrismaClient
    implements OnModuleInit, OnModuleDestroy {

    async onModuleInit() {
        await Promise.resolve(this.$connect);
    }

    async onModuleDestroy() {
        await Promise.resolve(this.$disconnect);
    }

}
