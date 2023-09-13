export function postCard(props){

    let {title,date,slug,_embedded} = props;
    let dateFormat = new Date(date).toLocaleString(),
    urlCover = _embedded['wp:featuredmedia']?_embedded['wp:featuredmedia'][0].source_url:'app/assets/favicon.png';
    return `
        <article class="post-card">
            <img src="${urlCover}" alt="${title.rendered}">
            <h2>${title.rendered}</h2>
            <p>
                <time datetime="${date}">${dateFormat}</time>
                <a href="#/${slug}" >Ver publicación</a>
            </p>
        </article>
    `;
}