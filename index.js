class Libro {
    constructor(nombre, autor, precio, cantidad) {
        this.nombre = nombre.toUpperCase();
        this.autor = autor.toUpperCase();
        this.precio = parseFloat(precio);
        this.cantidad = cantidad;
        this.vendido = false;
        this.stock = true;
    }

    SumarIva() {
        this.precio = this.precio * 1.21;
    }

    vender() {
        this.vendido = true;
    }
}

var arrayLibros = [];
do {
    var comprobacion = prompt('Ingresar nombre del libro o FIN para terminar la compra');
    if (comprobacion === 'fin' || comprobacion === 'FIN' || comprobacion === 'Fin'){
        break;
    } else {
        var nombreLibro = comprobacion;
        var autorLibro = prompt('ingrese el autor del libro');
        var precioLibro = prompt ('ingrese el precio del libro');
        arrayLibros.push(new Libro(nombreLibro, autorLibro, precioLibro, cantidadLibro));
    }
}
while (comprobacion != 'fin' || comprobacion != 'FIN' || comprobacion != 'Fin');

console.log(arrayLibros);


// Libros sin stock //

var sinStock = arrayLibros.filter(item => item.cantidad == 0 || item.stock == false);
console.log (sinStock);
document.write('<h4> Lista de Libros sin Stock (cantidad = 0 o disponible = false): </h4>')

for (var libro of sinStock) {
    document.write('<ul><li>Nombre: ' + Libro.nombre + '</li>');
    document.write('<li>Autor: ' + Libro.autor + '</li>');
    document.write('<li>Precio: ' + Libro.precio + '</li></ul>');
    document.write('<li>cantidad: ' + Libro.cantidad + '</li></ul><br>');
}

// Buscar un libro especifico por autor //

var ingresado = prompt ('ingresar el autor que quiero buscar');
var autorIngresado = arrayLibros.filter(libro => libro.autor.includes(ingresado));
console.log(autorIngresado);
document.write('<h4> Lista de Libros del autor que quiero buscar: </h4>');

for (var libro of autorIngresado) {
    document.write('<ul><li>Nombre: ' + Libro.nombre + '</li>');
    document.write('<li>Autor: ' + Libro.autor + '</li>');
    document.write('<li>Precio: ' + Libro.precio + '</li></ul><br>');
}

// Ordenar por precio //
var ordenadosPrecio = []
ordenadosPrecio = arrayLibros.map(elemento => elemento);
var ordenadosPrecio = arrayLibros;
ordenadosPrecio.sort(function(a, b) {
    return a.precio - b.precio;
});
console.log('Libros ordenados por precio de mayor a menor:');
console.log(ordenadosPrecio);
document.write('<h4> Lista de Productos ordenados por precio de mayor a menos: </h4>');

for (var libro of ordenadosPrecio) {
    document.write('<ul><li>Nombre: ' + Libro.nombre + '</li>');
    document.write('<li>Autor: ' + Libro.autor + '</li>');
    document.write('<li>Precio: ' + Libro.precio + '</li></ul><br>');
}

const libros = []
libros.push = (new Libro ('Harry Potter y la piedra filosofal', 'J. K. Rowling', '1500'));
libros.push = (new Libro ('IT', 'Stephen King', '2700'));
libros.push = (new Libro ('Rayuela', 'Julio Cortázar', '1500'));
libros.push = (new Libro ('El sobrino del mago', 'C.S. Lewis', '1000'));
libros.push = (new Libro ('El señor de los anillos: la comunidad del anillo', 'J. R. R. Tolkien', '1200'));
libros.push = (new Libro ('Juego de tronos', 'George R. R. Martin', '2500'));

for (const Libro of libros) {
    let contenedor = document.createElement('div');
    contenedor.innerHTML = `<h3> Nombre: ${Libro.nombre} </h3>
                            <h4> Autor: ${Libro.autor} </h4>
                            <h5> $ ${Libro.precio} </h5>`
    contenedor.className = 'container'
    document.body.appendChild(contenedor);
}