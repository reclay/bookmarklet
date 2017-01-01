# bookmarklet
书签小程序，代替chrome extension

对一些不想看到的网站内容进行屏蔽，对一些布局感觉不好的调整布局

## bookmarklet比chrome extension好

- 安装快速

　　拖到浏览器就可以。所有浏览器都原生支持。

- 使用方便

　　用的时候点一下就可以。

- 开发容易

　　一段Javascript代码就是bookmarklet的所有内容，不需要用到其他技术，比开发一个浏览器插件简单多了。

见[阮一峰·Bookmarklet编写指南](http://www.ruanyifeng.com/blog/2011/06/a_guide_for_writing_bookmarklet.html)

## 只需要维护custom.js和custom.css

## bookmarklet被csp（Content Security Policy）协议阻挡的解决方案

chrome：使用插件禁掉csp  [chrome禁csp插件](https://chrome.google.com/webstore/detail/disable-content-security/ieelmcmcagommplceebfedjlakkhpden)

firefox: 直接在about:config设置security.csp.enable为false
