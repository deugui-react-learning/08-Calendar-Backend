const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        
        await mongoose.connect( process.env.DB_CNN , {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('DB Online');


    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar BD');
    }


}


module.exports = {
    dbConnection
}

// const mongoose = require('mongoose');


// const dbConnection = async () => {
//     try {

//         await mongoose.connect(process.env.DB_CNN);

//         // const Cat = mongoose.model('Cat', { name: String });

//         // const kitty = new Cat({ name: 'Zildjian' });
//         // kitty.save().then(() => console.log('meow'));

//     } catch (error) {
//         throw new Error('Error a la hora de inicializar la base de datos')
//     }
// }

// module.exports = {
//     dbConnection
// }