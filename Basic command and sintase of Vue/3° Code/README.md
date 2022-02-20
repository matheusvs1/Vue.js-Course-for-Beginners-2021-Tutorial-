## Nesta parte será visto Eventos e métodos utilizados pelo Vue

Nesta etapa foi apresendo como ativar e definir eventos no Vue.js, no caso, é criado uma objeto de funções, dentro dos
objetos específicos do vue... onde é armazenado todos os métodos que serão chamado na aplicação.

*methods: {\
    toggleBox() {\
        this.isVisible = !this.isVisible;\
    },\
    greet(greeted) {\
        console.log(greeted);\
    }*

E para conseguir chamar uma função é necessário chamar um texto espefífico do Vue. **v-on:{{typeOfEvent}}="function"**
na maioria das vezes sendo apreviado para apenas **@:{{typeOfEvent}}="funtion"**

