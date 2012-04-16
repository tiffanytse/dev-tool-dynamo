var Level10 = (function () {
  var levelId = 'level-10'
    , levelForm = null
    , formSubmitted = false

    , sizeInput = null

  function update () {
    var status = {status : 'continue'}
      , filesize = parseFloat(sizeInput.value)

    if (
      formSubmitted
      && filesize >= 2.6
      && filesize <= 3.2
    ) {
      status.status = 'success'
      return status
    }

    if (
      formSubmitted
      && (
        filesize < 2.6
        || filesize > 3.2
      )
    ) {
      formSubmitted = false
      status.status = 'failure'
      return status
    }

    return status
  }

  function startUp () {
    var img = document.createElement('img')

    formSubmitted = false

    levelForm = document.getElementById(levelId + '-form')
    levelForm.addEventListener('submit', onFormSubmit, false)
    levelForm.reset()

    img.src = 'images/new-image.png'
    img.setAttribute('hidden', true)
    document.body.appendChild(img)

    sizeInput = document.getElementById('size')
  }

  function cleanUp () {
    levelForm.removeEventListener('submit', onFormSubmit)
    levelForm = null

    sizeInput = null
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

Gamifier.registerLevelObject(Level10)
