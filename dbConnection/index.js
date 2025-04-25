import mongoose from 'mongoose';

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true })
    } catch (e) {
        console.log('Ocurred an error connecting DB: ', e)
        process.exit(1)
    }
}

export { dbConnect }