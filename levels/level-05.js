var Level5 = (function () {
  var levelId = 'level-5'

    , back = null
    , front = null

  function update () {
    var status = {status : 'continue'}
      , backZ = parseInt(getComputedStyle(back).zIndex, 10)
      , frontZ = parseInt(getComputedStyle(front).zIndex, 10)

    if (
      backZ > frontZ
    ) {
      status.status = 'success'
      return status
    }

    return status
  }

  function startUp () {
    back = document.getElementById('level-5-back')
    front = document.getElementById('level-5-front')
  }

  function cleanUp () {
    back = null
    front = null
  }

  return {
    levelId : levelId
    , update : update
    , startUp : startUp
  }
}())

Gamifier.registerLevelObject(Level5)
