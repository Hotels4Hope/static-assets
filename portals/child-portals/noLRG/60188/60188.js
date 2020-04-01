import NoLRGPortal from "../../../js/portal-setup.js";

let noLRGPortal = new NoLRGPortal();

noLRGPortal.updateRoomDescription(
  ".RoomDescription",
  "Hotels for Hope Exclusive Rates"
);

jQuery(document).on("ratesReadyEvent", function() {
  setTimeout(function() {
    noLRGPortal.ratesReadyEventMethods();
    noLRGPortal.updateText(".event-rate", "Exclusive Rates");
  }, 1);
});

function waitForElementToLoad(elementWaitingFor) {
  let element = document.querySelector(elementWaitingFor);
  let config = { attributes: false, childList: true, subtree: false };

  function callback(mutationsList, observer) {
    for (let mutation of mutationsList) {
      if (mutation.type === "childList") {
        noLRGPortal.updateAttribute(
          ".logo img",
          "https://dev-static.hotelsforhope.com/portals/child-portals/noLRG/60188/images/logo.png",
          "src"
        );
        noLRGPortal.updateAttribute(
          ".logo",
          "https://www.hotelsforhope.com/",
          "href"
        );
        observer.disconnect();
      }
    }
  }
  let observer = new MutationObserver(callback);
  observer.observe(element, config);
}

waitForElementToLoad("header");

document
  .querySelector("body")
  .insertAdjacentHTML(
    "beforeEnd",
    '<link rel="stylesheet" type="text/css" href="https://dev-static.hotelsforhope.com/portals/child-portals/noLRG/60188/60188.css">'
  );

noLRGPortal.updateAttribute(
  ".RootBody",
  "background-image: url(https://dev-static.hotelsforhope.com/portals/child-portals/noLRG/60188/images/banner.png)",
  "style"
);

/* - - - - -  Image slideshow gallery - - - - - */

