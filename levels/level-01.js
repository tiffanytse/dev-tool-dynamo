var Level1 = (function () {
  var levelId = 'level-1'

    , hiddenDiv = null

  function update () {
    var status = {status : 'continue'}
      , display = getComputedStyle(hiddenDiv).display

    if (
      display != 'none'
    ) {
      status.status = 'success'
      return status
    }

    return status
  }

  function startUp () {
    hiddenDiv = document.getElementById('level-1-hidden-div')
  }

  function cleanUp () {
    hiddenDiv = null
  }

  return {
    levelId : levelId
    , update : update
    , startUp : startUp
  }
}())

Gamifier.registerLevelObject(Level1)
