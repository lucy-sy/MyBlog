const http = require('http')
const data = {
    title: '欢迎来到首页',
    user: 'admin'
}
const server = http.createServer((req, resp) => {
  // 接收代理服务器传来的数据 
  if(req.method == 'POST') {
    let body = ''
    req.on('data', chunk => {
        body += chunk
    })
    req.on('end' ,() => {
        console.log(body)
        resp.end(JSON.stringify(data))
    })
  }
})
server.listen(4000, () => {
  console.log('The server is running at http://localhost:4000')
})