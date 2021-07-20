var popObj = {
  init(){

  },
  // 获取当前选项卡ID
  getCurrentTabId(callback){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
    {
      if(callback) callback(tabs.length ? tabs[0].id: null);
    });
  },
  // 向content-script注入JS片段
  executeScriptToCurrentTab(code){
    this.getCurrentTabId((tabId) =>
    {
      chrome.tabs.executeScript(tabId, {code: code});
    });
  }
}

var add = document.getElementById('add');
add.onclick = function () {
  popObj.executeScriptToCurrentTab('window.scrollTo(0,2000)');
}