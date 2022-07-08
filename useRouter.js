const express = require('express')
const app = express()
const birds = require('./birds')

app.use('/birds', birds)

const PORT = 3000

app.listen(PORT, ()=>{
    console.log(`Server listening at PORT ${PORT}`)
})