import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import * as path from 'path';

import { UsersModule } from './user/users.module';
import { OrgModule } from './org/org.module';

const ENV = process.env.NODE_ENV || 'dev';



@Module({
  imports: [UsersModule,OrgModule,ConfigModule.forRoot({
  	 envFilePath: path.resolve(process.cwd(), 'env', !ENV ? '.env' : `.env.${ENV}`),
  	   isGlobal: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
