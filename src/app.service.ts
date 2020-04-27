import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Olá! Selecione a url de configuracao, copie e cole na rota : <br/>
    <ol>
    <li>/url-configuracao/prod</li>
    <li>/url-configuracao/homolog</li>
    <li>/url-configuracao/dev</li>
    </ol>` ;
  }

  getUrlProducao(): string {
    return 'Produção';
  }

  getUrlHomologacao() {
    return {url:'Homologação'};
  }

  getUrlDesenvolvimento(): string {
    return 'Desenvolvimento';
  }
}
