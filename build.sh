#!/usr/bin/env bash

rm -Rf build
mkdir build

php index.php > build/index.html

stylus -c -u nib -o build dev-tool-dynamo.styl

for file in images/*.svg
do
  svgo $file
done

cat utils.js >> build/dev-tool-dynamo.js
cat gamifier/gamifier.js >> build/dev-tool-dynamo.js
cat dev-tool-dynamo.js >> build/dev-tool-dynamo.js

for file in levels/*.js
do
  cat $file >> build/dev-tool-dynamo.js
done

uglifyjs --overwrite build/dev-tool-dynamo.js

htmlcompressor --type html --remove-quotes --simple-bool-attr -o ./build/ ./build/

cp -R images build/images
cp humans.txt build/humans.txt
cp manifest.appcache build/manifest.appcache

for img in images/*.*
do
  if [ $img == "images/new-image.png" ]
  then
    continue
  fi

  echo $img >> build/manifest.appcache
done
