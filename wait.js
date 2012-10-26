var Wait = (function() {
  var timers = []

  function until(condition, callback) {
    if (condition()) {
      callback()
    } else {
      timers.push(setTimeout(function() {
        until(condition, callback)
      }, 100))
    }
  }

  function stop() {
    console.log('Stopping ' + timers.length + ' timers...')
    _.each(timers, function(timer) {
      clearTimeout(timer)
    })
    console.log('Done.')
  }

  return {
    until: until,
    stop: stop
  }
}())
