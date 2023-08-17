import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    // mongodb+srv://<username>:<password>@cluster0.6rjy7l7.mongodb.net/<database-name>?retryWrites=true&w=majority
    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.6rjy7l7.mongodb.net/<database-name>?retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    });

    mongoose.connection.on('error', (error) => {
        console.log('Error while connecting with the database ', error.message);
    });
};

export default Connection;
