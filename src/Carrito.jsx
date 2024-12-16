import React, { useState } from 'react';
import { Container, Row, Col, Button, Table } from 'reactstrap';
import './Carrito.css';

function Carrito() {
  // Datos de ejemplo para el carrito
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Manzanas', price: 2.5, quantity: 3 },
    { id: 2, name: 'Leche Entera', price: 1.8, quantity: 2 },
    { id: 3, name: 'Carne de Res', price: 12.0, quantity: 1 },
  ]);

  // Función para calcular el total
  const getTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Función para eliminar un producto
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <Container className="carrito-page py-5">
      <h1 className="text-center mb-4">Carrito de Compras</h1>

      {cartItems.length > 0 ? (
        <>
          {/* Tabla de productos */}
          <Table responsive className="cart-table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <Button color="danger" size="sm" onClick={() => removeItem(item.id)}>
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Resumen del carrito */}
          <div className="cart-summary mt-4">
            <h4>Total: ${getTotal().toFixed(2)}</h4>
            <Button color="success" className="mt-3" block>
              Proceder al Pago
            </Button>
          </div>
        </>
      ) : (
        <p className="text-center">Tu carrito está vacío.</p>
      )}
    </Container>
  );
}

export default Carrito;
