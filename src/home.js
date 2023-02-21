import { createDiv,addImg,addParagraph } from "./structure";
import catImg from '../assets/cat-logo.png';
export function homeClicked(){
    let container= createDiv('home-page-body')
    let homeImg= addImg(catImg,'home-img', container)
    let paragraph= addParagraph('Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt excepturi ipsum consequuntur exercitationem recusandae.Laboriosam in delectus dolores, esse ipsum tempora velit a tenetur eligendi, magni aliquid fuga ex voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe adipisci quae earum aliquam minus eligendi deleniti quam iusto voluptatem similique cumque est deserunt sint non iste, minima et aperiam doloremque vitae tempora quo nisi sed fugit quisquam! Consequuntur sunt impedit, consectetur deleniti voluptates architecto aut fuga quasi mollitia voluptatem similique quod assumenda voluptas fugiat eum vel iste modi illum quisquam vero laudantium nam reiciendis! Quos esse neque minus distinctio rem ratione! Mollitia omnis consequatur nihil excepturi itaque voluptatum molestiae esse recusandae sit inventore soluta magni vero explicabo deserunt dicta placeat beatae, labore molestias sequi iure odit corporis nam? Fuga, beatae.&emsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aperiam laboriosam sint cumque non nobis assumenda veritatis laudantium, velit quaerat voluptate illum id labore! Debitis incidunt neque quod excepturi porro.', container)
    return container
}


    
