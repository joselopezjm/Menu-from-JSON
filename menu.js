var XMenu = Object.create(HTMLDivElement.prototype);
var menu = document.createElement('div');
var barra = document.createElement('table');
var divbarra = document.createElement('div');
var flecha;
var canvas = document.createElement('canvas');
menu.setAttribute('id', 'id');
var t = new Array;
var x = new Array;
var panel = new Array;
var subpanel = new Array;
barra.insertRow(0);

XMenu.createdCallback = function () {
    document.body.appendChild(canvas);
    document.body.appendChild(menu);
    document.body.appendChild(barra);
    document.body.appendChild(divbarra);
    canvas.style.display = 'none';
    menu.appendChild(divbarra);
    menu.style.height = '22px';
    menu.style.width = '100%';
    menu.style.position = 'absolute';
    menu.style.top = '0px';
    menu.style.left = '0px';
    divbarra.appendChild(barra);
    desplegar();
    document.body.addEventListener("click", function (e) {

        var target = e.target || e.srcElement;

        if (target !== barra && !isChildOf(target, barra)) {

            for (var i = 0; i < bar.opt.length; i++) {
                panel[i].style.display = 'none';
                for (var j = 0; j < bar.paneles[i][0].opt.length; j++) {
                    t[i].rows[j].style.background = 'linear-gradient(to bottom, rgba(238,238,238,0.7) 0%,rgba(238,238,238,0.7) 100%)';
                    t[i].rows[j].cells[1].style.color = 'black';
                    t[i].rows[j].cells[2].style.color = 'black';
                    //                    t[i].rows[j].cells[1].childNodes[0].style.color = 'black';
                }

            }

            for (var j = 0; j < bar.subpaneles.id.length; j++) {
                if (document.getElementById('m' + j) != null) {
                    document.getElementById('m' + j).style.visibility = 'hidden';
                    document.getElementById('d' + j).style.visibility = 'hidden';

                }
            }

            for (var i = 0; i < barra.rows[0].cells.length; i++) {
                barra.rows[0].cells[i].style.background = 'linear-gradient(to bottom, rgba(209,209,209,1) 0%,rgba(209,209,209,1) 0%,rgba(219,219,219,1) 23%,rgba(226,226,226,1) 0%,rgba(226,226,226,1) 10%,rgba(254,254,254,1) 100%)';
                barra.rows[0].cells[i].style.color = 'black';
            }


            for (var i = 0; i < bar.opt.length; i++) {
                barra.rows[0].cells[i].onmouseover = function (e) {
                    return false;
                };
            }

            for (var i = 0; i < bar.opt.length; i++) {
                barra.rows[0].cells[i].onclick = function (e) {
                    var x = cellcolor2(this.fila);
                    var f = new Function(bar.fun[this.fila]);
                    for (i = 0; i < bar.opt.length; i++) {
                        barra.rows[0].cells[i].onmouseover = function (e) {
                            var f = new Function(bar.fun[this.fila]);
                            var x = cellcolor2(this.fila);
                            f();
                        };
                    }
                    f();
                };
            }

        }


    }, false);

    function isChildOf(child, parent) {
        if (child.parentNode === parent) {
            return true;
        } else if (child.parentNode === null) {
            return false;
        } else {
            return isChildOf(child.parentNode, parent);
        }
    }

    for (var i = 0; i < bar.opt.length; i++) {
        var bodyRect = document.body.getBoundingClientRect(),
            elemRect = barra.rows[0].cells[i].getBoundingClientRect(),
            offset = elemRect.top - 8;
        offset2 = elemRect.left - 8;
        divbarra.appendChild(panel[i]);
        panel[i].style.position = 'absolute';
        panel[i].style.top = offset + 29 + 'px';
        panel[i].style.left = offset2 + 5 + 'px';
        panel[i].appendChild(t[i]);
        panel[i].style.display = 'none';
        t[i].style.borderBottom = "solid 10px rgba(238, 238, 238,0.7)";
        t[i].style.borderLeft = "solid 3px rgba(238, 238, 238,0.7)";
        t[i].style.borderRight = "solid 3px  rgba(238, 238, 238,0.7)";
        t[i].style.borderBottomLeftRadius = "10px";
        t[i].style.borderBottomRightRadius = "10px";
        panel[i].style.borderLeft = 'solid 1px #d9d9d9';
        panel[i].style.borderRight = 'solid 1px #d9d9d9';
        panel[i].style.borderBottom = 'solid 1px #d9d9d9';
        panel[i].style.borderBottomLeftRadius = "10px";
        panel[i].style.borderBottomRightRadius = "10px";
        panel[i].style.boxShadow = '5px 11px 50px -14px rgba(51,51,51,1)';
    }

}

