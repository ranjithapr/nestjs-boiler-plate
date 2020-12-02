import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import * as path from 'path';

import { UsersModule } from './user/users.module';

const ENV = process.env.NODE_ENV || 'dev';



@Module({
  imports: [UsersModule,ConfigModule.forRoot({
  	 envFilePath: path.resolve(process.cwd(), 'env', !ENV ? '.env' : `.env.${ENV}`),
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
