import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlConfiguracaoController } from './url-configuracao/url-configuracao.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ServiceModule } from './url-configuracao/service.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlConfiguracaoService } from './url-configuracao/services/url-configuracao.service';
import { ServiceInterface } from './url-configuracao/interfaces/service.interface';

@Module({
  imports: [
  MongooseModule.forRoot('mongodb://usradmin:Dn123456@localhost:27017/admin', {useNewUrlParser: true}),
  ServiceModule,
  GraphQLModule.forRoot({
    installSubscriptionHandlers: true,
    autoSchemaFile: 'schema.gql'
  })],
  controllers: [AppController, UrlConfiguracaoController],
  providers: [AppService, UrlConfiguracaoService, ServiceInterface],
})
export class AppModule {}
