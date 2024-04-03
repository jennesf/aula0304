/*Criar os objetos para os elementos que serão manipulados:*/
const obj_num_largura = document.querySelector('#num_largura')
const obj_num_altura = document.querySelector('#num_altura')
const obj_div_poligono = document.querySelector('#div_poligono')
const obj_p_perimetro = document.querySelector('#p_perimetro')

const obj_zoom_in = document.querySelector('#zoom_in')
const obj_zoom_out = document.querySelector('#zoom_out')
const obj_img_zoom = document.querySelector('#img_zoom')

let tam_zoom


/*2º Adicionar os eventos para chamar a função:*/
obj_num_largura.addEventListener("change", funRedimensionaPoligono)
obj_num_altura.addEventListener("change", funRedimensionaPoligono)

obj_zoom_in.addEventListener('click', funZoomIn)
obj_zoom_out.addEventListener('click', funZoomOut)

/*3º Declarar as funções para executar as ações:*/

    function funRedimensionaPoligono() {
        if(obj_num_largura.value < 50 || obj_num_largura.value > 100 || obj_num_altura.value < 50 || obj_num_altura.value > 100) {
            alert('Valores inválidos')
        } else{
            obj_div_poligono.style.width = obj_num_largura.value + 'px'
            obj_div_poligono.style.height = obj_num_altura.value + 'px'

            let area = obj_num_largura.value*obj_num_altura.value
            obj_div_poligono.innerHTML = 'Área: ' +area + 'px²'

            let perim = parseInt(obj_num_largura.value) + parseInt(obj_num_altura.value) +
            parseInt(obj_num_largura.value) + parseInt(obj_num_altura.value)
            obj_p_perimetro.innerHTML = 'Perímetro: ' + perim + 'px'
        }
    }

    function funZoomIn(){
        tam_zoom = obj_img_zoom.width
        tam_zoom = tam_zoom + 30 

        if( tam_zoom <= 160 ) {
            obj_img_zoom.style.width = tam_zoom + 'px'
            obj_zoom_in.style.filter = 'none'
        }
        else{
            obj_zoom_in.style.filter = 'blur(5px)'
        }
    }

    function funZoomOut(){
        tam_zoom = obj_img_zoom.width
        tam_zoom = tam_zoom - 30 

        if( tam_zoom >= 60 ) {
            obj_img_zoom.style.width = tam_zoom + 'px'
            obj_zoom_out.style.filter = 'none'
        }
        else{
            obj_zoom_out.style.filter = 'blur(5px)'
        }
    }
    /*Zoom Imagem
    1º Criar os objetos para os elementos que serão manipulados: */

   
   
