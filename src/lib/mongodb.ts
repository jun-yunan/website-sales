import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
    throw new Error('Invalid environment variable: MONGODB_URI');
}

export const connectToMongoDB = async () => {
    try {
        const connect = await mongoose.connect(MONGODB_URI);
        connect && console.log(`Connect database successfully!!!`);
    } catch (error) {
        console.log(error);
    }
};
