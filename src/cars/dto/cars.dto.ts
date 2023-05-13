import {IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateCarDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    model: string | undefined;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    brand: string | undefined;

    @ApiProperty( { required: false })
    @IsNumber()
    @IsOptional()
    year: number | undefined;

    @ApiProperty( { required: true })
    @IsNumber()
    @IsOptional()
    price: number | undefined;


}