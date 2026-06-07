import { cpf } from "cpf-cnpj-validator";

export const validatorCPF = (value: string) => cpf.isValid(value);