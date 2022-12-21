const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ux_trendz_mean_DB', (err) => {
    if(!err) {
        console.log('connection successful');
    } else {
        console.log("Error in connection");
    }
})

module.exports = mongoose;