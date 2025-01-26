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

// A classe Car é responsável por saber como instanciar suas dependências, logo, ela sabe que Engine precisa de fuel
    // Isso viola o princípio de Inversão de Dependência (Dependency Inversion).
class Car {
    private gasEngine: GasEngine;
    private eletricEngine: ElectricEngine;

    constructor() {
        // Instanciar TODAS as dependências para a classe funcionar
        // Se as classes GasEngine ou ElectricEngine mudarem, será necessário modificar a classe Car, quebrando o princípio Open/Closed (da SOLID).
            // Open para extensão e Closed para mudanças
        this.gasEngine = new GasEngine("gas"); // Dependência criada diretamente
        this.eletricEngine = new ElectricEngine("oil"); // Dependência criada diretamente
    }

    startHybrid() {
        this.gasEngine.start();
        this.eletricEngine.start();
    }
}


