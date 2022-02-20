## Quinta parte do vídeo, definindos Component props

Neste capítulo, foi apresentado como relacionar componentes entre si, no caso uma componente pai com uma filho.

- Foi apresentado um novo texto especial do vue, v-bind, que tem o objetivo de linkar a variável alvo do componente pai com o componente filho... é utilizado de seguinte forma.
*v-bind:propsName="variable"*
onde propsName é definido na componente filho, da seguinte forma:
'props: ['name']'
... como é um texto especial muito utilizado, pode ser subtituido por apenas ':'

- Como o v-bind criou um caminho, trazendo um texto para a tag desejada... é possível fazer o retorno
onde a componente filho leva um valor para componente pai.

Assim foi explorado, algumas caracteristicas especias do v-model que ele é automáticamente 'bindado' por uma variável chamada: 'modelValue'... sendo assim a componente filho consegue trabalhar com o valor do model automáticamente apenas com
'this.modelValue'

- E foi apresenado ua nova função dentro do objeto de funções chamado computed, que permite trazer algumas funções de definições de valores, no caso, get() e set()... as quais foram usado para indentificar o valor do v-model na componente filho e enviado de volta o valor para componente pai.


