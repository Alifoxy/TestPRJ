import {
    IsBoolean,
    IsEmail,
    IsEnum,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    Matches,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IsValid } from '../decorators/check.days.decorator';

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string | undefined;

    @ApiProperty()
    @IsString()
    // @IsNotEmpty()
    @IsOptional()
    password: string | undefined;

    @ApiProperty({ required: false })
    @IsNumber()
    @IsOptional()
    age: number | undefined;

    @ApiProperty({ required: true, example: 'user@mail.com' })
    @IsString()
    @IsEmail()
    // @Matches('')
    @IsNotEmpty()
    email: string | undefined;

    @ApiProperty()
    @IsString()
    @IsOptional()
        // @IsEnum(CityEnum)
    city: string | undefined;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    status: boolean | undefined;

    @ApiProperty()
    avatar: string | undefined;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @IsValid()
    dayOff: string | undefined;
}
