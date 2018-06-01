#!/bin/sh

#just in case someone copied the README.md
rm README.md

if [ $# -lt 1 ] ; then 
	echo "switch to a copy of the template-folder and call"
	echo "rename.sh <newName>"
	exit 1
fi

for i in `find . -name "*" -exec grep -l "template" {} \;`
do
	mv   "$i" "$i.sedsave";
	sed  "s/_template_/$1/g" "$i.sedsave" > "$i"
	echo $i
done

for i in `find . -name "*.sedsave"` 
do
	rm $i
done

mv _template_.html           $1.html
mv js/_template_.js          js/$1.js
mv layout/css/_template_.css layout/css/$1.css

# is of no use after using (template is removed).
rm rename.sh
