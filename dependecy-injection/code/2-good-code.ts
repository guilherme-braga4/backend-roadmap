export class GasEngine {
    private fuel: string;

    constructor(fuel: string) {
        this.fuel = fuel
    }

    start() {
        console.log(`Starting gas engine...with ${this.fuel}`);
    }
}

export class ElectricEngine {
    private fuel: string
    constructor(fuel: string) {
        this.fuel = fuel
    }

    start() {
        console.log(`Starting eletric engine...with ${this.fuel}`);
    }
}

class Car {
    constructor(
        private gasEngine: GasEngine,
        private eletricEngine: ElectricEngine
    ) {} // Dependências injetadas

    startHybrid() {
        this.gasEngine.start();
        this.eletricEngine.start();
    }
}

// Inversão de Controle: a Classe DEPENDE do objeto, mas ela não sabe do que ele precisa para ser instanciado, logo, ela deixa com que a aplicação decida.
    // Assim, não há necessidade em controlar os argumentos das dependências e as dependência em si;
    // Imagine a Inversão de Controle como uma receita de um bolo:
        // - Assadeira: Classe Principal
        // - Bolo: Dependência
        // - Ingredientes: Argumentos das Dependências
    // A Injeção de Dependência nos permite criar qualquer tipo de Bolo a partir dessa Assadeira, sem nem sequer se preocupar com os Ingredientes.
        // Me dê um Bolo de Morango -> Classe de implementação real
        // Me dê um Bolo de Chocolate -> Classe de mocking para testes

// As 2 Principais Vantagens da DI:
// 1. Teste: A Classe Car não precisa conhecer as dependências das Classes Engines 
    // 1.1 Para testar a Classe Car, é possível mockar as Classes Engines sem se preocupar com as dependências
// 2. Implementação: A Classe Car não precisa controlar os argumentos das Classes Engine
    // 2.1 Se há alteração nos argumentos das Classes Engines, então a Classe Car precisa ser ajustada para repassar esses argumentos

    // Conclusão>>> DI = Desacoplamento e Testabilidade

// Testing
    // A Inversão de Controle permite injetar um mock ao invés da implementação real
        // Não é necessário conhecer como as dependências são instanciadas
const mockGasEngine = { start: () => console.log("Mock gas engine started") };
const mockElectricEngine = { start: () => console.log("Mock electric engine started") };

// Inversão de Controle: a instância do objeto Car é quem controla as dependências
const car = new Car(mockGasEngine as GasEngine, mockElectricEngine as ElectricEngine);
car.startHybrid();

// Conclusão
    // Injeção de dependência: dependências se tornam argumentos 
    // constructor(
    //     private gasEngine: GasEngine,
    //     private eletricEngine: ElectricEngine
    // )
    // Inversão de Controle: a instância da classe injetada controla as dependências
    // new Car(mockGasEngine as GasEngine, mockElectricEngine as ElectricEngine)