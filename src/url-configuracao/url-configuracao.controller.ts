import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller()
export class UrlConfiguracaoController {

  constructor(private readonly appService: AppService) {}

  @Get('prod')
  getUrlProducao(): string {
    return this.appService.getUrlProducao();
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
