const React = require('react')

class New extends React.Component {
    render(){
        return (
            <>
            <h1>Create A New Pokemon</h1>
            <nav>
                <a href="/pokemons"> Go Back To Vegetables Home Page</a>
            </nav>
            <form method="POST" action="/vegetables">
                Name: <input type="text" name="name" placeholder='Name of Pokemon Here'></input><br/>
                Color: <input type="text" name="color" placeholder='Color of Pokemon Here'></input><br/>
                Is Ready To Eat: <input type="checkbox" name="readyToEat"></input><br/>
                <input type="submit" value="Submit Pokemon"></input>
            </form>
            </>
        )
    }
}

module.exports = New

