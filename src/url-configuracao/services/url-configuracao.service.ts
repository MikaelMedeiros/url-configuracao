import { Injectable } from '@nestjs/common';
import { NewUrlInput } from '../dto/new-url.input';
import { Url } from '../models/url.model';

@Injectable()
export class UrlConfiguracaoService {

  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(data: NewUrlInput): Promise<Url> {
    return {} as any;
  }

  async findOneById(id: string): Promise<Url> {
    const url = new Url();
    url.codigoSistema = 1;
    url.excluido = false;
    url.id = '45';
    url.nome = 'api.neoway.usuario';
    url.url = 'cni-sesi-app';
    url.dataCriacao = new Date();
    return url as Url;
  }

  async findAll(): Promise<Url[]> {
    return [] as Url[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }

}
