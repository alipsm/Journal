const mongoose = require("mongoose");
async function connectToDatabase() {
    await mongoose.connect(
        "mongodb+srv://stormDB:sG6aypo9BpwuLfKE@cluster0.6aawd2q.mongodb.net/?retryWrites=true&w=majority",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      );
}
module.exports={
    connectToDatabase
}