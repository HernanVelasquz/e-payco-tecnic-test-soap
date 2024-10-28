import { IsNotEmpty, IsNumber, IsString, IsUUID, MaxLength, MinLength } from "class-validator";

export class RegisterWalletDto {
    @IsNotEmpty()
    @IsUUID()
    public id: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(10)
    public phoneNumber: string;

    @IsNotEmpty()
    @IsUUID()
    public userId: string;

    @IsNotEmpty()
    @IsNumber()
    public balance: number;

    @IsNotEmpty()
    @IsString()
    public createAt: string;
}
