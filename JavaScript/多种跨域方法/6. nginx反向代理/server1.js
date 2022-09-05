let express = require('express')
let app = express()
// 服务器1 4000端口
app.post('/', (req, resp) => {
    console.log(req.query)
    let data = {
        title: '欢迎访问server1',
        user: 'server'
    }
    resp.end(JSON.stringify(data))
})

app.listen(4000, () => {
    console.log('Server1 is runnong 4000...')
})