# Como isso pode cair em entrevistas?

Irão aparecer 2 perguntas sobre esse tema:

1. Você sabe o que é DI?
R: É uma boa prática em design de software em que uma dependência de uma classe é passada como argumento via constructor.
---
2. Você sabe explicar para que serve a DI?
R: Essa prática serve para promover Flexibilidade e Testabilidade, uma vez que a classe que recebe as injeções das dependências não necessita conhecer como é instanciado os objetos dessas dependencias, dessa forma, todas as mudanças que ocorrem nas dependências não afetam a classe principal e o príncipio Open/Closed é respeitado.
Exemplo: a classe do objeto injetado passa a receber um novo parâmetro no seu constructor; sem a DI seria necessário que a classe principal passasse os argumentos para a classe da dependência, já que ela está controlando a forma como a dependência é instanciada.
Em termos de testabilidade, é preciso falar sobre a Inversão de Controle (IoC), inclusive, a DI é uma implementação de IoC, pois, uma vez que as instância são desconhecidas pela classe que recebeu as dependencias injetadas, é possível injetar mocks ao invés das implementações e realizar testes com mais facilidades.

---

# Como isso aparece no dia a dia de trabalho?
Normalmente, em termos de backend, você terá um sistema injetando as dependências camada por camada, como por exemplo, o Repository sendo injetado no Service e este sendo injetado no Controller. Quando é necessário instancia alguma classe para testes, se torna possível através do conceito do IoC realizar a injeção de mocks ao invés de implementações reais.