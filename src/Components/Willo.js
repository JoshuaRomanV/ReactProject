import React, {Component} from 'react';

class Willo extends Component{

    render(){
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Peperoni'],
            calorias: 400
        };

        return(

          <div className = "willo">
            <h1>{receta.calorias}</h1>
            <h2> {'Nombre:' + receta.nombre}</h2>
            <ol>
                {
                receta.ingredientes.map((ingredientes, i) =>{
                    console.log(ingredientes);

                    return(
                        <li key= {i}>
                            {ingredientes}
                        </li>
                    )
                })
            }
            </ol>
            <hr/>
         </div>

        );
    }
}

export default Willo;