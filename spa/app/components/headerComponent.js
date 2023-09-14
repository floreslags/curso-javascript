import { Menu } from "./MenuComponent.js";
import { SearchForm } from "./SearchFormComponent.js";
import { Title } from "./TitleComponent.js";

export function Header(){
    const $header = document.createElement('header');
    $header.classList.add('header');
    $header.appendChild(Title());
    $header.appendChild(Menu());
    $header.appendChild(SearchForm());

    return $header;
}