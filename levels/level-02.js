var Level2 = (function () {
  var levelId = 'level-2'

    , lis = null

  function update () {
    var status = {status : 'continue'}
      , totalLis = lis.length
      , possible = []

    for (var i = 0; i < totalLis; i++) {
      possible.push(lis[i].innerHTML.replace(/[^\d]/, ''))
    }

    if (
      possible[0] == 1
      && possible[1] == 2
      && possible[2] == 3
      && possible[3] == 4
      && possible[4] == 5
    ) {
      status.status = 'success'
      return status
    }

    return status
  }

  function startUp () {
    lis = document.getElementById('level-2-nums').getElementsByTagName('li')
  }

  function cleanUp () {
    lis = null
  }

  return {
    levelId : levelId
    , update : update
    , startUp : startUp
  }
}())

Gamifier.registerLevelObject(Level2)
