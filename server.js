require('dotenv').config()
// Require modules
const fs = require('fs') // this engine requires the fs module like we did Saturday
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Pokemon = require('./models/pokemons')


// Create our express app
const app = express()

// Configure the app (app.set)
/*Start Config */
app.use(express.urlencoded({ extended: true })) // This code makes us have req.body
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') // register the jsx view engine
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
  console.log('connected to MongoDB Atlas')
})

/*Start Middleware */

app.use(methodOverride('_method'))

// INDEX --- READ --- GET
app.get('/pokemons', (req, res) => {
  Pokemon.find({}, (err, foundPokemons) => {
    if(err){
      console.error(err)
      res.status(400).send(err)
    } else {
      res.render('pokemons/Index', {
        pokemons: foundPokemons
      })
    }
  })
})

// NEW (Not applicable in an api)
app.get('/pokemons/new', (req, res) => {
  res.render('pokemons/New')
})

// DELETE
app.delete('/pokemons/:id', (req, res) => {
  Pokemon.findByIdAndDelete(req.params.id, (err, deletedPokemon) => {
    if(err){
      console.error(err)
      res.status(400).send(err)
    } else {
      res.redirect('/pokemons')
    }
  })
})

// UPDATE
app.put('/pokemons/:id', (req, res) => {
  req.body.readyToEat === 'on' || req.body.readyToEat === true ? req.body.readyToEat = true : req.body.readyToEat = false
  pokemon.findByIdAndUpdate(req.params.id, req.body, {new: true},(err, updatedPokemon) => {
    if(err){
      console.error(err)
      res.status(400).send(err)
    } else {
      res.redirect(`/pokemons/${updatedPokemon._id}`)
    }
  })
})

// CREATE
app.post('/pokemons', (req, res) =>{
  // req.body which contains all of our form Data we will get from the user
  req.body.readyToEat === 'on' ? req.body.readyToEat = true : req.body.readyToEat = false
  Pokemon.create(req.body, (err, createdPokemon) => {
    if(err){
      console.error(err)
      res.status(400).send(err)
    } else {
      res.redirect(`/pokemons/${createdPokemon._id}`)
      //res.send(createdPokemon)
    }
  })
})


// EDIT (not applicable in an api)
app.get('/pokemons/:id/edit', (req, res) => {
  pokemon.findById(req.params.id, (err, foundPokemon) => {
    if(err){
     console.error(err)
     res.status(400).send(err)
    } else {
     res.render('pokemons/Edit', {
       pokemon: foundPokemon
     })
    }
  })
 })


// SHOW ---- READ ---- GET
app.get('/pokemons/:id', (req, res) => {
 Pokemon.findById(req.params.id, (err, foundPokemon) => {
   if(err){
    console.error(err)
    res.status(400).send(err)
   } else {
    res.render('pokemons/Show', {
      pokemon: foundPokemon
    })
   }
 })
})



// Tell the app to listen on a port
app.listen(3030, () => {
    console.log('Listening on Port 3030')
})



