
function Cesta({productosCesta}){
    return (     
        <>
            <h2>Cesta</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {productosCesta.map(p=>{
                        <tr key={p.id}>
                            <td>{p.nombre}</td>
                            <td>{p.precio}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    );
}

export default Cesta;