curl -i -X POST "https://discover.sitecorecloud.io/discover/v2/120111945" \
  -H 'authority: discover.sitecorecloud.io' \
  -H 'accept: application/json' \
  -H 'accept-language: en-GB,en-US;q=0.9,en;q=0.8' \
  -H 'authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyLzMwNDQiLCJzY29wZSI6eyIxMjU3NTczMjEiOlsiYnI0YmJtbXczNSIsIm96dm5xajU0aTUiLCJ3Nmd0NDQ4eHVnIiwiamx4Z2hpejY4ayIsInR4YWpwdXR2YzgiXSwiKiI6WyJvenZucWo1NGk1IiwidzZndDQ0OHh1ZyIsImJyNGJibW13MzUiLCIxcHRsZmdtdXo3IiwidHhhanB1dHZjOCIsIjRjbXMwbTFvdzUiLCJqbHhnaGl6NjhrIiwicjZqc2lyY25zMSJdfSwic3RhZ2UiOiJwcm9kIiwicmVnaW9uIjoidXMtZWFzdC0xIiwianRpIjoiMDRkYjc1ZTMtMGI3MC00ODM0LTgzYmQtOWJlMWM4YmE5YjAxIiwiaWF0IjoxNzEwMjMyNzM1LCJleHAiOjE3MTAzMTk3MzV9.G7gOUluuwsgoq3iOOB3Hy6mJ0rcNMyPMLsUYMETgU2I' \
  -H 'content-type: text/plain;charset=UTF-8' \
  -H 'origin: https://cec.sitecorecloud.io' \
  -H 'sec-ch-ua: "Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36' \
  -H 'x-api-key: 01-8b9a10ed-61e391e67cfa758930c7efdf480afe5752fc7f18' \
  --compressed \
  -d @"$1"
   