import './App.css'
import Cesta from './cesta/Cesta'
import ArticulosDisponibles from './articulosDisponibles/ArticulosDisponibles';
import { useState } from 'react';
function App() {
  const productosInicial = [
    {"id": 1, "nombre": "Laptop", "precio": 800, "stock": 10},
    {"id": 2, "nombre": "Monitor", "precio": 200, "stock": 15},
    {"id": 3, "nombre": "Teclado", "precio": 30, "stock": 50},
    {"id": 4, "nombre": "Mouse", "precio": 20, "stock": 30},
    {"id": 5, "nombre": "Impresora", "precio": 150, "stock": 8},
    {"id": 6, "nombre": "Disco Duro", "precio": 100, "stock": 25},
    {"id": 7, "nombre": "Tarjeta Gráfica", "precio": 300, "stock": 12},
    {"id": 8, "nombre": "Memoria RAM", "precio": 50, "stock": 40},
    {"id": 9, "nombre": "Router", "precio": 40, "stock": 20},
    {"id": 10, "nombre": "Altavoces", "precio": 60, "stock": 18},
    {"id": 11, "nombre": "Webcam", "precio": 25, "stock": 22},
    {"id": 12, "nombre": "Auriculares", "precio": 35, "stock": 15},
    {"id": 13, "nombre": "Cámara de Seguridad", "precio": 70, "stock": 7},
    {"id": 14, "nombre": "Tablet", "precio": 120, "stock": 14},
    {"id": 15, "nombre": "Cargador de Portátil", "precio": 15, "stock": 30},
    {"id": 16, "nombre": "Tarjeta de Red", "precio": 25, "stock": 25},
    {"id": 17, "nombre": "Adaptador Bluetooth", "precio": 10, "stock": 40},
    {"id": 18, "nombre": "Fuente de Alimentación", "precio": 40, "stock": 18},
    {"id": 19, "nombre": "Hub USB", "precio": 12, "stock": 35},
    {"id": 20, "nombre": "Lector de Tarjetas", "precio": 18, "stock": 28},
]
const [productos, setProductos] = useState(productosInicial);
const [productosCesta, setProductosCesta] = useState([]);
  return ( 
    <>
      <Cesta productosCesta={productosCesta}></Cesta>
      <ArticulosDisponibles productos={productos} />
    </>
  )
}

export default App
