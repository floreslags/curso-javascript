const NAME = 'malvestida',
DOMAIN = `https://${NAME}.com`,
SITE = `${DOMAIN}/wp-json`,
WP_API = `${SITE}/wp/v2`,
PER_PAGE = 6,
POSTS = `${WP_API}/posts?_embed&per_page=${PER_PAGE}`,
POST = `${WP_API}/posts`,
SEARCH = `${WP_API}/search?_embed&per_page=${PER_PAGE}&search=`,
PAGES = `${WP_API}/pages`
;

let page = 1;

export default {
    NAME,
    DOMAIN,
    SITE,
    WP_API,
    POSTS,
    POST,
    SEARCH,
    PAGES,
    page
}