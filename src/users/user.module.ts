import { Module } from '@nestjs/common';
import { PrismaService } from '../core/orm/prisma.service';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';
import {PrismaModule} from "../core/orm/prisma.module";

@Module({
    imports: [PrismaModule],
    controllers: [UsersController],
    providers: [PrismaService, UsersService],
})
export class UsersModule {}