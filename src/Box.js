import "./Box.css"

function Box({id , firstName, lastName, age}){
    return(

        <div className="boxContainer">
            <p>id : {id}</p>
            <p>first name: {firstName}</p>
            <p>last name : {lastName}</p>
            <p>age : {age} yrs old</p>
        </div>

    )
}

export default Box