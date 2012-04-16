var DevToolDynamo = (function () {
  var activeScreen = document.getElementById('active-screen')
    , inactiveScreens = document.getElementById('inactive-screens')
    , levelSuccessScreen = document.getElementById('level-success')
    , successMessages = levelSuccessScreen.getElementsByClassName('message')
    , levelFailureScreen = document.getElementById('level-failure')
    , failureMessages = levelFailureScreen.getElementsByClassName('message')

  function startScreen () {
    document.getElementsByClassName('game-start')[0].addEventListener('click', function gameStartClick (ev) {
      this.removeEventListener('click', gameStartClick, false)
      Gamifier.start()
    }, false)
  }

  function start () {
    shuffle(successMessages)
    shuffle(failureMessages)
  }

  function update () {
    var status = {status : 'continue'}

    return status
  }

  function success () {
    activeScreen.appendChild(document.getElementById('success'))
  }

  function failure () {
    activeScreen.appendChild(document.getElementById('failure'))
  }

  function levelSuccess () {
    Gamifier.pause()

    successMessages[0].removeAttribute('hidden')
    activeScreen.appendChild(levelSuccessScreen)

    screenTimeout = setTimeout(function () {
      clearTimeout(screenTimeout)
      inactiveScreens.appendChild(levelSuccessScreen)
      successMessages[0].setAttribute('hidden', true)
      successMessages[0].parentElement.appendChild(successMessages[0])
      Gamifier.nextLevel()
    }, 700)
  }

  function levelFailure () {
    Gamifier.pause()

    failureMessages[0].removeAttribute('hidden')
    activeScreen.appendChild(levelFailureScreen)

    screenTimeout = setTimeout(function () {
      clearTimeout(screenTimeout)
      inactiveScreens.appendChild(levelFailureScreen)
      failureMessages[0].setAttribute('hidden', true)
      failureMessages[0].parentElement.appendChild(failureMessages[0])
      Gamifier.resume()
    }, 700)
  }

  return {
    startScreen : startScreen
    , start : start
    , update : update
    , success : success
    , failure : failure
    , levelSuccess : levelSuccess
    , levelFailure : levelFailure
  }
}())

Gamifier.registerGameObject(DevToolDynamo)
