let express = require('express')
let app = express()
// 服务器2 5000端口
app.post('/', (req, resp) => {
    console.log(req.query)
    let data = {
        title: '欢迎访问server2',
        user: 'server'
    }
    resp.end(JSON.stringify(data))
})

app.listen(5000, () => {
    console.log('Server2 is runnong 5000...')
})