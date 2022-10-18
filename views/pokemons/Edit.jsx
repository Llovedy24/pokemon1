const React = require('react')

class Edit extends React.Component {
    render(){
        const {name, _id, color, readyToEat} = this.props.pokemon
        return (
            <>
                <h1>Edit This Pokemon</h1>
                <nav>
                    <a href="/pokemons"> Go Back To Pokemons Home</a>
                </nav>
                <form method="POST" action={`/pokemons/${_id}?_method=PUT`}>
                    Name: <input type="text" name="name" defaultValue={name}></input><br/>
                    Color: <input type="text" name="color" defaultValue={color}></input><br />
                    Is Ready To Eat: <input type="checkbox" name="readyToEat" defaultChecked={readyToEat}/> <br />
                    <input type="submit" value="Edit Pokemon" />
                </form>
            </>
        )
    }
}

module.exports = Edit