var bar = {
    opt: ['Archivo', 'Edicion', 'Visualizacion', 'Ir', 'Ventana', 'Ayuda'],
    fun: ['mostrar(0)', 'mostrar(1)', 'mostrar(2)', 'mostrar(3)', 'mostrar(4)', 'mostrar(5)'],
    paneles: [[{
            opt: ['Nueva Ventana', 'Nueva Carpeta', 'Nueva Pestana', 'Obtener Informacion', 'Comprimir', 'Buscar', 'Trasladar a la Papelera'],
            fun: ['submenu(0,', 'alert("Nueva Carpeta")', 'alert("Nueva Pestana")', 'alert("Obtener informacion")', 'alert("Comprimir")', 'alert("buscar")', 'alert("trasladar a la papelera")'],
            src: ['abrir.png', 'cerrar.png', 'salir.png', 'copiar.png', 'pegar.png', 'cortar.png', 'abrir.png']
            }], [{
            opt: ['Deshacer', 'Rehacer', 'Cortar', 'Copiar', 'Pegar', 'Seleccionar Todo'],
            fun: ['alert("Deshacer")', 'alert("Rehacer")', 'alert("Cortar")', 'alert("Copiar")', 'alert("Pegar")', 'alert("Seleccionar Todo")'],
            src: ['abrir.png', 'cerrar.png', 'salir.png', 'abrir.png', 'abrir.png', 'abrir.png']
            }], [{
            opt: ['Como Iconos', 'Como Lista', 'Alinear', 'Ocultar Menu', 'Ocultar Barra'],
            fun: ['alert("como iconos")', 'alert("Como Lista")', 'submenu(2,', 'alert("Ocultar Barra de Eventos")', 'alert("Ocultar Barra de Estados")'],
            src: ['abrir.png', 'cerrar.png', 'salir.png', 'abrir.png', 'abrir.png']
            }], [{
            opt: ['Atras', 'Adelante', 'Carpeta Contenedora'],
            fun: ['alert("Atras")', 'alert("Adelante")', 'alert("Carpeta Contenedora")'],
            src: ['abrir.png', 'cerrar.png', 'salir.png']
            }]
                     , [{
            opt: ['Minimizar', 'Zoom', 'Recorrer Ventanas', 'Traer Todo al Frente'],
            fun: ['alert("minimizar")', 'alert("Zoom")', 'alert("Recorrer Ventanas")', 'alert("Traer Todo al Frente")'],
            src: ['abrir.png', 'cerrar.png', 'salir.png', 'abrir.png']
            }], [{
            opt: ['Buscar', 'Ayuda Os', 'Informacion'],
            fun: ['alert("Buscar")', 'alert("Ayuda Os")', 'alert("Informacion")'],
            src: ['abrir.png', 'cerrar.png', 'salir.png']
            }]],
    subpaneles: {
        id: ['0', '1', '2', '3', '4'],
        submenu: [[{
            id: '0',
            status: 0,
            ocultar: 0,
            opt: ['Crear Estilo', 'Estandar', 'Moderno', 'Clasico', 'Elegante'],
            fun: ['submenu(1,', 'alert("Estandar")', 'alert("Moderno")', 'alert("Clasico")', 'alert("Elegante")'],
            src: ['abrir.png', 'cerrar.png', 'salir.png', 'copiar.png', 'pegar.png'],
            }], [{
            id: '1',
            status: 0,
            ocultar: 0,
            opt: ['Color de Fondo', 'Forma', 'Tipo de Letra', 'Borde'],
            fun: ['alert("Color de Fondo")', 'alert("Fondo")', 'alert("Tipo de Letra")', 'alert("Borde")'],
            src: ['abrir.png', 'cerrar.png', 'salir.png', 'copiar.png'],
            }], [{
            id: '2',
            status: 0,
            ocultar: 0,
            opt: ['A la Izquierda', 'A la Derecha', 'Centrado', 'Justificado'],
            fun: ['alert("A la Izquierda")', 'alert("A la Derecha")', 'alert("Centrado")', 'alert("Justificado")'],
            src: ['abrir.png', 'cerrar.png', 'salir.png', 'cerrar.png', 'abrir.png', ],
            }]]
    }
}



