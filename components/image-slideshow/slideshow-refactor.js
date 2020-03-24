let props = [718107, 507388, 2332133, 2028020, 1258650, 313962, 282860, 224842, 445045, 371294, 388067, 341911, 409543, 405529, 300314, 342899, 312202, 1466441, 515326, 18845, 361301, 41357, 615332, 20837, 191708, 1231557, 359000, 191722, 712504, 496155, 29433, 275750];

// function replaceImageSlideshow(){
// document.querySelector('.ArnPhotoContainer').style.display = 'none';

// let propId = document.querySelector('meta[name="aPropertyId"]').content;
let counter = 0;
let propImages;
let carouselImages;
let propId = '16664';


async function getPropImages() {
    try {
        let data = await fetch(
            `https://api.travsrv.com/api/content/findpropertyinfo?&username=h4h&password=hDzYz9HHwcJDDthPK&propertyid=${propId}`, {
                method: "GET"
            }
        ).then(response => response.json());
        return data.Images.map(e => e.ImagePath.replace(/_300/, "_804480"));
    } catch (error) {
        console.log(error);
    }
}

async function createPropImageSlideshow() {
    propImages = await getPropImages();
    document.body.insertAdjacentHTML(
        'afterend',
        `
            <div class="carousel-container">
                <div class="carousel-slide">
                </div>
                <a id="previousBtn">&#10094;</a>
                <a id="nextBtn">&#10095;</a>
            </div>
        `);
    populateImages();
}

function populateImages() {
    carouselImages = document.querySelectorAll('.carousel-slide img');
    for (let i = counter === 0 ? counter : counter + 2; i < counter + 5; i++) {
        if (i === propImages.length) return;
        
        document.querySelector('.carousel-slide').insertAdjacentHTML(
            'beforeend',
            `
                <div class="image-wrapper">
                    <img id="image-${i}" src=${propImages[i]}>
                </div>
            `
        );

        removeSmallImages(i);
    }
};

function removeSmallImages(i) {
    let currentImage = document.querySelector(`#image-${i}`);
    currentImage.onload = () => {
        if (currentImage.naturalWidth < 400) {
            propImages.splice(i, 1);
            currentImage.parentNode.remove();
        }
    }
}

async function createCarousel() {
    await createPropImageSlideshow();

    let carouselSlide = document.querySelector('.carousel-slide');
    const previousBtn = document.querySelector('#previousBtn');
    const nextBtn = document.querySelector('#nextBtn');


    nextBtn.addEventListener('click', () => {
        carouselImages = document.querySelectorAll('.carousel-slide img');
        if (counter === carouselImages.length - 1) return;
        counter++;
        let size = carouselImages[counter].clientWidth;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        if (counter === carouselImages.length - 1) {
            populateImages();
        };
    });

    previousBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        counter--;
        let size = carouselImages[counter].clientWidth;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });
}

createCarousel();