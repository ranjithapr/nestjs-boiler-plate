import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from './util/exception.filter'
import { LoggerMiddleware } from './util/requestlogger/request.logger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config =  app.get(ConfigService);
  console.log(config.get<number>('port'));

  //validation for inputs
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AllExceptionsFilter());
  app.use(new LoggerMiddleware().use);

  //   await app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.GRPC,
  //   options: {
  //     package: 'subscribers',
  //     protoPath: join(process.cwd(), 'src/subscribers/subscribers.proto'),
  //     url: configService.get('GRPC_CONNECTION_URL')
  //   },
  // });
 
  // app.startAllMicroservices();
  await app.listen(config.get<number>('port'));
}
bootstrap();
