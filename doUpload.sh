#!/bin/sh
PATH=/usr/local/bin:/usr/local/sbin:~/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/bin

echo "# test" >> p5.pre-min.js
git add *
git commit -m "daily keepalive"
git push origin master
