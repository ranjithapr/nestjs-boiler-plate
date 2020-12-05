import { join } from 'path'
import { ClientOptions, Transport } from '@nestjs/microservices'
import { ConfigService } from '@nestjs/config';


// export const OrgServiceClientOptions: ClientOptions = {
//   transport: Transport.GRPC,
//   options: {
//     url: this.configService.get<string>('ORG_SVC_URL');,
//     package: 'org',
//     protoPath: join(__dirname, '../_proto/org.proto'),
//     loader: {
//       enums: String,
//       objects: true,
//       arrays: true
//     }
//   }
// }
