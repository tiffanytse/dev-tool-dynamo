var Level4 = (function () {
  var levelId = 'level-4'

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
    back = document.getElementById('level-4-back')
    front = document.getElementById('level-4-front')
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

Gamifier.registerLevelObject(Level4)
