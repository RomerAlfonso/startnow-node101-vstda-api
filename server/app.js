const express = require('express');
const morgan = require('morgan');

const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json())


let todo = [
    {
        todoItemId: 0,
        name: 'an item',
        priority: 3,
        completed: false
    },
    {
        todoItemId: 1,
        name: 'another item',
        priority: 2,
        completed: false
    },
    {
        todoItemId: 2,
        name: 'a done item',
        priority: 1,
        completed: true
    }
];


// add your code here
app.get('/', function (req, res) {
    let ret = {
        status: 'ok'
    }
    res.send(ret);
})

app.get('/api/TodoItems', function (req, res) {
    res.send(todo);
})
app.get('/api/TodoItems/:number', function (req, res) {
    //grab the number requested :number

    //this :number is inside req
    var number = req.params.number
    for (var i = 0; i < todo.length; i++) {
        if (todo[i].todoItemId == number) {
            res.send(todo[i]);
        }
    }
})

app.post('/api/TodoItems', function (req, res) {
    let newdo = {
        'todoItemId': req.body.todoItemId,
        'name': req.body.name,
        'priority': req.body.priority,
        'completed': req.body.completed
    }
    todo.push(newdo);
    res.status(201).send(newdo);
});
  

     app.delete('/api/TodoItems/:number',function(req,res){
    //find the req.body.todoItemId in todos, pop, return that object back to the user
    var number = req.params.number
    for (var i = 0; i < todo.length; i++) {
        if (todo[i].todoItemId == number) {
           res.send(todo[i]);
           res.delete(todo[i]);
        }
    }
})
    


    module.exports = app;
