import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { UrlConfiguracaoService } from './services/url-configuracao.service';
import { Service } from './models/service.model';

@Controller()
export class UrlConfiguracaoController {

  constructor(private readonly appService: AppService, private readonly urlConfiguracaoService: UrlConfiguracaoService) {}

  @Get('prod')
  getUrlProducao(): Promise<Service[]> {
    return this.urlConfiguracaoService.findAll();
  }

  @Get('homolog')
  getUrlHomologacao() {
    return this.appService.getUrlHomologacao();
  }

  @Get('dev')
  getUrlDesenvolvimento(): string {
    return this.appService.getUrlDesenvolvimento();
  }
}
