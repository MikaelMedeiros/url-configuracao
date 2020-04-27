import { Test, TestingModule } from '@nestjs/testing';
import { UrlConfiguracaoService } from './url-configuracao.service';

describe('UrlConfiguracaoService', () => {
  let service: UrlConfiguracaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UrlConfiguracaoService],
    }).compile();

    service = module.get<UrlConfiguracaoService>(UrlConfiguracaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
