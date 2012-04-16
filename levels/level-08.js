var Level8 = (function () {
  var levelId = 'level-8'

    , vert = null
    , horz = null
    , circle = null

  function update () {
    var status = {status : 'continue'}
      , vertL = vert.offsetLeft
      , horzT = horz.offsetTop
      , circleL = circle.offsetLeft
      , circleT = circle.offsetTop

    if (
      vertL - 124 == circleL
      && horzT - 123 == circleT
    ) {
      status.status = 'success'
      return status
    }

    return status
  }

  function startUp () {
    vert = document.getElementById('level-8-vert')
    horz = document.getElementById('level-8-horz')
    circle = document.getElementById('level-8-circle')
  }

  function cleanUp () {
    vert = null
    horz = null
    circle = null
  }

  return {
    levelId : levelId
    , update : update
    , startUp : startUp
  }
}())

Gamifier.registerLevelObject(Level8)
