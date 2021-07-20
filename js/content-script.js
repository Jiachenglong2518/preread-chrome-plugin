var hostname = window.location.href
var contentObj  = {
  init(){
    this.goScroll()
  },
  goScroll(){
    if (localStorage.getItem(hostname)){
      window.scrollTo(0,localStorage.getItem(hostname))
    }
    setTimeout(()=>{
      this.listenScroll();
    },3000)
  },
  listenScroll(){
    window.onscroll = function(){ 
      var a = document.documentElement.scrollTop || document.body.scrollTop;//滚动条y轴上的距离
      localStorage.setItem(hostname,a)
    }
  },
  setLoactionStorage(){
    console.log(1);
    localStorage.setItem(hostname,top)

  }
}
window.onload = function () {
  contentObj.init();
}