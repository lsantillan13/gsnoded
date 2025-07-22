import mongoose from "mongoose";

mongoose.connect('mongodb+srv://holasoylautaro:GSDB@cluster0.6i31l4j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(db => (console.log('DB is connected')))
    .catch(err => console.error(err));
