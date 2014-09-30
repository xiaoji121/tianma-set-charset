tianma-set-charset
==================

tianma filter---set charset for specified request path


## 使用方法

```javascript
tianma({ charset: 'gbk', port: 80 })
    .mount('/')
        .use('tianma-set-charset', {
            rules: [
                /^\/app\/maya/,
                '^/m/'
            ],
            charset: 'utf-8'
        })
        .static()
```

## 参数

* rules

要指定编码的路径规则的数组，数组中的每一项可以为正则对象，也可以是正则字符串。例如：

```javascript
   rules: [
       /^\/app\/maya/,
       '^/m/'
   ]
```

* charset

要将上面规则中匹配到的请求路径设置成指定编码
