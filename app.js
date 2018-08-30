// 引入编写样式到js中一起打包
require("./index.scss");

// 编写js动态修改html的font-size的大小

// 获取屏幕宽度
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
// 获取html标签节点
let htmlDOM = document.getElementsByTagName('html')[0];
// 通过屏幕的宽度除以10  来动态的修改html的font-size的大小
htmlDOM.style.fontSize = htmlWidth / 10 + 'px';


// 添加缩放事件 resize   兼容缩放的时候适配
window.addEventListener('resize',(e) => {

	let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;

	htmlDOM.style.fontSize = htmlWidth / 10 + 'px';
})