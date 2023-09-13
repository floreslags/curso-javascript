const NAME = 'malvestida',
DOMAIN = `https://${NAME}.com`,
SITE = `${DOMAIN}/wp-json`,
WP_API = `${SITE}/wp/v2`,
POSTS = `${WP_API}/posts?_embed`,
POST = `${WP_API}/posts`,
SEARCH = `${WP_API}/search?_embed&search=`
;

export default {
    NAME,
    DOMAIN,
    SITE,
    WP_API,
    POSTS,
    POST,
    SEARCH
}