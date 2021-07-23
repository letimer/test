## 1.ajax
缺点：无浏览历史，不能回退
      存在跨域问题
      seo不友好
优点：无需刷新页面与服务器进行通信，允许根据用户事件（表单，键盘，文档）来更新部分页面内容

## 2.xml和json
xml被设计用来传输和存储数据，与html类似，但是xml中全是自定义标签
ep:<student><name>孙悟空</name></student>
json比xml简洁，而且转换也比xml方便——所以推荐使用json来数据交换

## 3.http:规定了服务器与浏览器之间通信的规则
## 请求报文
...
行     GET/POST等请求类型 /s?ie=utf-8 HTTP/1.1  URL路径  
头     Host:atguigu.com
       Cookie:name=guigu
       Content-type:application/x-www-form-urlencoded
       User-Agent:chrome 83
空行
体     username(如果是get请求，体是空的，如果是post请求，体可以不为空)
...

## 响应报文
...
行     HTTP/1.1 200 ok  (响应协议版本  状态码  状态字符串)
头     Content-type:text/html;charset=utf-8 (服务端发送的类型及采用的编码方式)
       Content-length:2048 (服务端发送的压缩数据的长度)
       Content-encoding:gizp (服务端能够发送压缩编码类型)
空行
体     <html>
            <head></head>
            <body></body>
       </html>
...
