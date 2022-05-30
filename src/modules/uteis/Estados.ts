export class Estados {
    constructor(nome: string, sigla: string, codigo: string) {
        this.nome = nome;
        this.sigla = sigla;
        this.codigo = codigo;
    }

    nome: string = '';
    sigla: string = '';
    codigo: string = '';

    static listaEstados = [
        new Estados('Tocantins', 'TO', '17'),
        new Estados('Acre', 'AC', '12'),
        new Estados('Alagoas', 'AL', '27'),
        new Estados('Amapá', 'AP', '16'),
        new Estados('Amazonas', 'AM', '13'),
        new Estados('Bahia', 'BA', '29'),
        new Estados('Ceará', 'CE', '23'),
        new Estados('Distrito Federal', 'DF', '53'),
        new Estados('Espírito Santo', 'ES', '32'),
        new Estados('Goiás', 'GO', '52'),
        new Estados('Maranhão', 'MA', '21'),
        new Estados('Mato Grosso', 'MT', '51'),
        new Estados('Mato Grosso do Sul', 'MS', '50'),
        new Estados('Minas Gerais', 'MG', '31'),
        new Estados('Pará', 'PA', '15'),
        new Estados('Paraíba', 'PB', '25'),
        new Estados('Paraná', 'PR', '41'),
        new Estados('Pernambuco', 'PE', '26'),
        new Estados('Piauí', 'PI', '22'),
        new Estados('Rio de Janeiro', 'RJ', '33'),
        new Estados('Rio Grande do Norte', 'RN', '24'),
        new Estados('Rio Grande do Sul', 'RS', '43'),
        new Estados('Rondônia', 'RO', '11'),
        new Estados('Roraima', 'RR', '14'),
        new Estados('Santa Catarina', 'SC', '42'),
        new Estados('São Paulo', 'SP', '35'),
        new Estados('Sergipe', 'SE', '28'),
        new Estados('Exterior', 'EX', '99'),
    ]

}
