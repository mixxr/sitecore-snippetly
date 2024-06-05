# Sitecore Snippets

## Personalize

## Search
### Authentication
To try the scripts, create **src/search/api-push/api.key** that contains the API Push key

### Examples
- **example-1** uses the sorting option. Before you can sort content, make sure that an administrator configures [sorting options](https://doc.sitecore.com/search/en/users/search-user-guide/understanding-sorting-options.html) and the source was re-indexed.
    - Global Widget (it is optional): turning on sorting options in global widget settings allows you to have more control over which sorting options are returned by creating a default configuration that can be overridden at the individual widget level with rules. It also makes it possible to create many potential sorting options in feature configuration and then only turn on the ones you need.
- **example-2** uses the filter option. Basically, filters can be applied to any attribute
- **example-3** use the facets. To request a facet, add a widget.items.search.facet object to your request.
