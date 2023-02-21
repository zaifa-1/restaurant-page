export function createDiv(className, textContent){
    const div= document.createElement('div');
    div.classList.add(className);
    div.textContent= textContent;
    return div
}

export function makeCard(cardClass, imgClass, imgName, paragraph, parent){
    let item= createDiv(cardClass)
    let img= addImg(imgName, imgClass, item)
    let description= addParagraph(paragraph,item)
    parent.appendChild(item)
  }

export function addImg(name, className, parent){
    const myIcon= new Image();
    myIcon.src= name
    myIcon.alt= name
    myIcon.classList.add(className)
    parent.appendChild(myIcon)
    return myIcon
}

export function addParagraph(paragraph, parent){
    let a= document.createElement('p')
    a.textContent= paragraph
    parent.appendChild(a)
    return a
}