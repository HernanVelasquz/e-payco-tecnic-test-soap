import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserData } from './data/user.data';
import { ResponseBuildingModel } from '../common';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('findUserByPhoneNumber/:phoneNumber')
  public async findUserByPhoneNumber(
    @Param('phoneNumber') phoneNumber: string,
  ): Promise<ResponseBuildingModel<UserData>> {
    try {
      const user = await this.userService.findUserByPhoneNumber(phoneNumber);
      if (!user)
        return new ResponseBuildingModel(false, null, {
          code: '404',
          title: 'Not Found',
          error: 'User not found',
        });
      return new ResponseBuildingModel(true, {
        id: user.id,
        typeDocument: user.typeDocument,
        numberDocument: user.numberDocument,
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber,
      });
    } catch (error) {
      throw new ResponseBuildingModel(false, null, {
        code: error.status,
        title: 'Error',
        error: error.message,
      });
    }
  }

  @Get('findUserByDocumentNumber/:document')
  public async findUserByDocumentNumber(
    @Param('document') phoneNumber: string,
  ): Promise<ResponseBuildingModel<UserData>> {
    try {
      const user = await this.userService.findUserByDocumentNumber(phoneNumber);
      if (!user)
        return new ResponseBuildingModel(false, null, {
          code: '404',
          title: 'Not Found',
          error: 'User not found',
        });
      return new ResponseBuildingModel(true, {
        id: user.id,
        typeDocument: user.typeDocument,
        numberDocument: user.numberDocument,
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber,
      });
    } catch (error) {
      throw new ResponseBuildingModel(false, null, {
        code: error.status.toString(),
        title: 'Error',
        error: error.message,
      });
    }
  }

  @Post('registerUser')
  public async registerUser(
    @Body() userDto: UserDto,
  ): Promise<ResponseBuildingModel<UserData>> {
    try {
      const user = await this.userService.createUser(userDto);
      return new ResponseBuildingModel(true, {
        id: user.id,
        typeDocument: user.typeDocument,
        numberDocument: user.numberDocument,
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber,
      });
    } catch (error) {
      throw new ResponseBuildingModel(false, null, {
        code: error.status,
        title: 'error',
        error: error.message,
      });
    }
  }
}
