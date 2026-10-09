#!/bin/sh
set -e
cd "$(dirname "$0")"
for name in "$@"; do
  sed "s/{{name}}/$name/" template.svg > "$name.svg"
done
