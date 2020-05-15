# Drag and Drop com Angualar Material e DropoList dinâmica
Já precisou criar um drag and drop com uma lista de objetos e não quis implementar cada DropList em um trexo html diferente?
Eu também e por este motivo criei um simples exemplo de como utilizar o drag and drop do Angular Material com este intúito.
![](https://server/group/jobs/raw/master/doc/drag-and-drop.gif)

### Mas o que tem de extraordinário nisso?
Nada de mais! Rsrs, mas na maioría dos exemplos que você vai encontrar cada DropList tem um respectivo trexo html, já aqui não, as DropList's são inseridas dinamicamente no html ao iterarmos numa lista de objetos.

# Pressupostos!
  - Irei do ponto de partida de que você ja sabe criar e configurar um projeto Angular IO
  - Explicarei apenas como foi implementado a solução. Por este motivo leia atentamente a documentação do site [Angular Material - Drag and Drop](https://material.angular.io/cdk/drag-drop/overview)
  - Vale lembrar que as bibliotecas utilizadas e suas respectivas versões estão disponíveis no package.json

### Inicializando a aplicação 
```sh
$ ng serve
```
Após carregar acesse http://localhost:4200/ e divirta-se arrastando e soltando.

### E agora?
Agora vamos entender o que foi feito no código.
A tela inicial é composta por três arquivos:
 - drag-and-drop.component.html
 - drag-and-drop.component.ts
 - drag-and-drop.component.css
 
Nós iremos focar apenas no ".html" e no ".ts", pois o ".css" está identico a qualquer exemplo de drag and drop com mais de uma DropList no site do Angular Material.

Senhoras e senhores lhes apresento o ".html"
![Screenshot](https://server/group/jobs/raw/master/doc/drag-and-drop.html.jpg)
A diferença desse para os demais exemplo é que o utilizamos o atributo id para identificar a DropList deste modo podemos criá-las através da iteração em uma lista.

Agora vamos para o "".ts"
![Screenshot](https://server/group/jobs/raw/master/doc/drag-and-drop.ts.jpg)
Nada de mais concordam? Entretanto, tive muita dificuldade para encontrar algo que me ajuda-se a fazê-lo quando precisei.

**Obrigado por chegar até aqui! Fim**
