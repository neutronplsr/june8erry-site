#!/bin/sh
cd "$(git rev-parse --show-toplevel)" || exit 1

hash=$(cat css/style.css js/main.js | sha256sum | cut -c1-8)

for f in index.html about/index.html credits/index.html music/index.html research/index.html writting/index.html; do
  sed -i -E "s/(style\.css|main\.js)\?v=[^\"]*/\1?v=$hash/g" "$f"
  git add "$f"
done
