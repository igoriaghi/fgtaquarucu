import { formatDate } from "@angular/common";

export class MensagensValidacao{
    static Igual(nomeCampo:string){
        if(nomeCampo === null || nomeCampo.length == 0)
            throw 'Nome do Campo não informado';
        
        
        return `${nomeCampo} é obrigatório.`;
    }
    static Obrigatorio(nomeCampo:string){
        if(nomeCampo === null || nomeCampo.length == 0)
            throw 'Nome do Campo não informado';
        
        return `${nomeCampo} é obrigatório.`;
    }
    static MinimoCaracteres(nomeCampo: string, quantidadeCaracteres: number){
        if(nomeCampo === null || nomeCampo.length == 0)
            throw 'Nome do Campo não informado';
        if(quantidadeCaracteres < 0)
            throw 'Quantidade de Caracteres deve ser maior que 0';
        if(!Number.isInteger(quantidadeCaracteres))
            throw 'Quantidade minima de Caracteres deve ser numeros inteiros';
        
        return `${nomeCampo} precisa ter no mínimo ${quantidadeCaracteres} caracteres.`;
    }
    static MaximoCaracteres(nomeCampo: string, quantidadeCaracteres: number){
        if(nomeCampo === null || nomeCampo.length == 0)
            throw 'Nome do Campo não informado';
        if(quantidadeCaracteres < 0)
            throw 'Quantidade de Caracteres deve ser maior que 0';
        if(!Number.isInteger(quantidadeCaracteres))
            throw 'Quantidade maxima de Caracteres deve ser numeros inteiros';
        
        return `${nomeCampo} precisa ter no máximo ${quantidadeCaracteres} caracteres.`;
    }
    static ValorMinimo(nomeCampo: string, valorMinimo: number){
        if(nomeCampo === null || nomeCampo.length == 0)
            throw 'Nome do Campo não informado';

        return `${nomeCampo} não pode ser menor que ${valorMinimo}`;
    }
    static ValorMaximo(nomeCampo: string, valorMaximo: number){
        if(nomeCampo === null || nomeCampo.length == 0)
            throw 'Nome do Campo não informado';

        return `${nomeCampo} não pode ser maior que ${valorMaximo}`;
    }
    
    static DataMinima(nomeCampo: string, dataMinima: Date, somenteData:boolean = true){
        if(nomeCampo === null || nomeCampo.length == 0)
            throw 'Nome do Campo não informado';

        return `${nomeCampo} não pode ser menor que ${formatDate(dataMinima, `dd/MM/yyyy${somenteData ? '': ' HH:mm:ss'}`, 'pt')}`;
    }
    static DataMaxima(nomeCampo: string, dataMaxima: Date, somenteData:boolean = true){
        if(nomeCampo === null || nomeCampo.length == 0)
            throw 'Nome do Campo não informado';

        return `${nomeCampo} não pode ser maior que ${formatDate(dataMaxima, `dd/MM/yyyy${somenteData ? '': ' HH:mm:ss'}`, 'pt')}.`;
    }

    static CPFInvalido(){
        return 'CPF Inválido.';
    }
    static CNPJInvalido(){
        return 'CNPJ Inválido.';
    }
    static FormatoInvalido(nomeCampo: string){
        if(nomeCampo === null || nomeCampo.length == 0)
            throw 'Nome do Campo não informado';

        return `${nomeCampo} inválido`;
    }

    static CfopInvalido(nomeCampo: string){
        if(nomeCampo === null || nomeCampo.length == 0)
            throw 'Nome do Campo não informado';
        
        return `${nomeCampo} invalido, deve ser iniciado com 1,2,3 entrada ou 5,6,7 saída`;
    }
}
