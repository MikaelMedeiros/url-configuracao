
import { Module } from '@nestjs/common';
import { UrlConfiguracaoService } from './services/url-configuracao.service';
import { UrlResolver } from './url.resolver';
import { DateScalar } from 'src/commom/scalars/date.scalar';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceSchema } from './schemas/service.schema';
import { UrlConfiguracaoController } from './url-configuracao.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Service', schema: ServiceSchema}])],
  controllers: [UrlConfiguracaoController],
  providers: [UrlResolver, UrlConfiguracaoService, DateScalar],
})
export class ServiceModule {}