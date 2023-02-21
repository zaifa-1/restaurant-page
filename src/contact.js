import { createDiv,addImg,addParagraph, makeCard } from "./structure";
import catImg from '../assets/cat-logo.png';

export function contactClicked(){
    let container= createDiv('contact-container')
    let contactOne= makeCard('contacts','contact-img',catImg, 'Lorem ipsum dolor sit amet consectetur, lore adipisicing elit. Delectus natus nihil ab magnam doloremque laborum sit ipsam consequatur eius dicta!',container)
    let contactTwo= makeCard('contacts','contact-img',catImg, 'Lorem ipsum dolor sit amet consectetur, lore adipisicing elit. Delectus natus nihil ab magnam doloremque laborum sit ipsam consequatur eius dicta!',container)
    let contactThree= makeCard('contacts','contact-img',catImg, 'Lorem ipsum dolor sit amet consectetur, lore adipisicing elit. Delectus natus nihil ab magnam doloremque laborum sit ipsam consequatur eius dicta!',container)
    let contactFour= makeCard('contacts','contact-img',catImg, 'Lorem ipsum dolor sit amet consectetur, lore adipisicing elit. Delectus natus nihil ab magnam doloremque laborum sit ipsam consequatur eius dicta!',container)
    return container
}