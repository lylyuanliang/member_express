/**
 * 一些工具方法
 * @author liurl
 *
 */
//引入node fs进行文件读写
import {saveAs as fileSave} from "../static/fileSave.js";
import Constants from "./constants.js";
export default class Common {
    /**
     * 构造函数
     */
    constructor() {

    }

    /**
     * ajax定义
     *      可以只传路径或只传ajax参数配置
     * @param url 请求路径
     * @param options ajax参数配置
     */
    static $ajax(url) {
        let _this = this;
        let options = {};
        if ( typeof url === "object" ) {
            options = url;
        }
        //设置默认值
        options.type = options.type || "GET";
        options.dataType = options.dataType || "json";
        options.success = options.success || function(data) {
            _this.showMessage(data);
        };
        //调用jq ajax
        return $.ajax(options);
    }

    /**
     * 弹出层方法重载
     * @param message
     */
    static showMessage(message) {
        this.showMessage(message, "1");
    }

    /**
     * 弹出层方法
     * @param message 弹出消息
     * @param type 弹出层样式类型，暂未使用
     */
    static showMessage(message, type) {
        alert(message);
    }

    /**
     * 创建父元素
     * @param elementStr 元素标签字符串，比如"<ul></ul>"
     */
    static createJQElement(elementStr) {
        return $(elementStr);
    }

    /**
     * 绑定事件
     * @param eventName 事件名称
     * @param selector 选择器
     * @param collback 回调函数
     * @param consignedSelector 委托元素
     */
    static bindEvent4Element(eventName, selector, callback, consignedSelector) {
        //采用事件委托的方式进行事件绑定
        //默认委托给body标签
        consignedSelector = consignedSelector || "body";
        $(consignedSelector).on(eventName, selector, callback);
    }
    /**
     * 文件保存
     * @param data 要保存的数据
     * @param fileName 文件名
     */
    static saveFile(data, fileName) {
        fileName = fileName || `${Constants.FILE.FILE_NAME}${Constants.FILE.FILE_SUFFIX}`;
        let blob = new Blob([JSON.stringify(data)], {type: "text/plain;charset=utf-8"});
        fileSave.saveAs(blob, `${fileName}`);
    }
}