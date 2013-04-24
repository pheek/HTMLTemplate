#!/bin/sh

if [ $# -lt 1 ] ; then 
  echo "switch to the Template-folder and call"
  echo "rename.sh <newName>"
  exit 1
fi

for i in `find . -name "*" -exec grep -l "template" {} \;`
do
  mv "$i" "$i.sedsave";
  sed "s/template/$1/g" "$i.sedsave" > "$i"
  echo $i
done

for i in `find . -name "*.sedsave"` 
do
  rm $i
done

mv template.html           $1.html
mv js/template.js          js/$1.js
mv layout/css/template.css layout/css/$1.css

# this is corrupt, because "template" has been replaced.
mv rename.sh rename.$1.sh_corrupt