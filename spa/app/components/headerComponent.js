import { Menu } from "./menuComponent.js";
import { SearchForm } from "./searchFormComponent.js";
import { Title } from "./titleComponent.js";

export function Header(){
    const $header = document.createElement('header');
    $header.classList.add('header');
    $header.appendChild(Title());
    $header.appendChild(Menu());
    $header.appendChild(SearchForm());

    return $header;
}