var submenu = function (e, h, s, ele) {
    var cuenta = 0;
    var tabla = document.getElementById(ele);
    var tamano = tabla.rows.length;
    var tabla1 = document.getElementById(ele);
    tabla = tabla.rows[s].cells[2];
    var bodyRect = document.body.getBoundingClientRect(),
        elemRect = tabla.getBoundingClientRect();
    tope = elemRect.top - bodyRect.top;
    izq = elemRect.left - bodyRect.left;
    var n = document.createElement('table');
    n.setAttribute('id', "m" + e);
    var j = s;
    var tsm = t[h].rows.length + s;
    for (var i = 0; i < bar.subpaneles.submenu[e][0].opt.length; i++) {
        img = document.createElement('img');
        n.style.borderSpacing = '0px';
        n.insertRow(i);
        n.rows[i].insertCell(0);
        n.rows[i].insertCell(1);
        n.rows[i].insertCell(2);
        n.rows[i].style.height = '23px';
        n.rows[i].cells[1].style.width = '100px';
        var texto = document.createElement('div');
        //        n.rows[i].cells[1].appendChild(texto);
        //        texto.innerHTML = bar.subpaneles.submenu[e][0].opt[i];
        //        texto.style.fontFamily = 'helvetica';
        //        texto.style.fontSize = '14px';
        n.rows[i].cells[1].innerHTML = bar.subpaneles.submenu[e][0].opt[i];
        n.rows[i].style.fontFamily = 'helvetica';
        n.rows[i].style.fontSize = '14px';
        n.rows[i].cells[0].appendChild(img);
        img.src = bar.subpaneles.submenu[e][0].src[i];
        n.rows[i].fila = e;
        texto.fila = e;
        n.rows[i].fila2 = i;
        n.rows[i].style.background = 'linear-gradient(to bottom, rgba(238,238,238,0.7) 0%,rgba(238,238,238,0.7) 100%)';
        var element = 'm' + e;
        n.rows[i].elem = element;
        for (var k = 0; k < bar.subpaneles.submenu[e][0].opt.length; k++) {
            var funcion = bar.subpaneles.submenu[e][0].fun[k] + h + ',' + i;
            if (funcion.match(/submenu.*/)) {
                cuenta += 1;
            }
        }

        var funcion = bar.subpaneles.submenu[e][0].fun[i] + h + ',' + i;
        if (funcion.match(/submenu.*/)) {
            var oculto = bar.subpaneles.submenu[e][0].fun[i].replace("submenu(", "");
            cuenta += 1;
            oculto = oculto.replace(',', '');
            texto.oculto = oculto;
            n.rows[i].oculto = oculto
            funcion = funcion + ',"' + element + '")';
            n.rows[i].cells[2].innerHTML = '>';
            texto.fila3 = funcion;
            n.rows[i].fila3 = funcion;
            texto.fila = i;
            bar.subpaneles.submenu[e][0].ocultar = 1;
            if (bar.subpaneles.submenu[oculto][0].status == 0) {

                n.rows[i].onmouseover = function (h) {
                    if (document.getElementById('m' + this.oculto) == undefined) {
                        var f = new Function(this.fila3);
                        f();
                        var x = cellcolor(this.elem, this.fila2);
                    } else {
                        var x = cellcolor(this.elem, this.fila2);
                        document.getElementById('m' + this.oculto).style.visibility = 'visible';
                    }
                };

                n.rows[i].cells[2].onmouseover = function (h) {
                    var f = new Function(this.fila3);
                    f();
                };
            }


        } else {
            n.rows[i].onclick = function (h, e) {
                var f = new Function(bar.subpaneles.submenu[this.fila][0].fun[this.fila2]);
                f();
            };
            if (cuenta > 0) {
                texto.onmouseover = function () {
                    ocultar();
                };
                n.rows[i].onmouseover = function (h, e) {
                    var f = cellcolor(this.elem, this.fila2);
                    ocultar();
                };

                //                n.rows[i].cells[2].onmouseover = function () {
                //                    ocultar();
                //                };
            } else {
                n.rows[i].onmouseover = function (h, e) {
                    var f = cellcolor(this.elem, this.fila2);
                };

            }
        }


    }


    tabla1.oculto = e;
    tabla1.rows[s].cells[1].childNodes[0].onmouseover = function (h) {
        document.getElementById('m' + tabla1.oculto).style.visibility = 'visible';
        document.getElementById('d' + j).style.visibility = 'visible';
    };
    var div = document.createElement('div');

    div.setAttribute('id', "d" + e);
    divbarra.appendChild(div);
    div.style.position = 'absolute';
    div.style.top = tope + 8 + 'px';
    div.style.left = izq + 25 + 'px';
    div.appendChild(n);
    n.style.borderBottom = "solid 10px rgba(238, 238, 238,0.7)";
    n.style.borderLeft = "solid 3px rgba(238, 238, 238,0.7)";
    n.style.borderRight = "solid 3px  rgba(238, 238, 238,0.7)";
    n.style.borderBottomLeftRadius = "10px";
    n.style.borderBottomRightRadius = "10px";
    n.style.boxShadow = '5px 11px 50px -14px rgba(51,51,51,1)';

}






