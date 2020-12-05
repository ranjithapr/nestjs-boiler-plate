import { ClientGrpc, Client } from '@nestjs/microservices'
import { Controller, Get, Post, Delete, Query, Body, Param, Inject, OnModuleInit, NotFoundException, Header } from '@nestjs/common'
import { isEmpty } from 'lodash'
import { Observable } from 'rxjs'

import { OrganizationsService, Org, OrgRequest } from './org.interface'
import { ConfigService } from '@nestjs/config';
import { join } from 'path'
import { ClientOptions, Transport } from '@nestjs/microservices'

@Controller()
export default class OrgController implements OnModuleInit {
 constructor(
    private readonly configService: ConfigService
  ) {}

  private organizationsService: OrganizationsService

  @Client({
      transport: Transport.GRPC,
  	  options: {
	    url: 'localhost:5000',
	    package: 'orgs',
	    protoPath: join(__dirname, '../_proto/org.proto'),
  	},
  })
  client: ClientGrpc;

  onModuleInit() {
    this.organizationsService = this.client.getService<OrganizationsService>('OrganizationsService')
  }

  @Header('Content-Type', 'application/json')
  @Get()
   findOne(@Param('id') id: string):any {
  	 return this.organizationsService.findByName({
        id
      });
  }
}
