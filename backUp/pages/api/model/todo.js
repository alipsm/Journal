import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema({
    title:String,
    completed:Boolean
})

// const Todoo = mongoose.model('Todoo',TodoSchema)

// export default Todoo
module.exports= mongoose.models.Todoo ||mongoose.model('Todoo',TodoSchema)
