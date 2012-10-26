var DomHelpers = (function() {
  function click(jQueryElement) {
    var element = jQueryElement.get(0)
    var event = document.createEvent('MouseEvent')
    event.initMouseEvent('click', true, true, window, 0,
      event.screenX, event.screenY, event.clientX, event.clientY,
      event.ctrlKey, event.altKey, event.shiftKey, event.metaKey,
      0, element)
    element.dispatchEvent(event)
  }

  return {
    click: click
  }
}())
