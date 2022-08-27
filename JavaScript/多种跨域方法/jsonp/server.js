let express = require('express')
let app = express()

app.get('/jsonp', (req, resp) => {
    let params = req.query
    console.log('params', params)
    let data = {
        name: '李华',
        age: 18
    }
    console.log(data)
    resp.end(`${params.callback}(${JSON.stringify(data)})`)
})

app.listen(3300, 'localhost', () => {
    console.log('监听3300')
})