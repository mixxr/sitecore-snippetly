curl -X PATCH -i --location 'https://discover.sitecorecloud.io/ingestion/v1/domains/120111945/sources/971605/entities/content/documents?locale=en_au' \
--header 'Content-Type: application/json' \
--header "Authorization: ""$(cat api.key)" \
--data '{
    "document": {
        "id": "AP-12349-L",
        "fields": {
            "description": "This is an awesome advanced t-shirt black"
        }
    }
}'