/* const express = require('express')
const { todoSchema } = require('./types')
const app = express()
const port = 3000
const {Todo } = require('./db')
// use express.json webtoken
app.use(express.json())


app.get('/todos', async (req, res) => {

    const todos = await Todo.find();
    res.send(todos);
})

app.post("/todo", async (req, res) => {
    const createPayLoad = req.body;
    console.log(createTodo);
    const paresedPayload = todoSchema.safeParse(createPayLoad);
    if(!paresedPayload.success){
        res.status(411).send(paresedPayload.error);
        return;
    }
    // put it in database (mongoDB)
    await Todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false,
    })

    
    res.send("Created Todo");

}
)

app.put("/todos", async (req, res) => {
    const updatePayload = req.body;
    console.log(updatePayload);
    const parsedPayload = todoUpdateSchema.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).send(parsedPayload.error);
        return;
    }
    // put it in database (mongoDB)
    await 

    
    res.send("Updated Todo");
}
)




// ---------------------------------------------------------------------- //
app.listen(port, () => console.log(`Example app listening on port ${port}!`)); */

const express = require('express');
const { todoSchema, todoUpdateSchema } = require('./types');
const app = express();
const port = 3000;
const cors = require('cors');
const { Todo } = require('./db');


app.use(express.json());
app.use(cors());

app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.send(todos);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

app.post('/todo', async (req, res) => {
  try {
    const createPayload = req.body;
    const parsedPayload = todoSchema.safeParse(createPayload);

    if (!parsedPayload.success) {
      res.status(400).send(parsedPayload.error);
      return;
    }

    await Todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false,
    });
    console.log("todo created"); // this is not getting printed in the console but the todo is getting created in the database this is because we are not sending any response from the server to the client and the client is waiting for the response and hence the request is not getting completed and hence the console.log is not getting printed to fix this we need to send a response from the server to the client i.e res.send("Created Todo") and now the console.log is getting printed in the console
    res.send('Created Todo');

  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

app.put('/todos/:id', async (req, res) => {
  try {
    const todoId = req.params.id;
    const updatePayload = req.body;

    const parsedPayload = todoUpdateSchema.safeParse(updatePayload);
    if (!parsedPayload.success) {
      res.status(400).send(parsedPayload.error);
      return;
    }

    const updatedTodo = await Todo.findByIdAndUpdate(
      todoId,
      { $set: updatePayload }, // Use the entire updatePayload directly
      { new: true }
    );

    if (!updatedTodo) {
      res.status(404).send('Todo not found');
      return;
    }

    res.send('Updated Todo');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});


app.put('/completed', async (req, res) => {
  try {
    const updatePayload = req.body;
    const parsedPayload = todoUpdateSchema.safeParse(updatePayload);
    if (!parsedPayload.success) {
      res.status(400).send(parsedPayload.error);
      return;
    }

    const updatedTodo = await Todo.findByIdAndUpdate(
      updatePayload.id,
      { $set: { completed: true } },
      { new: true } // new : true means that the updated todo will be returned
    );

    if (!updatedTodo) {
      res.status(404).send('Todo not found');
      return;
    }

    res.send('Completed Todo');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
