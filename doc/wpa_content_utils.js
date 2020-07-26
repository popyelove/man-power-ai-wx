const fs = require("fs")

module.exports = {
  writeToJsonFile(list, fileName) {
    // 打开目标文件
    fs.open(`/Users/jienhui/WeChatProjects/man-power-ai-wx/doc/init/mpa_content/${fileName}.json`, 'w', function (err, fd) {
      // 一行行写入
      var item = null
      const listLength = list.length
      while (item = list.shift()) {
        if(list.length == 0 || list.length == listLength - 1){
          console.log(`+++whiting ${list.length} : ${item.content}`)
        }
        fs.writeFileSync(fd, JSON.stringify(item) + '\n', {
          flag: 'a'
        })
      }
      fs.close(fd, function () {
        console.log('写入文件完成')
      })
    })
  }
}