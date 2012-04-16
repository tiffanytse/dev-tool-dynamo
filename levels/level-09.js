var Level9 = (function () {
  var levelId = 'level-9'
    , levelForm = null
    , formSubmitted = false

    , wordInput = null

  function update () {
    var status = {status : 'continue'}

    if (
      formSubmitted
      && wordInput.value.toLowerCase() == 'platypus'
    ) {
      status.status = 'success'
      return status
    }

    if (
      formSubmitted
      && (
        wordInput.value.toLowerCase() != 's'
      )
    ) {
      formSubmitted = false
      status.status = 'failure'
      return status
    }

    return status
  }

  function startUp () {
    formSubmitted = false

    levelForm = document.getElementById(levelId + '-form')
    levelForm.addEventListener('submit', onFormSubmit, false)
    levelForm.reset()

    wordInput = document.getElementById('word')
  }

  function cleanUp () {
    levelForm.removeEventListener('submit', onFormSubmit)
    levelForm = null

    wordInput = null
  }

  function onFormSubmit (ev) {
    ev.preventDefault()

    formSubmitted = true
  }

  return {
    levelId : levelId
    , update : update
    , startUp : startUp
  }
}())

Gamifier.registerLevelObject(Level9)
