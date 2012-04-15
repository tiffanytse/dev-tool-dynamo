var Level3 = (function () {
  var levelId = 'level-3'

    , box = null

  function update () {
    var status = {status : 'continue'}
      , borderWidth = getComputedStyle(box).borderWidth

    if (
      borderWidth
      && borderWidth != '0px'
    ) {
      status.status = 'success'
      return status
    }

    return status
  }

  function startUp () {
    box = document.getElementById('level-3-box')
  }

  function cleanUp () {
    box = null
  }

  return {
    levelId : levelId
    , update : update
    , startUp : startUp
  }
}())

Gamifier.registerLevelObject(Level3)