function replaceImageSlideshow() {
  document.querySelector(".ArnPhotoContainer").style.display = "none";

  let propId = document.querySelector('meta[name="aPropertyId"]').content;
  let counter = 0;
  let propImages;
  let carouselImages;

  async function getPropImages() {
    try {
      let data = await fetch(
        `https://api.travsrv.com/api/content/findpropertyinfo?&username=h4h&password=hDzYz9HHwcJDDthPK&propertyid=${propId}`,
        {
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
    document.querySelector(".PropertyLinks").insertAdjacentHTML(
      "afterend",
      `
            <div class="carousel-container">
                <div class="carousel-slide">
                </div>
                <a id="previousBtn">&#10094;</a>
                <a id="nextBtn">&#10095;</a>
            </div>
        `
    );
    populateImages();
  }

  function populateImages() {
    carouselImages = document.querySelectorAll(".carousel-slide img");
    for (let i = counter === 0 ? counter : counter + 2; i < counter + 5; i++) {
      if (i === propImages.length) return;
      document.querySelector(".carousel-slide").insertAdjacentHTML(
        "beforeend",
        `
                        <div class="image-wrapper">
                        <div class ="image-number">${i + 1}/${
          propImages.length
        }</div>
                            <img src=${propImages[i]}>
                        </div>
                        `
      );
    }
  }

  async function createCarousel() {
    await createPropImageSlideshow();

    let carouselSlide = document.querySelector(".carousel-slide");
    const previousBtn = document.querySelector("#previousBtn");
    const nextBtn = document.querySelector("#nextBtn");

    nextBtn.addEventListener("click", () => {
      carouselImages = document.querySelectorAll(".carousel-slide img");
      if (counter === carouselImages.length - 1) return;
      counter++;
      let size = carouselImages[counter].clientWidth;
      carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
      if (counter === carouselImages.length - 2) {
        populateImages();
      }
    });

    previousBtn.addEventListener("click", () => {
      if (counter <= 0) return;
      counter--;
      let size = carouselImages[counter].clientWidth;
      carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    });
  }

  createCarousel();
}

if (document.querySelector(".SinglePropDetail")) {
  replaceImageSlideshow();
}

/* - - - - - Algolia search - - - - - */

let config = {
  algolia_app_id: "plETUR94AASH",
  algolia_api_key: "7bf688b47ae81044d05d094f0487df08",
  currency: "USD",
  distance_unit: "useMiles",
  map_size: "12",
  radius: "50",
  ap_suggestion_background_color: "#fff",
  ap_suggestion_hint_background_color: "#f5f5f5",
  ap_suggestion_text_color: "#333",
  ap_suggestion_hint_text_color: "#333"
};

let lat_lng;
let url;
let origin = window.location.origin;
let params = new URL(window.location.href);
let searchParams = new URLSearchParams(params.search);

function hideArnSearchElement() {
  if (document.querySelector(".SearchHotels")) {
    // Hide tabs
    document.querySelector(".ArnGoCitySearch").style.display = "none";
    document.querySelector("div.ArnSearchHotelsImg+br").style.display = "none";
    document.querySelector(".ArnGoLandmarkSearch").style.display = "none";
    document.querySelector(".ArnGoAirportSearch").style.display = "none";
    document.querySelector("div#HotelNameContainer").style.display = "none";

   
  }

  // Remove ARN search bar
  if (document.querySelector("input#city")) {
    document.querySelector("input#city").remove();
  }

  // Insert new search bar
  document.querySelector(".RootBody")
    ? document.querySelector("div#CitySearchContainer span").insertAdjacentHTML(
        "beforeend",
        `
        <input type="search" id="address-input" placeholder="Destination" required="true" />
    `
      )
    : document.querySelector("div#theSearchBox").insertAdjacentHTML(
        "afterbegin",
        `
        <span>City Search:</span>
        <input type="search" id="address-input" placeholder="Destination" required="true"  />
    `
      );
      if (document.querySelector(".SearchHotels")){
        let destination = searchParams.get("destination");
        let algolia_input = document.querySelector("input#address-input");
        algolia_input.value = destination;
      
        algolia_input.addEventListener("click", function() {
          algolia_input.value = '';
        });
      }

      let rooms_value = document.querySelector(
        'select#rooms option[selected="selected"]').textContent;

      let adults_value = document.querySelector(
        'select#adults option[selected="selected"]').textContent;

      /*  - - - - - Event listeners  - - - - - */

      let green_marker = document.querySelector(img.arn-green-marker-icon)
      
      green_marker.addEventListener('load',function(){
        if (!searchParams.has('locationlabel') || !searchParams.has('points')){
          green_marker.style.display = 'none';
        };
      });

      let rooms_dropdown = document.querySelector('select#rooms');

      rooms_dropdown.addEventListener('change', function(){
         for(let i = 0; i < rooms_dropdown.length; i++){
             if(rooms_dropdown[i].selected){
                 rooms_dropdown.selectedIndex = i;
                 rooms_value = rooms_dropdown[i].textContent;
                 break;
             }
         };
       })
 
      let adults_dropdown = document.querySelector('select#adults');

      adults_dropdown.addEventListener('change', function(){
         for(let i = 0; i < adults_dropdown.length; i++){
             if(adults_dropdown[i].selected){
                 adults_dropdown.selectedIndex = i;
                 adults_value = adults_dropdown[i].textContent;
                 break;
             }
         };
       })

       let arn_submit_btn = document.querySelector('input#theSubmitButton');
       arn_submit_btn.setAttribute('onClick', '');

    document.querySelector("form#searchForm")
      .addEventListener("submit", function(e) {
        e.preventDefault();
        
        let destination_value = document.querySelector("input#address-input")
          .value;
          
        // Checkin/checkout calc
        let check_in_value = document.querySelector("input#theCheckIn").value;
        let check_out_value = document.querySelector("input#theCheckOut").value;
  
        // dayJs calculation
        //   let date1 = dayjs(document.querySelector("input#theCheckIn").value);
        //   let date2 = dayjs(document.querySelector("input#theCheckOut").value);
        //   let nights = date1.diff(date2, 'day');
  
        let num_nights = (check_in_value, check_out_value) => {
          let start = new Date(check_in_value);
          let end = new Date(check_out_value);
          let dayCount = 0;
          while (end > start) {
            dayCount++;
            start.setDate(start.getDate() + 1);
          }
          return dayCount;
        };
        let nights = num_nights(check_in_value, check_out_value);
  
        if (lat_lng){
          url = `${origin}/v6/?currency=${config.currency}&type=geo&siteid=60188&longitude=${lat_lng.lng}&latitude=${lat_lng.lat}&radius=${config.radius}&checkin=${check_in_value}&nights=${nights}&map&pagesize=10&${config.distance_unit}&mapSize=${config.map_size}&rooms=${rooms_value}&adults=${adults_value}&destination=${destination_value}`;
  
        } else {
          let lng = searchParams.get("longitude");
          let lat = searchParams.get("latitude");

          url = `${origin}/v6/?currency=${config.currency}&type=geo&siteid=60188&longitude=${lng}&latitude=${lat}&radius=${config.radius}&checkin=${check_in_value}&nights=${nights}&map&pagesize=10&${config.distance_unit}&mapSize=${config.map_size}&rooms=${rooms_value}&adults=${adults_value}&destination=${destination_value}`;
        };
        if(document.querySelector('.RootBody')){
          if (!validateSubmitOptions())return false;
          $('theBody').addClassName('searchingForResults');
          doPushPagePrep();
          $('theArnPushPage').show();
          $('theArnPushPageContent').show()
        };

        window.location.href = url;
      });
  }


hideArnSearchElement();
(function() {
  var placesAutocomplete = places({
    appId: config.algolia_app_id,
    apiKey: config.algolia_api_key,
    container: document.querySelector("input#address-input")
  }).configure({
    aroundLatLngViaIP: "false",
    type: "city"
  });
  placesAutocomplete.on("change", function resultSelected(e) {
    document.querySelector("input#address-input").value =
      e.suggestion.value || "";
    lat_lng = e.suggestion.latlng;
  });
})();

/*
https://events.hotelsforhope.com/v6?currency=USD&type=geo&siteid=60336&longitude=-80.10643370000000&latitude=26.10879170000000&radius=5&checkin=10/2/2020&nights=3&properties=x378,x24437,x208368,x2636,x2324,x235230,x39947,x10505,x269736,x1714083,x13941,x848867,x3846047&map&locationlabel=Tortuga-Main+Stage&cid=GROUP-EVENT-EMAIL&pageSize=10&useMiles&points=-80.104529|26.114917|Tortuga-Sunset+Stage,-80.119458|26.100938|Water+Taxi+Stop+(Tickets+Extra$),-80.106137|26.110877|Water+Taxi+Stop+(Tickets+Extra$)&propertytypes=Hotel,Motel,Resort,Hostel,Ext.%20Stay,Boutique,Weekly%20Rentals&groupid=41307&utm_source=internal


https://events.hotelsforhope.com/v6?currency=USD&type=geo&siteid=59243&longitude=-97.74319800000000&latitude=30.26457130000000&radius=100&checkin=2/12/2021&nights=2&properties=x209332,x13333,x3979523,x1202321,x44262,x180438,x3819096,x16664,x51196,x2302516,x442664,x621113,x650166,x45491,x1258332,x258950&map&locationlabel=Marathon+Starting+Line&cid=GROUP-EVENT-EMAIL&pageSize=15&useMiles&points=-97.74193550000000|30.27171120000000|Finish+Line&propertytypes=Hotel,Motel,Resort,Hostel,Ext.%20Stay,Boutique,Weekly%20Rentals&groupid=40435&utm_source=internal

*/