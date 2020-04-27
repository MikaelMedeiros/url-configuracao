
import { Module } from '@nestjs/common';
import { UrlConfiguracaoService } from './services/url-configuracao.service';
import { UrlResolver } from './url.resolver';
import { DateScalar } from 'src/commom/scalars/date.scalar';

@Module({
  providers: [UrlResolver, UrlConfiguracaoService, DateScalar],
})
export class UrlModule {}