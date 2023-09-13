const NAME = 'malvestida',
DOMAIN = `https://${NAME}.com`,
SITE = `${DOMAIN}/wp-json`,
WP_API = `${SITE}/wp/v2`,
POSTS = `${WP_API}/posts?_embed`,
POST = `${WP_API}/posts`,
SEARCH = `${WP_API}/search?_embed&search=`,
PAGES = `${WP_API}/pages`,
CATEGORIES = `${WP_API}/categories`
;

export default {
    NAME,
    DOMAIN,
    SITE,
    WP_API,
    POSTS,
    POST,
    SEARCH,
    CATEGORIES,
    PAGES
}