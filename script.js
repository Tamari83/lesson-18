let data = [
    {
        id:1,
        imageUrl:'https://wallpx.com/preview?src=/image/2021/04/photography-frozen-bubble-winter.jpg&width=1400&height=1050',
        title:'slide title 1,',
        url:'htpps://google.com'

    },
    {
        id:2,
        imageUrl:'https://avatars.mds.yandex.net/i?id=e67c20f98bdc512c5d3bc20c140f8fac-5719595-images-taas-consumers&n=27&h=480&w=480',
        title:'slide title 2,',
        url:'htpps://google.com'   
    },
    {
        id:3,
        imageUrl:'https://st.depositphotos.com/1005147/2003/i/950/depositphotos_20039673-stock-photo-brunette-girl-with-colour-balloons.jpg',
        title:'slide title 3,',
        url:'htpps://google.com'
    },
    {
        id:4,
        imageUrl:'https://st.depositphotos.com/1005147/3687/i/950/depositphotos_36879747-stock-photo-redhead-girl-with-umbrella-at.jpg',
        title:'slide title 4,',
        url:'htpps://google.com'
    }
]


let arrowLeft = document.getElementById('arrow-left');
let arrowRight = document.getElementById('arrow-right');
let sliderContent = document.getElementById('slider-content');
let dotList = document.getElementsByClassName('dot');

let sliderIndex = 0;

// ვქმნი ფუნქციას რომელიც შექმნის a , img, h2 ტეგებს,ვქმნი ახალ ფუნქციას სადაც გამოვიძახებ ყველა შექმნილ ფუნქციას
// ჩავაეფენდებ ა ტეგში და ბოლოს სტატიკურ დივ ტაგში.
function createATag(item){
    let aTag = document.createElement('a');
    aTag.setAttribute('href', item.url);
    aTag.classList.add('slide');
    return aTag;
}

// function createImgTag(item){
//     let tagImage = document.createElement('img');
//     tagImage.setAttribute('src', item.imageUrl);
//     tagImage.setAttribute('alt', item.title);
//     tagImage.classList.add('image-slider');
//     return tagImage;
// }

function createImgTag(item) {
    sliderContent.style.backgroundImage = 'url('+ item.imageUrl +')';
    sliderContent.style.backgroundRepeat = "no-repeat";
    sliderContent.style.backgroundSize = "cover";
}

function createH2Tag(item){
    let tagTitle = document.createElement('h2');
    tagTitle.classList.add('slider-title');
    tagTitle.append(item.title);
    return tagTitle;
}

function createDots(item){
    let dots = document.createElement('div');
    dots.classList.add('dots');

    data.forEach( (Element) => {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-id', Element.id-1) ;

        dot.onclick = function(event){
            let id = event.target.getAttribute('data-id');
            sliderIndex=id;
            setSlide();
        }
        dots.appendChild(dot);
    })
    return dots;
}
function setSlide(){
    // რადგნ აფენდჩაილდს ვიყენებთ, ნექსთ ღილაკზე დაჭერის,ძველი სლაიდი დარჩებ ადა ახალი ისე დაემატება, ეს რომ არ მოხდეს ვმატებ ცარიელ html  ' '
    sliderContent.innerHTML = ' ';
    let slideItem = createATag(data[sliderIndex]);
    createImgTag(data[sliderIndex]);
    let h2Tag = createH2Tag(data[sliderIndex]);
    let dots = createDots();

   
    slideItem.appendChild(h2Tag);
    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(dots); 
    currentDotActive(); 
    console.log(slideItem);
}

function currentDotActive(){
    dotList[sliderIndex].classList.add('active');
}
function arrowLeftClick(){
    if(sliderIndex <= 0){
        sliderIndex = data.length-1;
        setSlide();
        return;
    }
    sliderIndex--;
    setSlide();
}
function arrowRightClick(){
    if(sliderIndex >= data.length-1){
    sliderIndex = 0;
    setSlide();
    return;
    }
    sliderIndex++;
    setSlide();
}


arrowLeft.addEventListener('click',arrowLeftClick);

arrowRight.addEventListener('click',arrowRightClick);

// ავტომატურად რომ გადავიდეს სლაიდები
// setInterval( ()=>{
//    arrowRightClick();
// }, 3000);

    
setSlide();

