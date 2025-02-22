const todo = require('../model/todo')

const addTodo = async(req, res)=>{
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    try {
      const newTodo = await todo.create(req.body);
      return res.status(201).json({message: 'Todo created' , newTodo});
    } catch (error) {
      return res.status(500).json({ message: "Server Error" , error: error.message });
    }
}
const getTodo = async(req, res)=>{
    const getAllTodo = await todo.find({});
    try {
      if (getAllTodo) {
        return res.status(200).json({ message: "getAllData", getAllTodo });
      }
    } catch (error) {
      return res.status(500).json({ message: "server error", error: error.message });
    }

}
const updateTodo = async(req, res)=>{
    const { id } = req.params;
    try {
        const updateTodo = await todo.findByIdAndUpdate({
            _id: id}, req.body, {new: true})
        return res.status(200).json({ message: "deleteUserData", updateTodo });
    } catch (error) {
        return res.status(500).json({ message: "deleteUserData", error: error.message });        
    }

}
const deleteTodo  = async(req ,res)=>{
    const { id } = req.params;
    const deleteUserData = await todo.findByIdAndDelete({ _id: id });
    try {
      if (deleteUserData) {
        return res.status(200).json({ message: "deleteUserData", deleteUserData });
      }
    } catch (error) {
      return res.status(500).json({ message: "server error", error: error.message });
    }
}

module.exports= {
    addTodo,
    getTodo,
    updateTodo,
    deleteTodo
}
