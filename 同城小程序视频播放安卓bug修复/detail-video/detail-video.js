// pages/video-test/video-test.js
const app = getApp()
app.createPage({
    //定义 this.data里哪些数据是自动埋点时需要携带到 pageInfo的参数  会与 this.data.pageInfo 合并取值
    methodOptions:{//用来配置方法的对应特性  比如 type
      //方法名不要以 $开头

    },
    data: {
      pageName:'detail-video', //页面名称 用于获取自动埋点 必须有
      pageType:'video', //页面类型
      videoSrc:'',//视频路径
      windowWidth:0,
      windowHeight:0,
    },
    _onLoad(options) {
      this.videoContext = wx.createVideoContext('myVideo')
      console.log(this.urlParams);//和options返回数据相同；
      this.setDataLazy({
        videoSrc:decodeURIComponent(this.urlParams.videoSrc),
        windowWidth:wx.getSystemInfoSync().windowWidth,
        windowHeight:wx.getSystemInfoSync().windowHeight
      })

    },
    initData() {
      console.log(this);
      console.log(this.data);//包含list,loading,showEmptyInfo等数据；
      // 在初始化前会 自动 setData({list:[] , loading:true , showEmptyInfo:false})
      //如果return 一个promise 会自动走 setData({loading:false})
    },
    _onShow() {

    },
//所有以 e_ 或者 $e_ 且不为 e_noop 的函数会被自动节流500毫秒 (app.throttle)

//以$e_开头的方法 会在点击的时候触发自动埋点 wxml标签里面使用此事件的时候不需要以 $ 开头
    $e_doSomething(){

    }
  }
)

