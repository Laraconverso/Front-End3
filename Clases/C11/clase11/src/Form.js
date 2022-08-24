import {useState} from 'react'
import Swal from 'sweetalert2'

const Form = ()=>{

    const [name, setName] = useState("Ricardo");
    const [error, setError] = useState(false);

    const handleChange = (event)=>{
        setName(event.target.value);
        console.log("Changed" + event);
    }
    const handleSubmit = ()=> {
        if(name ===''){
            setError(true);
        } else{
            Swal.fire("BUUENAASS! " + name);
            setName("");
            setError(false);
        }
        console.log("Submitted");
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <br/>
                <label htmlFor="">Name </label> <br/><br/>
                <input type="text" onChange={handleChange}/> <br/><br/>
                {error && <p>Completa este casillero</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;