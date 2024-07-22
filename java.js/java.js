document.addEventListener('DOMContentLoaded', function() {
    const botonesAgregarCarrito = document.querySelectorAll('button[data-producto]');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElement = document.getElementById('total');
    let total = 0;

    botonesAgregarCarrito.forEach(button => {
        button.addEventListener('click', function() {
            const producto = this.getAttribute('data-producto');
            const precio = parseFloat(this.getAttribute('data-precio'));

            const li = document.createElement('li');
            li.textContent = ${producto} - $${precio.toFixed(2)};
            listaCarrito.appendChild(li);

            total += precio;
            totalElement.textContent = total.toFixed(2);
        });
    });
});