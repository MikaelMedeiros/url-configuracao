import * as mongoose from "mongoose";

export const ServiceSchema = new mongoose.Schema({
    id: String,
    nome: String,
    url: String,
    codigoSistema: Number,
    dataCriacao: Date,
    excluido: Boolean
});