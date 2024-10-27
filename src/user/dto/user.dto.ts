import { IsUUID, IsNotEmpty, IsString, IsEmail, MinLength, MaxLength } from "class-validator";

export class UserDto {
    @IsNotEmpty()
    @IsUUID()
    id: string;

    @IsString()
    @IsNotEmpty()
    typeDocument: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(10)
    numberDocument: string;

    @IsNotEmpty()
    @IsString()
    fullName: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(10)
    phoneNumber: string;
}