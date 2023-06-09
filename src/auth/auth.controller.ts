import {
    Body,
    Controller,
    HttpStatus,
    Post,
    Res,
} from '@nestjs/common';
import { AuthService} from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from '../users/user.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private userService: UsersService,
    ) {}

    @Post('login')
    async login(@Res() res: any, @Body() body: LoginDto) {
        if (!body.email && !body.password) {
            return res
                .status(HttpStatus.FORBIDDEN)
                .json({ message: 'Error.Check_request_params' });
        }
        const findUser = await this.userService.findUserByEmail(body.email);
        if (!findUser) {
            return res
                .status(HttpStatus.UNAUTHORIZED)
                .json({ message: 'Email or password is incorrect' });
        }
        if (await this.authService.compareHash(body.password, findUser.password)) {
            const token = await this.authService.singIn(findUser.id.toString());
            return res.status(HttpStatus.OK).json({ token });
        }
        return res
            .status(HttpStatus.UNAUTHORIZED)
            .json({ message: 'Email or password is incorrect' });
    }

    @Post('register')
    async registerUser(@Res() res: any, @Body() body: RegisterDto){
        let findUser;
        try {
            findUser = await this.userService.findUserByEmail(body.email.trim());
        } catch (err) {
            console.log(err);
        }
        if (findUser) {
            return res
                .status(HttpStatus.FORBIDDEN)
                .json({ message: 'User with this email is already exist' });
        }
        const user = await this.userService.createUser({
            name: body.name ? body.name : 'User', // body.name || body.email,
            email: body.email,
            password: body.password,
        });

        if (user) {
            const token = await this.authService.singIn(user.id.toString());
            return res.status(HttpStatus.OK).json({ token });
        }

        return res
            .status(HttpStatus.BAD_REQUEST)
            .json({ message: 'Error.Register_user_failed' });
    }
}