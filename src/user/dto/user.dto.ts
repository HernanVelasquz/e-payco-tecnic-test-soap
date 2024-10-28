import { IsUUID, IsNotEmpty, IsString, IsEmail, MinLength, MaxLength } from "class-validator";

export class UserDto {
    @IsNotEmpty()
    @IsUUID()
    public id: string;

    @IsString()
    @IsNotEmpty()
    public typeDocument: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(10)
    public numberDocument: string;

    @IsNotEmpty()
    @IsString()
    public fullName: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    public email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(10)
    public phoneNumber: string;
}