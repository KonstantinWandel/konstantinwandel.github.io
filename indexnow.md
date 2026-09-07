# IndexNow

`482117cd69d94ac3a316cbebd4333a95.txt` is the IndexNow key file for this site. IndexNow is the push protocol
that Bing, Yandex, Seznam and Naver share: a single request tells them a URL
changed, instead of waiting for a crawl. Google does not take part.

Resubmit after a content change:

```
curl -s -o /dev/null -w "%{http_code}\n" \
  "https://api.indexnow.org/indexnow?url=https%3A%2F%2Fkonstantinwandel.github.io%2F&key=482117cd69d94ac3a316cbebd4333a95&keyLocation=https%3A%2F%2Fkonstantinwandel.github.io%2F482117cd69d94ac3a316cbebd4333a95.txt"
```

A 200 or 202 means accepted. Keep the key file in place; the engines re-check it.
