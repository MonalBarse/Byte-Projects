const z = require('zod');

const todoSchema = z.object({
    title: z.string().min(3).max(100),
    description: z.string().min(10).max(1000),
});

const todoUpdateSchema = z.object({
    id: z.string(),
    // Allow any other fields to be present in the update payload
  });
  


module.exports = {
    todoSchema,
    todoUpdateSchema
}