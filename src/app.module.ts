import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlConfiguracaoController } from './url-configuracao/url-configuracao.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { UrlModule } from './url-configuracao/url.module';

@Module({
  imports: [
  UrlModule,
  GraphQLModule.forRoot({
    installSubscriptionHandlers: true,
    autoSchemaFile: 'schema.gql'
  })],
  controllers: [AppController, UrlConfiguracaoController],
  providers: [AppService],
})
export class AppModule {}
