
const { connectDB } = require('./src/database/db')
require('dotenv').config()
const port= process.env.PORT
const { app } = require('./src/app')
connectDB().then(() => {
    app.listen(port || 5000, () => {
        console.log(`server runing on port ${port} url: http://localhost:${port}`)
    })
}
).catch((err)=>{
    console.log("error from ndex.js / database connection error", err);
    
})

