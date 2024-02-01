

 function ArticulosDisponibles({productos}){
    return(
        <div>
            <h2>Artículos Disponibles</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map(p=>
                        <tr key={p.id}>
                            <td>{p.nombre}</td>
                            <td>{p.precio}</td>
                            <td>{p.stock}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
   
    );
}
export default ArticulosDisponibles