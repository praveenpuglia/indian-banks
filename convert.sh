#!/bin/bash
cd ./assets/logos

find . -type f -name "*.svg" -print0 | while IFS= read -r -d $'\0' file; do
  dir=$(dirname "$file")
  filename=$(basename "$file" .svg)
  if inkscape --export-filename="$dir/$filename.png" "$file"; then
    echo "Conversion successful: $file"
  else
    echo "Conversion failed: $file"
  fi
done
