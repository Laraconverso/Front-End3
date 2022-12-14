import {useState} from 'react'
import Swal from 'sweetalert2';

const Rejuvenecedor =()=>{
    
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [error, setError] = useState(true);

    const handleChangeNombre= (event)=>{
        setNombre(event.target.value);
        console.log("Changed" + event);
    }

    const handleChangeEdad = (event)=>{
        setEdad(event.target.value);
        console.log("Changed" + event)
    }

    const handleSubmit = (event)=> {
        event.preventDefault();
        if(nombre ==='' || edad < 0){
            setError(true);
        } else{
            const newEdad = edad-10;
            Swal.fire("Nombre: " + nombre + " Edad: " + newEdad);
            setNombre("");
            setEdad("");
            setError(false);
            console.log("Submitted");
        }  
    }

        return(
            <div>
                <form onSubmit={handleSubmit}>
                <br/>
                    <label htmlFor="">Nombre </label> <br/><br/>
                    <input type="text" onChange={handleChangeNombre} required value={nombre}/> <br/><br/>
                    {error && <p>Completa este casillero</p>}
                    <label htmlFor="">Edad </label> <br/><br/>
                    <input type="int" onChange={handleChangeEdad} required value={edad}/> <br/><br/>
                    {error && <p>Completa este casillero</p>}
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    
}

export default Rejuvenecedor;