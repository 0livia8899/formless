// util.ts
let document: any = window.document;

// 展开/全屏
export function requestFullScreen(element: any) {
  var requestMethod = element.requestFullscreen || element.webkitRequestFullscreen || element.msRequestFullscreen || element.mozRequestFullScreen;
  if (requestMethod) {
    requestMethod.call(element);
  }
}

// 退出/全屏
export function exitFullScreen() {
  var exitMethod = document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen || document.mozCancelFullScreen;
  if (exitMethod) {
    exitMethod.call(document);
  }
}

// 判断是否全屏
export function isFullscreenElement() {
  var isFull = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement || document.mozFullScreenElement;
  return !!isFull;
}
