var DevToolDynamo = (function () {
  var levelSuccessScreen = 'level-success'
    , levelFailureScreen = 'level-failure'

  function setUp () {
    shuffle(document.getElementById(levelSuccessScreen).getElementsByClassName('message'))
    shuffle(document.getElementById(levelFailureScreen).getElementsByClassName('message'))
  }

  function startScreen () {
    document.getElementsByClassName('game-start')[0].addEventListener('click', function gameStartClick (ev) {
      this.removeEventListener('click', gameStartClick, false)
      Gamifier.start()
    }, false)
  }

  function start () {}

  function update () {
    var status = {status : 'continue'}

    return status
  }

  function success () {
    Gamifier.showScreen('success')
  }

  function failure () {
    Gamifier.showScreen('failure')
  }

  function levelSuccess () {
    Gamifier.pause()

    Gamifier.showScreen(levelSuccessScreen)
    var successMessage = document.getElementById(levelSuccessScreen).getElementsByClassName('message')[0]
    successMessage.removeAttribute('hidden')

    screenTimeout = setTimeout(function () {
      clearTimeout(screenTimeout)
      Gamifier.hideScreen(levelSuccessScreen)
      successMessage.setAttribute('hidden', true)
      successMessage.parentNode.appendChild(successMessage)
      Gamifier.nextLevel()
    }, 700)
  }

  function levelFailure () {
    Gamifier.pause()

    Gamifier.showScreen(levelFailureScreen)
    var failureMessage = document.getElementById(levelFailureScreen).getElementsByClassName('message')[0]
    failureMessage.removeAttribute('hidden')

    screenTimeout = setTimeout(function () {
      clearTimeout(screenTimeout)
      Gamifier.hideScreen(levelFailureScreen)
      failureMessage.setAttribute('hidden', true)
      failureMessage.parentNode.appendChild(failureMessage)
      Gamifier.resume()
    }, 700)
  }

  return {
    startScreen : startScreen
    , setUp : setUp
    , start : start
    , update : update
    , success : success
    , failure : failure
    , levelSuccess : levelSuccess
    , levelFailure : levelFailure
  }
}())

Gamifier.registerGameObject(DevToolDynamo)
