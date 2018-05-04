/**
 * author: dhq
 * date 2018-5-4
 */

//  服务于任何图片元素,img幕后,再将元素origin_src设置过去
 var LazyLoadImage=(function(){
    // 变量的冒泡查找
    return {
        setSrc:function(ele){
            const url=ele.getAttribute('origin_src')?ele.getAttribute('origin_src'):'';
            if(!url) return ;
            const oImg=document.createElement('img');
            // 不会影响页面,none 会离开文档流
            // opacity:0 这个会成长页面
            oImg.style.display='none';
            document.body.appendChild(oImg);
            // 注册事件
            // addEventListener 新的
            // 旧的写法
            // 当设置了图片的src之后,会启动http请求
            // 图片下载完成后,onload 注册事件会回调
            // 异步同步
            oImg.onload=function(){
                // 不会立即执行,后执行
                // console.log('图片下载完成了')
                ele.src=url;
                document.body.removeChild(this);
                // ele.parentNode.removeChild(ele);
            }
            // 先执行
            console.log('设置了src')
            oImg.src=url;
        }
    }
 })();
