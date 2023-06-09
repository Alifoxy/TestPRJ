import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { BearerStrategy } from './bearer.strategy';
import { UsersService } from '../users/users.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        UsersModule,
        PassportModule.register({ defaultStrategy: 'bearer' }),
        JwtModule.registerAsync({
            useFactory: async () => ({
                secret: 'Secret',
                signOptions: {
                    expiresIn: '24h',
                },
            }),
        }),
    ],
    providers: [AuthService, BearerStrategy, UsersService],
    exports: [AuthService],
})
export class AuthModule {}