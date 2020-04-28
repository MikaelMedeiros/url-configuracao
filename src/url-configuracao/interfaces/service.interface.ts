import { Document } from "mongoose";

export class ServiceInterface extends Document {
  id: string;
  nome: string;
  url: string;
  codigoSistema: number;
  dataCriacao: Date;
  excluido: boolean;
}
