const { Router } = require('express');
const { last } = require('underscore');
const router = Router();

const _ = require('underscore');

const users = require('./users.json');

//optener users
router.get('/', (req,res) => {
    res.status(200).json(users);
});

//insertar users
router.post('/', (req , res) => {
    const { name, lastName, email, age} = req.body;
    const id = users.length + 1;
    const newMovie = {...req.body,id};
    if(name && lastName && email && age){
        users.push(newMovie);
    }else{
        res.json({error: "falta un dato"});
    };
    res.status(200).json(users);
    
});

//actualizar un usuario
router.put('/:id', (req, res) => {
    const { name, lastName, email, age} = req.body;
    const { id } = req.params;
    if(name && lastName && email && age){
        _.each(users, (user, i)=> {
            if(user.id == id){
                user.name = name;
                user.lastName = lastName;
                user.email = email;
                user.age = age; 
                
            };
        });
        res.json(users);
    }else{
        res.status(500).json({error: 'there was an error'})
    };
    
});

//eliminar usuario
router.delete('/:id', (req , res ) => {
    const { id } = req.params;
    _.each(users, (user, i) => {
        if(user.id == id){
            users.splice(i, 1);
        }
    });
    res.json(users);
});

module.exports = router;