import { HttpParams } from "@angular/common/http";

export class Uteis {
    static objetoToQueryString(objeto: any):string{
        return Object.keys(objeto).map(key => objeto[key] === null ? '' : key + '=' + objeto[key]).join('&')
    }

    static objetoToQueryStringInHttpParams(objeto: object | any): HttpParams{
        let paramsStr = this.objetoToQueryString(objeto);
        return new HttpParams({fromString:paramsStr});
    }

    static ConverterObjetoToArray(dados: Object) {
        return this.RemoverCamposVazioArray(Object.values(dados));
    }

    static RemoverCamposVazioArray(dados: Array<any>) {
        return dados.filter(dadosArray => dadosArray != "");
    }


}
