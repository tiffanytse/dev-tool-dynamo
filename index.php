<!DOCTYPE html>
<html lang="en-ca"<?php if (php_sapi_name() == 'cli') : ?> manifest="manifest.appcache"<?php endif; ?>>
<head>
  <meta charset="utf-8">
  <title>Dev Tool Dynamo · A small, fun, browser game to test your developer tool knowledge</title>
  <link rel="stylesheet" href="dev-tool-dynamo.css">
  <link rel="license" href="https://github.com/thomasjbradley/dev-tool-dynamo/blob/master/NEW-BSD-LICENSE.txt">
  <meta name="application-name" content="Dev Tool Dynamo">
  <meta name="description" content="A small, fun, browser game to test your knowledge of the browser developer tools.">
  <meta name="author" content="Thomas J Bradley">
  <link rel="author" href="http://thomasjbradley.ca">
</head>
<body>

  <div id="active-screen"></div>

  <div id="inactive-screens" hidden>
  <?php
    include 'screens/start.html';
    include 'screens/success.html';
    include 'screens/level-success.html';
    include 'screens/level-failure.html';
    include 'levels/level-01.html';
    include 'levels/level-02.html';
    include 'levels/level-03.html';
    include 'levels/level-04.html';
    include 'levels/level-05.html';
    include 'levels/level-06.html';
    include 'levels/level-07.html';
    include 'levels/level-08.html';
    include 'levels/level-09.html';
    include 'levels/level-10.html';
  ?>
  </div>

  <?php if (php_sapi_name() == 'cli') : ?>
  <script src="dev-tool-dynamo.js"></script>
  <?php else : ?>
  <script src="utils.js"></script>
  <script src="gamifier/gamifier.js"></script>
  <script src="dev-tool-dynamo.js"></script>
  <script src="levels/level-01.js"></script>
  <script src="levels/level-02.js"></script>
  <script src="levels/level-03.js"></script>
  <script src="levels/level-04.js"></script>
  <script src="levels/level-05.js"></script>
  <script src="levels/level-06.js"></script>
  <script src="levels/level-07.js"></script>
  <script src="levels/level-08.js"></script>
  <script src="levels/level-09.js"></script>
  <script src="levels/level-10.js"></script>
  <?php endif; ?>
</body>
</html>
