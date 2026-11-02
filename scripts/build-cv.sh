#!/bin/sh
cd "$(git rev-parse --show-toplevel)" || exit 1

src=$(git config --path --get cv.source)
out=cv/Chiarini_CV.pdf

[ -n "$src" ] && [ -f "$src" ] || exit 0
[ ! -f "$out" ] || [ "$src" -nt "$out" ] || exit 0

tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT

name=$(basename "$src" .tex)
if ! (cd "$(dirname "$src")" && latexmk -pdf -interaction=nonstopmode -silent -outdir="$tmp" "$name.tex" >/dev/null 2>&1); then
  echo "build-cv: could not compile $src" >&2
  exit 1
fi

cp "$tmp/$name.pdf" "$out"
git add "$out"