var ocultar = function () {
    for (var j = 0; j < bar.subpaneles.id.length; j++) {
        if (document.getElementById('m' + j) != null) {
            if (bar.subpaneles.submenu[j][0].ocultar == 0) {
                console.loG
                document.getElementById('m' + j).style.visibility = 'hidden';
                document.getElementById('d' + j).style.visibility = 'hidden';
            } else {
                document.getElementById('m' + j).style.visibility = 'visible';
                document.getElementById('d' + j).style.visibility = 'hidden';
            }
        }
    }

}

var mostrar = function (e) {
    for (var i = 0; i < bar.opt.length; i++) {
        panel[i].style.display = 'none';
    }
    panel[e].style.display = "block";
    for (var j = 0; j < bar.subpaneles.id.length; j++) {
        if (document.getElementById('m' + j) != null) {
            document.getElementById('m' + j).style.visibility = 'hidden';
        }
    }
    //            reiniciar();

}

function desplegar() {



    for (var i = 0; i < bar.opt.length; i++) {

        barra.rows[0].insertCell(i);
        barra.rows[0].cells[i].innerHTML = bar.opt[i];
        barra.rows[0].cells[i].style.fontFamily = 'helvetica';
        barra.rows[0].cells[i].style.fontSize = '14px';
        var ctx = canvas.getContext("2d");
        var txt = bar.opt[i];
        barra.rows[0].cells[i].style.width = ctx.measureText(txt).width + 35 + 'px';
        barra.rows[0].cells[i].style.textAlign = 'center';
        barra.rows[0].cells[i].fila = i;
        barra.rows[0].cells[i].onclick = function (e) {
            var x = cellcolor2(this.fila);
            var f = new Function(bar.fun[this.fila]);
            for (i = 0; i < bar.opt.length; i++) {
                barra.rows[0].cells[i].onmouseover = function (e) {
                    var f = new Function(bar.fun[this.fila]);
                    var x = cellcolor2(this.fila);
                    f();
                };
            }
            f();
        };
    }



    for (var j = 0; j < bar.opt.length; j++) {
        panel[j] = document.createElement('div');
        t[j] = document.createElement('table');
        t[j].setAttribute('border', '0');
        t[j].setAttribute('cellPading', '0');
        t[j].style.borderSpacing = '0px';

    }




    for (var j = 0; j < bar.opt.length; j++) {
        var h = j;
        for (var i = 0; i < bar.paneles[h][0].opt.length; i++) {
            var img = document.createElement('img');
            t[j].style.width = '200px';
            t[j].insertRow(i);
            t[j].rows[i].insertCell(0);
            t[j].rows[i].insertCell(1);
            t[j].rows[i].insertCell(2);
            t[j].rows[i].style.height = '23px';
            var texto = document.createElement('div');
            //            t[j].rows[i].cells[1].appendChild(texto);
            //            texto.innerHTML = bar.paneles[j][0].opt[i];
            //            texto.style.fontFamily = 'helvetica';
            //            texto.style.fontSize = '14px';
            t[j].rows[i].cells[1].innerHTML = bar.paneles[j][0].opt[i];
            t[j].rows[i].style.fontFamily = 'helvetica';
            t[j].rows[i].style.fontSize = '14px';
            t[j].rows[i].cells[0].appendChild(img);
            t[j].rows[i].cells[0].style.width = '20px';
            t[j].rows[i].cells[1].style.width = '150px';
            img.src = bar.paneles[j][0].src[i];
            t[j].rows[i].fila = i;
            t[j].rows[i].fila2 = h;
            texto.i = i;
            t[j].rows[i].style.background = 'linear-gradient(to bottom, rgba(238,238,238,0.7) 0%,rgba(238,238,238,0.7) 100%)';
            t[j].setAttribute('id', 'w' + j);
            var element = 'w' + j;
            t[j].rows[i].elem = element;
            t[j].rows[i].cells[1].elem = element;
            t[j].rows[i].cells[1].i = i;
            texto.elem = element;
            var funcion = bar.paneles[h][0].fun[i] + h + ',' + i;
            if (funcion.match(/submenu.*/)) {
                var oculto = bar.paneles[h][0].fun[i].replace("submenu(", "");
                oculto = oculto.replace(',', '');
                t[j].rows[i].oculto = oculto;
                funcion = funcion + ',"' + element + '")';
                var flecha = document.createElement('div');
                flecha.j = j;
               t[j].rows[i].cells[2].innerHTML = '>';
                texto.fila3 = funcion;
                t[j].rows[i].fila3 = funcion;
                console.log(bar.subpaneles.submenu[oculto][0])
                if (bar.subpaneles.submenu[oculto][0].status == 0) {
                    //                    texto.onmouseover = function (h) {
                    //                        var f = new Function(this.fila3);
                    //                        f();
                    //                    };
                    t[j].rows[i].onmouseover = function (h, e) {
                            if (document.getElementById('m' + this.oculto) == undefined) {
                                var x = cellcolor(this.elem, this.fila);
                                var f = new Function(this.fila3);
                                f();
                            } else {
                                var x = cellcolor(this.elem, this.fila);
                                document.getElementById('m' + this.oculto).style.visibility = 'visible';

                            }
                        }
                        //                    };

                };
            } else {
                t[j].rows[i].onclick = function (h, e) {
                    var f = new Function(bar.paneles[this.fila2][0].fun[this.fila]);
                    f();

                };

                t[j].rows[i].onmouseover = function (h, e) {
                    var f = cellcolor(this.elem, this.fila);
                    for (var k = 0; k < bar.subpaneles.id.length; k++) {
                        if (document.getElementById('m' + k) != null) {
                            document.getElementById('m' + k).style.visibility = 'hidden';
                        }
                    }
                };
                //                texto.onmouseover=function(){
                //                   for (var k = 0; k < bar.subpaneles.id.length; k++) {
                //                        if (document.getElementById('m' + k) != null) {
                //                            document.getElementById('m' + k).style.visibility = 'hidden';
                //                        }
                //                    }
                //                }


                //                t[j].rows[i].cells[2].onmouseover = function () {
                //                    for (var g = 0; g < bar.subpaneles.id.length; g++) {
                //                        if (document.getElementById('m' + g) != null) {
                //                            document.getElementById('m' + g).style.visibility = 'hidden';
                //                        }
                //                    }
                //                };

            }
            //             t[j].rows[i].onmouseover = function (h, e) {
            //                 console.log('row');
            //                var f = cellcolor(this.elem, this.fila);
            //            };



        }
    }




}

