# 跨域 学习-问题 记录

## jsonp

1. 原理

   **利用 `<script>` 标签没有跨域限制的漏洞**，网页可以得到其他网站的数据。JSONP请求一定需要对方的服务器做支持。

2. jsonp 与 ajax对比

   AJAX属于同源策略，JSONP属于非同源策略

3. jsonp优缺点

   - 优点：简单兼容性好，可用于解决主流浏览器的跨域数据访问的问题。
   - 缺点：**仅支持get方法具有局限性,不安全可能会遭受XSS攻击。**

4. jsonp实现流程

   - 声明一个回调函数，其函数名(如show)当做参数值，传递给跨域请求数据的服务器，函数形参为服务器返回的`data`。

   - 创建一个`<script>`标签，将跨域的**API数据接口地址**赋值给`script.src`，将回调函数以传参的形式传递给服务器。

     ```js
     script.src = `${url}?callback=show`
     ```

   - 服务器接收到请求后，需要进行特殊的处理：把传递进来的函数名和它需要给你的数据拼接成一个字符串,例如：传递进去的函数名是show，它准备好的数据是`show('hello')`。

   - 最后服务器把准备的数据通过HTTP协议返回给客户端，客户端再调用执行之前声明的回调函数（show），对返回的数据进行操作。

## CORS

1. 浏览器会自动进行 CORS 通信，实现 CORS 通信的关键是后端。只要后端实现了 CORS，就实现了跨域。
2. 服务端设置 `Access-Control-Allow-Origin` 就可以开启 CORS。 该属性表示哪些域名可以访问资源，如果设置通配符则表示所有网站都可以访问资源。

## postMessage

1. 介绍

   `postMessage()`方法允许来自**不同源的脚本**采用**异步**的方式进行有限的通信。是window属性之一。

2. 解决的问题

   - 页面和其打开的新窗口之间的数据传递。
   - 页面与嵌套的iframe之间的消息传递。
   - 多窗口之间的消息传递。

3. 语法

   ```js
   receiveWindow.postMessage(message, targetOrigin, [transfer]);
   ```

   - `receiveWindow`：接收方的`window`对象。获取方法如下：
     - 通过`window.open(url)`返回新打开页面的`window`对象。
     - 通过`window.opener`获取打开当前窗口的引用窗口的window对象。
     - 通过`iframe.contentWindow`属性获取`iframe`标签内页面的window对象。
     - 通过`window.parent`获取`iframe`标签内页面的引用窗口的window对象。
   - `message`：发送给目标window的数据。
   - `targetOrigin`：指定接收消息事件的窗口，其值可以是字符串“*”（表示无限制）或者一个 URI（如果要指定和当前窗口同源的话可设置为"/"）。
   - `transfer`(可选)：是一串和`message` 同时传递的 `Transferable` 对象.。这些对象的所有权将被转移给消息的接收方，而发送一方将不再保有所有权。

4. 接收消息

   ```js
   window.onmessage = function(event) {
       console.log(event.data)
       event.source.postMessage(message, event.origin)
   }
   ```

   `event`的属性：

   - `data`： 发送方发送的`message`。 
   - `source`: 发送方的`window`对象的引用。 
   - `origin`: 发送方所属的域。

5. 使用中遇到的问题

   通过`window.open(url)`打开新窗口后，即使使用了`onload`，也无法通过`postMessage()`向新窗口传递参数。

6. 原因

   **新窗口**必须**先完成**监听事件`message`的添加，否则即使引用窗口使用`onload`，也无法传递参数过去。

7. 解决办法

   1. 先了解页面加载顺序以及触发的事件：
      1. 页面加载顺序：
         - 解析HTML文档结构
         - 加载外部样式表及JavaScript脚本
         - 解析执行JavaScript脚本
         - DOM渲染完成
         - 加载未完成的资源（图片等）
         - 页面加载完成
      2. 页面加载过程中触发的事件：
         1. `document.onreadystatechange`：文档加载状态改变事件，页面加载状态改变时执行。
            - `document.readyState`属性：描述了文档的加载状态。整个加载过程中`document.readyState`会不断变化，每次变化都触发`readystatechange`事件。共四种状态
              1. `loading`： 正在加载
              2. `document `：仍在加载
              3. `interactive`： 可交互，互动文档加载完成，文档解析完成，但是如图像，样式表和框架等子资源仍在加载中。
              4. `complete`：完成，文档和所有子资源已完成加载，`load`状态的事件即将被触发。
         2. `document.DOMContentLoaded`：DOM树渲染完成时候触发该事件。只需对 DOM 树的等待，无需对图像或外部资源加载的等待。
         3. `window.onload`：当所有的资源全部加载完成后会触发该事件。
   2. 具体解决步骤：
      - 新窗口在`document.readyState == "complete" `时添加`message`监听事件。此时文档已全部完成加载且`onload`还未被触发。

   ![image-20220902214325662](C:\Users\DELL\AppData\Roaming\Typora\typora-user-images\image-20220902214325662.png)

## node中间件

1. 实现原理

   浏览器需要遵循同源策略，服务器向服务器请求不需要遵循同源策略。

2. 代理服务器的作用

   1. 接受客户端请求 
   2. 将 请求 转发给服务器
   3. 拿到服务器 响应 数据
   4. 将 响应 转发给客户端。

## nginx反向代理

1. nginx的作用

   - 正向代理
   - 反向代理
   - 负载均衡

2. 实现原理

   类似于Node中间件代理，需要搭建一个中转`nginx`服务器，用于转发请求。

3. 实现思路

   通过`nginx`配置一个代理服务器（域名与domain1相同，端口不同）做跳板机，反向代理访问domain2接口，并且可以顺便修改cookie中domain信息，方便当前域cookie写入，实现跨域登录。

4. 配置`nginx`服务器

   1. 先下载**nginx**，然后修改nginx目录下的nginx.conf文件：

      ```js
       # 代理服务器
          server {
              listen       81;
              server_name  localhost;
      
              location /server1 {
                  proxy_pass http://127.0.0.1:4000/; # 反向代理
                  proxy_cookie_domain http://127.0.0.1 http://127.0.0.1; # 修改cookie里的域名
                  index index.html index.htm;
      
                  # 当用webpack-dev-server等中间件代理接口访问nignx时，此时无浏览器参与，故没有同源限制，下面的跨域配置可不启用
                  add_header Access-Control-Allow-Origin *;  #当前端只跨域不带cookie时，可为*
                  add_header Access-Control-Allow-Credentials true;
                  add_header Access-Control-Allow-Headers *; 
              }
      
              location /server2 {
                  proxy_pass http://localhost:5000/; # 反向代理
                  proxy_cookie_domain http://127.0.0.1 http://127.0.0.1; # 修改cookie里的域名
                  index index.html index.htm;
      
                  # 当用webpack-dev-server等中间件代理接口访问nignx时，此时无浏览器参与，故没有同源限制，下面的跨域配置可不启用
                  add_header Access-Control-Allow-Origin *;  #当前端只跨域不带cookie时，可为*
                  add_header Access-Control-Allow-Credentials true;
                  add_header Access-Control-Allow-Headers *; 
              }
      
            
          }
      ```

   2. `nginx` 的命令行常用命令

      - `nginx.exe` ：启动nginx
      - `nginx -s reload`：加载nginx
      - `nginx -s quit`：关闭nginx
      - `taskkill /f /t /im nginx.exe`：若nginx无法关闭，则使用杀死进程的方法

      ![image-20220905235418927](C:\Users\DELL\AppData\Roaming\Typora\typora-user-images\image-20220905235418927.png)

