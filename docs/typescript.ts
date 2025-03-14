// Definindo a enum TipoTransacao antes do tipo Transacao
// Enums são úteis para definir um conjunto de valores nomeados. Aqui, usamos uma enum de strings.
enum TipoTransacao {
    DEPOSITO = 'Depósito',  // Valor 'Depósito' para DEPOSITO
    TRANSFERENCIA = 'Transferência',  // Valor 'Transferência' para TRANSFERENCIA
    PAGAMENTO_BOLETO = 'Pagamento de boleto'  // Valor 'Pagamento de boleto' para PAGAMENTO_BOLETO
}

// Criando o tipo Transacao
// O Type Alias permite que você defina tipos personalizados para objetos. 
// A transação tem um tipo de transação (TipoTransacao), uma data e um valor.
type Transacao = {
    tipoTransacao: TipoTransacao;  // Campo do tipo TipoTransacao
    data: Date;  // Campo do tipo Date para armazenar a data da transação
    valor: number;  // Campo do tipo number para armazenar o valor da transação
}

// Criando uma nova transação
// Agora que temos nosso tipo Transacao e a enum TipoTransacao, podemos criar uma instância de Transacao.
const novaTransacao: Transacao = {  // Corrigido: Adicionado ":" após o nome da variável
    tipoTransacao: TipoTransacao.PAGAMENTO_BOLETO,  // Usando a enum para definir o tipo de transação
    data: new Date(),  // A data é definida como a data atual
    valor: 0  // Definindo o valor da transação como 0
};

// Exemplo de um array de números
// O array `lista` é tipado como um array de números, ou seja, ele pode conter apenas números.
const lista: number[] = [];
lista.push(13, 22.5, 22, 1.50);  // Todos os valores inseridos são números (inteiros ou flutuantes)

// Exemplo de tupla (array com tipos fixos e ordem específica)
// Tuplas permitem que você defina um array com tipos de dados diferentes e uma quantidade fixa de elementos.
let tupla: [string, number, boolean] = ['Olá', 42, true];  // Definindo uma tupla com três elementos de tipos específicos
console.log(tupla);  // Saída: ['Olá', 42, true]

// Função tipada com parâmetros e retorno
// As funções podem ser tipadas para garantir que recebam os tipos certos e retornem o tipo esperado.
function soma(a: number, b: number): number {
    return a + b;  // Retorna a soma dos dois números passados
}

console.log(soma(10, 20));  // Saída: 30, pois estamos somando 10 e 20

// Definindo e utilizando interfaces para objetos
// Interfaces são como Type Aliases, mas mais flexíveis. Podem ser usadas para definir a forma de um objeto.
interface Produto {
    nome: string;  // Nome do produto (obrigatório)
    preco: number;  // Preço do produto (obrigatório)
    categoria?: string;  // Categoria do produto (opcional, pois é precedido de '?')
}

// Criando um objeto do tipo Produto
const produto: Produto = {
    nome: 'Camiseta',  // Nome do produto
    preco: 29.99  // Preço do produto
};

console.log(produto);  // Saída: { nome: 'Camiseta', preco: 29.99 }

// Caso desejemos adicionar a categoria ao produto, podemos fazer da seguinte forma:
const outroProduto: Produto = {
    nome: 'Tênis',
    preco: 99.99,
    categoria: 'Esportes'  // Categoria é opcional e pode ser adicionada
};

console.log(outroProduto);  // Saída: { nome: 'Tênis', preco: 99.99, categoria: 'Esportes' }
