import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

import { CreateUserDto } from './dto/user.dto';
import { PrismaService } from '../core/orm/prisma.service';

@Injectable()
export class UsersService {
    constructor(private readonly prismaService: PrismaService) {}

    async createUser(userData: CreateUserDto ): Promise<User> {
        return this.prismaService.user.create({
            data: {
                name: userData.name,
                city: userData.city,
                age: userData.age,
                email: userData.email,
                premium: userData.premium,
            },
        });
    }

    async getUserList(): Promise<User[]> {
        return this.prismaService.user.findMany({
            orderBy: {
                name: 'asc',
            },
            take: 5,
        });
    }

    async getUserById(userId: string) {
        return this.prismaService.user.findFirst({
            where: { id: Number(userId) },
            select: {
                id: true,
                name: true,
                city: true,
                age: true,
            },
        });
    }

    async deleteUser(id: string) {
    }

    async findUserByEmail(userEmail: string) {
        return this.prismaService.user.findFirst({
            where: { email: userEmail },
        });
    }
}
