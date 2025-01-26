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

// As 2 Principais Vantagens da DI:
// 1. Teste: A Classe Car não precisa conhecer as dependências das Classes Engines
    // 1.1 Para testar a classe Car, é possível mockar as Classes Engines sem se preocupar com as dependências
// 2. Implementação: A Classe Car não precisa controlar os argumentos das Classes Engine
    // Se há alteração nos argumentos das Classes Engines, então a Classe Car precisa ajustar seus argumentos

    // Conclusão>>> DI = Desacoplamento e Testabilidade

// Testing
    // A Inversão de Controle permite injetar um mock ao invés da implementação real
        // Não é necessário conhecer como as dependências são instanciadas
const mockGasEngine = { start: () => console.log("Mock gas engine started") };
const mockElectricEngine = { start: () => console.log("Mock electric engine started") };
const car = new Car(mockGasEngine as GasEngine, mockElectricEngine as ElectricEngine);
car.startHybrid();

