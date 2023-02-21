import { createDiv, makeCard } from "./structure";
import catImg from '../assets/cat-logo.png';


export function menuClicked(){
  let container=createDiv('menu-grid')
  let menuItem1= makeCard('menu-items','menu-img',catImg,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ut. Mollitia tenetur quae quaerat alias ipsum. Asperiores natus ducimus, quas fuga odio cumque quaerat nesciunt accusamus autem atque fugit provident.',container)
  let menuItem2= makeCard('menu-items','menu-img',catImg,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ut. Mollitia tenetur quae quaerat alias ipsum. Asperiores natus ducimus, quas fuga odio cumque quaerat nesciunt accusamus autem atque fugit provident.',container)
  let menuItem3= makeCard('menu-items','menu-img',catImg,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ut. Mollitia tenetur quae quaerat alias ipsum. Asperiores natus ducimus, quas fuga odio cumque quaerat nesciunt accusamus autem atque fugit provident.',container)
  let menuItem4= makeCard('menu-items','menu-img',catImg,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ut. Mollitia tenetur quae quaerat alias ipsum. Asperiores natus ducimus, quas fuga odio cumque quaerat nesciunt accusamus autem atque fugit provident.',container)
 return container
}
