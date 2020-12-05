//REST- Start
// import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
// import UsersService from './users.service';
// import CreateUserDto from './dto/createUser.dto';
// import UpdateUserDto from './dto/updateUser.dto';
 
// @Controller('users')
// export default class UsersController {
//   constructor(
//     private readonly usersService: UsersService
//   ) {}
 
//   @Get()
//   getAllUsers() {
//     return this.usersService.getAllUsers();
//   }
 
//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.usersService.findOne(Number(id));
//   }
 
//   @Post()
//   async createUser(@Body() user: CreateUserDto) {
//     return this.usersService.createUser(user);
//   }
 
//   @Put(':id')
//   async replaceUser(@Param('id') id: string, @Body() user: UpdateUserDto) {
//     return this.usersService.replaceUser(Number(id), user);
//   }
 
//   @Delete(':id')
//   async deleteUser(@Param('id') id: string) {
//     this.usersService.deleteUser(Number(id));
//   }
// }
//REST- End

//GRPC controller
//GRPC Start
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UserRequest, User } from './user.interface';
import UsersService from './users.service';


@Controller()
 export default class UsersController {

 constructor(
    private readonly usersService: UsersService
  ) {}

  @GrpcMethod('UsersService', 'findOne')
  findOne(data: UserRequest, metadata: any): User {
   return this.usersService.findOne(Number(data.id));
  }
}
//GRPC End
