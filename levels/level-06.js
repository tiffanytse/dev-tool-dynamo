var Level6 = (function () {
  var levelId = 'level-6'

    , left = null
    , right = null

  function update () {
    var status = {status : 'continue'}
      , leftStyle = getComputedStyle(left)
      , rightStyle = getComputedStyle(right)

    if (
      leftStyle.width == rightStyle.width
      && leftStyle.height == rightStyle.height
      && leftStyle.background == rightStyle.background
      && leftStyle.borderRadius == rightStyle.borderRadius
      && leftStyle.border == rightStyle.border
      && leftStyle.transform == rightStyle.transform
      && leftStyle.opacity == rightStyle.opacity
      && leftStyle.boxShadow == rightStyle.boxShadow
    ) {
      status.status = 'success'
      return status
    }

    return status
  }

  function startUp () {
    left = document.getElementById('level-6-left')
    right = document.getElementById('level-6-right')
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

Gamifier.registerLevelObject(Level6)
