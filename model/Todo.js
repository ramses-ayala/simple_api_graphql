import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        unique: true
    },
    done: {
        type: Boolean,
        default: false
    }
})

export const Todo = mongoose.model('Todo', TodoSchema);