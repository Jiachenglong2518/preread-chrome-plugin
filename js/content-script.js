var hostname = window.location.href
var contentObj  = {
  init(){
    this.goScroll()
    console.log('long');
  },
  goScroll(){
    if (localStorage.getItem(hostname)){
      console.log('go');
      window.scrollTo(0,localStorage.getItem(hostname))
    }
    setTimeout(()=>{
      this.listenScroll();
    },3000)
  },
  listenScroll(){
    window.onscroll = function(){ 
      var a = document.documentElement.scrollTop || document.body.scrollTop;//滚动条y轴上的距离
      console.log(hostname);
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