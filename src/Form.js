import axios from "axios"
import { useState } from "react"

const Form = props => {
    const [username, setUsername] = useState('')
    let handleSubmit = event => {
        event.preventDefault()
        axios.get(`https://api.github.com/users/${username}`)
        .then( response => {
            props.onSubmit(response.data)
            setUsername('')
        })
        .catch( error => console.log(error) )
    }
    return(
        <form onSubmit={handleSubmit} >
            <input 
            type="text"
            value={username}
            onChange = {event => setUsername(event.target.value)}
            placeholder="Enter Github Username"
            className="form-control mx-auto col-lg-4 my-3"
            required
            /> <span></span>
            <button className="btn btn-info" >Add Card</button>
        </form>
    )
}
export default Form;