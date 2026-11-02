#!/bin/sh
cd "$(git rev-parse --show-toplevel)" || exit 1

src=$(git config --path --get cv.source)
out=media/cv.pdf

[ -n "$src" ] && [ -f "$src" ] || exit 0
[ ! -f "$out" ] || [ "$src" -nt "$out" ] || exit 0

tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT

name=$(basename "$src" .tex)
if ! (cd "$(dirname "$src")" && latexmk -pdf -interaction=nonstopmode -silent -usepretex='\def\websiteversion{}' -outdir="$tmp" "$name.tex" >/dev/null 2>&1); then
  echo "build-cv: could not compile $src" >&2
  exit 1
fi

pdf="$tmp/$name.pdf"
phone='[0-9]{3}[^0-9A-Za-z]{0,3}[0-9]{3}[^0-9A-Za-z]{0,2}[0-9]{4}'
if pdftotext "$pdf" - | grep -qE "$phone|[A-Za-z0-9._-]+@[A-Za-z0-9.-]+" || pdfinfo -url "$pdf" | grep -qiE 'mailto:|tel:'; then
  echo "build-cv: stopped, the website cv still has a phone number or email in it" >&2
  exit 1
fi

cp "$pdf" "$out"
git add "$out"
