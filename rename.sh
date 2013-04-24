#!/bin/sh

#yust in case someone copied the README.md
rm README.md

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

# is of no use after using (template is removed).
rm rename.sh