var Level7 = (function () {
  var levelId = 'level-7'

    , vert = null
    , horz = null
    , arrow = null

  function update () {
    var status = {status : 'continue'}
      , vertL = vert.offsetLeft
      , horzT = horz.offsetTop
      , arrowL = arrow.offsetLeft
      , arrowT = arrow.offsetTop

    if (
      vertL == arrowL
      && horzT == arrowT
    ) {
      status.status = 'success'
      return status
    }

    return status
  }

  function startUp () {
    vert = document.getElementById('level-7-vert')
    horz = document.getElementById('level-7-horz')
    arrow = document.getElementById('level-7-arrow')
  }

  function cleanUp () {
    vert = null
    horz = null
    arrow = null
  }

  return {
    levelId : levelId
    , update : update
    , startUp : startUp
  }
}())

Gamifier.registerLevelObject(Level7)
