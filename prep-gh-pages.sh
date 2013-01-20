#!/usr/bin/env bash

# Move all the files from the build directory into the root directory

for file in build/*
do
  mv $file ${file//build\// }
done
