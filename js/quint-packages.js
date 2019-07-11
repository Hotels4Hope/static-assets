if (document.querySelector('.input-div')) {

    window.smoothScroll = function (target, stadium) {

        document.getElementById('packageSelection').value = stadium;
        var scrollContainer = target;
        do { //find scroll container
            scrollContainer = scrollContainer.parentNode;
            if (!scrollContainer) return;
            scrollContainer.scrollTop += 1;
        } while (scrollContainer.scrollTop == 0);

        var targetY = 0;
        do { //find the top of target relatively to the container
            if (target == scrollContainer) break;
            targetY += target.offsetTop;
        } while (target = target.offsetParent);

        scroll = function (c, a, b, i) {
            i++;
            if (i > 30) return;
            c.scrollTop = a + (b - a) / 30 * i;
            setTimeout(function () {
                scroll(c, a, b, i);
            }, 20);
        }
        // start scrolling
        scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
    }



    let stadium = document.querySelector("#stadiumSelection");
    let package = document.querySelector('#packageSelection');

    function buildURL(input) {
        let goButton = document.querySelector('#goButton');
        let finalURL;
        input.addEventListener("change", function () {
            finalURL = stadium.value + '&package=' + package.value;
            goButton.href = finalURL;
            console.log(finalURL);
        });
    }

    buildURL(package);
    buildURL(stadium);

}

if (document.querySelector('.ArnProperty')) {
    let params = new URLSearchParams(document.location.search.substring(1));
    let package = params.get('package');
    localStorage.setItem('package', package);
    jQuery(document).on('ratesReadyEvent', function () {
        setTimeout(function () {
            if (!document.querySelector('.budgetTag')) {
                updateTier(package);
            }
        }, 1);
    });
}

function updateTier(tier) {
    let list = document.querySelectorAll('.ArnProperty');
    let price;
    let limit;
    if (tier === 'LowerLevel') {
        limit = 400;
    } else {
        limit = 250;
    }

    list.forEach(function (element) {
        price = element.querySelector('.arnUnit').textContent;
        price = parseFloat(price);
        var divTag = document.createElement("div");
        divTag.setAttribute('class', 'budgetTag');
        divTag.setAttribute('style', 'color: white; padding-top: 7px; font-weight: 500; text-align: center; height: 30px;');
        if (limit < price) {
            element.querySelector('.arnCurrency').style.color = 'red';
            element.querySelector('.arnUnit').style.color = 'red';
            divTag.style.backgroundColor = '#bf4848';
            divTag.innerHTML = '$' + Math.trunc(price - limit) + ' over budget';
        } else {
            divTag.innerHTML = '$' + Math.trunc(limit - price) + ' under budget';
            divTag.style.backgroundColor = '#04800d';
        }
        element.querySelector('.ArnPropThumb').insertAdjacentElement('afterbegin', divTag)
    });
}