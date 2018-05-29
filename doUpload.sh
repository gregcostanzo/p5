#!/bin/sh
PATH=/usr/local/bin:/usr/local/sbin:~/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/bin
echo "generating data..."
echo "# test" >> p5.pre-min.js
echo "done."
echo "adding to repository..."
git add *
echo "done."
echo "committing..."
git commit -m "daily keepalive"
echo "done."
echo "pushing..."
git push origin master
echo "done. exiting"
