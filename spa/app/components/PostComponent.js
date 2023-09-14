export function Post(props){

    let {title,date,content} = props;

    let dateFormat = new Date(date).toLocaleString();
    return `
        <section class="post-page">
            <aside>
                <h2 class="">${title.rendered}</h2>
                <time datetime="${date}">${dateFormat}</time>
            </aside>
            <hr>
            <article class="">${content.rendered}</article>
        </section>
    
    `;
}