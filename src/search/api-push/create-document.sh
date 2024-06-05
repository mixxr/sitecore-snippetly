#!/bin/bash
# usage: create-document <source_id> <country_lang> <filename>
curl -i --location "https://discover.sitecorecloud.io/ingestion/v1/domains/120111945/sources/$1/entities/content/documents?locale=$2" \
--header 'Content-Type: application/json' \
--header "Authorization: ""$(cat api.key)" \
  -d @"$3"