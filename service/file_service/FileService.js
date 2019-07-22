/**
 * 文件操作Controller
 */
const FILE = eval('require("fs")');
class FileService {
    /**
     * 文件读取，使用node.js的方法
     * @param url
     */
     readFile(url) {
        let fileData = FILE.readFileSync(url, {encoding: 'utf8'});
        return fileData;
    }

    /**
     * 追加文件保存
     * @param url
     * @param data
     */
    saveFile(url, data) {
         FILE.writeFile(url, data, {encoding: 'utf8'}, function (error) {
             if(error) {
                 throw error;
             }
             console.log("成功了。。");
         })
    }
}

module.exports = FileService;