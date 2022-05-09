let data = [
    {
        id:1,
        imageUrl:'https://wallpx.com/preview?src=/image/2021/04/photography-frozen-bubble-winter.jpg&width=1400&height=1050',
        title:'slide title 1,',
        url:'htpps://google.com'

    },
    {
        id:2,
        imageUrl:'https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title:'slide title 2,',
        url:'htpps://google.com'   
    },
    {
        id:3,
        imageUrl:'https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title:'slide title 3,',
        url:'htpps://google.com'
    },
    {
        id:4,
        imageUrl:'https://wallpx.com/preview?src=/image/2021/04/photography-frozen-bubble-winter.jpg&width=1400&height=1050',
        title:'slide title 4,',
        url:'htpps://google.com'
    }
]


let arrowLeft = document.getElementById('arrow-left');
let arrowRight = document.getElementById('arrow-right');
let sliderContent = document.getElementById('slider-content');

let sliderIndex = 0;

// ვქმნი ფუნქციას რომელიც შექმნის a , img, h2 ტეგებს,ვქმნი ახალ ფუნქციას სადაც გამოვიძახებ ყველა შექმნილ ფუნქციას
// ჩავაეფენდებ ა ტეგში და ბოლოს სტატიკურ დივ ტაგში.
function createATag(item){
    let aTag = document.createElement('a');
    aTag.setAttribute('href', item.url);
    aTag.classList.add('slide');
    return aTag;
}

function createImgTag(item){
    let tagImage = document.createElement('img');
    tagImage.setAttribute('src', item.imageUrl);
    tagImage.setAttribute('alt', item.title);
    tagImage.classList.add('image-slider');
    return tagImage;
}

function createH2Tag(item){
    let tagTitle = document.createElement('h2');
    tagTitle.classList.add('slider-title');
    tagTitle.append(item.title);
    return tagTitle;
}
function setSlide(){
    // რადგნ აფენდჩაილდს ვიყენებთ, ნექსთ ღილაკზე დაჭერის,ძველი სლაიდი დარჩებ ადა ახალი ისე დაემატება, ეს რომ არ მოხდეს ვმატებ ცარიელ html  ' '
    sliderContent.innerHTML = ' ';
    let slideItem = createATag(data[sliderIndex]);
    let imgTag = createImgTag(data[sliderIndex]);
    let h2Tag = createH2Tag(data[sliderIndex]);

    slideItem.appendChild(imgTag);
    slideItem.appendChild(h2Tag);
    sliderContent.appendChild(slideItem);
    console.log(slideItem);
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
setInterval( ()=>{
   arrowRightClick();
}, 3000);

    
setSlide();

