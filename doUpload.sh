#!/bin/sh
PATH=/usr/local/bin:/usr/local/sbin:~/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/bin

echo "flipping coin..."

computer_choice=$((RANDOM % 2 + 1))
 
if [ $computer_choice -eq 1 ]; then
  echo "Computer chose heads... updating"
  echo "generating data..."
  echo "# test" >> p5.pre-min.js
  second_file=$((RANDOM % 2 + 1))
  if [ $second_file -eq 1 ]; then
    echo "adding second file"
    echo "# test" >> data.dat
    third_file=$((RANDOM % 2 + 1))
    if [ $third_file -eq 1 ]; then
      echo "adding third file"
      echo "# test" >> reference.csv
      fourth_file=$((RANDOM % 2 + 1))
      if [ $fourth_file -eq 1 ]; then
        echo "adding second file"
        echo "# test" >> old.js
      fi
    fi
  fi
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
else
  echo "Computer chose tails - no update."
fi
