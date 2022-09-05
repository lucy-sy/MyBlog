let express = require('express')
let app = express()
app.use(express.static(__dirname))
app.listen(3000, '127.0.0.1', ()=>{
    console.log("listen 3000...")
})