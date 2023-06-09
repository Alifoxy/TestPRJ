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
import { IsValid } from '../decorators/check.ads.decorator';

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name!: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    password!: string;

    @ApiProperty({ required: false })
    @IsNumber()
    @IsOptional()
    age!: number;

    @ApiProperty({ required: true, example: 'user@mail.com' })
    @IsString()
    @IsEmail()
    // @Matches('')
    @IsNotEmpty()
    email!: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
        // @IsEnum(CityEnum)
    city!: string;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    premium!: boolean;

}
