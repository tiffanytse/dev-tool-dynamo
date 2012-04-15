<!DOCTYPE html>
<html lang="en-ca"<?php if (php_sapi_name() == 'cli') : ?> manifest="manifest.appcache"<?php endif; ?>>
<head>
  <meta charset="utf-8">
  <title>Dev Tool Dynamo · A small, fun, browser game to test your developer tool knowledge</title>
  <link rel="stylesheet" href="dev-tool-dynamo.css">
  <link rel="license" href="https://github.com/thomasjbradley/dev-tool-dynamo/blob/master/NEW-BSD-LICENSE.txt">
  <meta name="application-name" content="Dev Tool Dynamo">
  <meta name="description" content="A small, fun, browser game to test your knowledge of using the browser developer tools.">
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
    include 'levels/level-06.html';
  ?>
  </div>

  <?php if (php_sapi_name() == 'cli') : ?>
  <script src="dev-tool-dynamo.js"></script>
  <?php else : ?>
  <script src="utils.js"></script>
  <script src="gamifier/gamifier.js"></script>
  <script src="dev-tool-dynamo.js"></script>
  <script src="levels/level-06.js"></script>
  <?php endif; ?>
</body>
</html>
