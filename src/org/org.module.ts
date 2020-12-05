import { Module } from '@nestjs/common';
import OrgController from './org.controller';
 
@Module({
  imports: [],
  controllers: [OrgController],
})
export class OrgModule {}