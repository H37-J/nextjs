RANIP="$(printf "%d.%d.%d.%d" $((RANDOM%256)) $((RANDOM%256)) $((RANDOM%256)) $((RANDOM%256)))"
curl -H "X-Forwarded-For: $RANIP" -H "Client-IP: $RANIP" "https://2211.92mj.net/share/93666.html"