function cellcolor(element, m) {
    for (var i = 0; i < document.getElementById(element).rows.length; i++) {
        document.getElementById(element).rows[i].style.background = 'linear-gradient(to bottom, rgba(238,238,238,0.7) 0%,rgba(238,238,238,0.7) 100%)';
        document.getElementById(element).rows[i].cells[1].style.color = 'black';
        //        document.getElementById(element).rows[i].cells[1].childNodes[0].style.color = 'black';
        document.getElementById(element).rows[i].cells[2].style.color = 'black';
    }
    document.getElementById(element).rows[m].style.background = 'linear-gradient(to bottom, rgba(73,155,234,1) 28%,rgba(73,155,234,1) 37%,rgba(32,124,229,1) 98%,rgba(32,124,229,1) 98%)';
    //    document.getElementById(element).rows[m].cells[1].childNodes[0].style.color = 'white';
    document.getElementById(element).rows[m].cells[1].style.color = 'white';
    document.getElementById(element).rows[m].cells[2].style.color = 'white';
}

function cellcolor2(m) {
    for (var i = 0; i < barra.rows[0].cells.length; i++) {
        barra.rows[0].cells[i].style.background = 'linear-gradient(to bottom, rgba(209,209,209,1) 0%,rgba(209,209,209,1) 0%,rgba(219,219,219,1) 23%,rgba(226,226,226,1) 0%,rgba(226,226,226,1) 10%,rgba(254,254,254,1) 100%)';
        barra.rows[0].cells[i].style.color = 'black';
    }
    barra.rows[0].cells[m].style.background = 'linear-gradient(to bottom, rgba(73,155,234,1) 28%,rgba(73,155,234,1) 37%,rgba(32,124,229,1) 98%,rgba(32,124,229,1) 98%)';
    barra.rows[0].cells[m].style.color = 'white';
}





menu.style.background = 'linear-gradient(to bottom, rgba(209,209,209,1) 0%,rgba(209,209,209,1) 0%,rgba(219,219,219,1) 23%,rgba(226,226,226,1) 0%,rgba(226,226,226,1) 10%,rgba(254,254,254,1) 100%)';
menu.style.borderBottom = 'solid 1px #a6a6a6';


var XMenuElement = document.registerElement('x-menu', {
    prototype: XMenu

});