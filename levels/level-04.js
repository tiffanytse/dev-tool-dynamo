var Level4 = (function () {
  var levelId = 'level-4'

    , left = null
    , right = null

  function update () {
    var status = {status : 'continue'}
      , leftBg = getComputedStyle(left).backgroundColor
      , rightBg = getComputedStyle(right).backgroundColor

    if (
      leftBg == rightBg
    ) {
      status.status = 'success'
      return status
    }

    return status
  }

  function startUp () {
    left = document.getElementById('level-4-left')
    right = document.getElementById('level-4-right')
  }

  function cleanUp () {
    left = null
    right = null
  }

  return {
    levelId : levelId
    , update : update
    , startUp : startUp
  }
}())

Gamifier.registerLevelObject(Level4)
