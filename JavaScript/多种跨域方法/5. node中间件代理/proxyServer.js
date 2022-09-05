// 代理服务器(http://localhost:3000)
let express = require('express')
let http = require('http')
let app = express()
app.use(express.static(__dirname))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// 第一步：接收客户端的请求
app.post('/', (req, resp) => {
    // 获取客户端传过来的参数
    console.log(req.body)

    // 代理服务器，直接和浏览器直接交互，需要设置CORS 的首部字段
    resp.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
    })

    // 设置将要转发给服务器的参数配置
    let options = {
        host: '127.0.0.1',
        port: '4000',
        url: '/',
        method: req.method,
        headers: req.headers,
    }
    // 第二步：将请求转发给服务器
    let proxyRequest = http.request(options, (response) => {
        // 第三步：收到服务器的响应
        let body = ''
        response.on('data', chunk => {
            body += chunk
        })
        response.on('end', () => {
            // 第四步：将响应结果转发给浏览器
            resp.end(body)
        })
    })
    proxyRequest.write(JSON.stringify(req.body))
    proxyRequest.end()
})

app.listen(3000, () => {
    console.log('the server is running 3000...')
})