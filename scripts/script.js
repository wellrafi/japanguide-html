function toggleClass(targets) {
    targets.forEach(target => {
        toggle(target)
    });
}

function toggle(target) {
    try {
        let doit = document.querySelector(target)
            doit.classList.toggle('active_element') 
    } catch (error) {
        target.classList.toggle('active_element')  
    }
}

$(document).ready(function() {

    // scrolldown
    $('#scrolldown').on('click', function () {
        $(document.body).animate({
            top: 200
        }, 800);
    })
    // end scrolldown

    $('.form-input').on('click',function (e) {
        // $('.target-form-input').removeClass('active_element')
        $(this).find('.target-form-input').toggleClass('active_element')
    })

    // stupid idea but works close dropdown
    $(document).on('click', function (e) {
        if ($($(e.target).parent().parent().parent()[0]).hasClass('form-input')) return
        $('.target-form-input').removeClass('active_element')
    })
    // end stupid idea but works close dropdown

    $(document).on('click', '.adult-click', function (e) {
        let val = e.target.innerText.replace(/\s+/g, '')
        $('.adult-input').val(val.split('A')[0] + ' A' + val.split('A')[1])
    })

    $(document).on('click', '.kid-click', function (e) {
        let val = e.target.innerText.replace(/\s+/g, '')
        $('.kid-input').val(val.split('K')[0] + ' K' + val.split('K')[1])
    })


    $('.tab').click(function() {
  
      // Check for active
      $('.tab').removeClass('active');
      $(this).addClass('active');
  
      // Display active tab
      let currentTab = this.getAttribute('data-toggle-target');

      $('.tab-content').hide();
      $(currentTab).show();
  
      return false;
    });

    $('.image-item').on('click', function () {
        let url = $(this).attr('style');
        $('.image-zone').attr('style', url)
    })

    // swap currency
    $('.swap').on('click', function () {

        let swapElements = $('.swap')

        for (let i = 0; i < swapElements.length; i++) {

            let first = $(swapElements[i]).find('div:first-child')
            let last = $(swapElements[i]).find('div:last-child')

            let firstText = first.text();
            let lastText = last.text();
            
            first.text("")
            last.text("")
            
            last = last.text(firstText)
            first = first.text(lastText)
            
        }
    })

    // expand component
    $(document).on('click', '.wrap', function (e) {
        e.preventDefault()
        $(this).toggleClass('active')
    })

    // expand itinerary
    $(document).on('click', '.wrap-itin .trigger', function (e) {
        e.preventDefault()
        let parent = $($(this).parent())
        let less = $(this).attr('data-text-after')
        let more = $(this).attr('data-text')
        
        console.log(parent.find('wrap-itin'))

        parent.hasClass('active') ? parent.find('.trigger').text(more) : parent.find('.trigger').text(less)
        
        if (parent.find('.wrap-itin-deep')) {
            let insideRead = $('.wrap-itin-deep .trigger').attr('data-text-after')
            let insideLess = $('.wrap-itin-deep .trigger').attr('data-text')
            parent.find('.wrap-itin-deep').hasClass('active') ? parent.find('.wrap-itin-deep .trigger').text(insideRead) : parent.find('.wrap-itin-deep .trigger').text(insideLess)
        }
        
        $($(this).parent()).toggleClass('active')
    })

    $('.open-modal').on('click', function () {
        let target = $(this).data('target-modal');
        
        $(`${target}-overlay`).addClass('active');
        setTimeout(() => {
            $(target).addClass('active');
        }, 100);
        $('body').addClass('overflow-hidden')
    })

    $('.close-modal').on('click', function () {
        $('.modal-edit').removeClass('active');
        setTimeout(() => {
            $('.modal-edit-overlay').removeClass('active');
            $('body').removeClass('overflow-hidden')
    }, 100);
    })

    // end slider online shop


    // map controller 
    // let activeSlide = ['hokkaido', 'tohoku', 'kanto', 'chubu', 'kansai', 'chugoku', 'shikoku', 'kyushu', 'okinawa']
    let activeSlide = ['okinawa', 'kyushu', 'shikoku', 'chugoku', 'kansai',  'chubu',  'kanto',  'tohoku', 'hokkaido']
    changeMap('okinawa')

    $('.map').on('mouseover', function () {
        let name = $(this).data('name')
        let numberSlide = activeSlide.indexOf(name)
        changeMap(name)
        splideMap.go(numberSlide)
        splideMap2.go(numberSlide)
    })

    var splideMap = new Splide( '.splide_map', {
        type        : 'fade',
        autoWidth   : true,
        pagination  : false,
        arrows      : true,
        rewind      : true,
        classes     : {
            prev    : 'prev-map',
            next    : 'next-map'
        }
    });

    var splideMap2 = new Splide( '.splide_map_2', {
        type        : 'fade',
        autoWidth   : true,
        pagination  : false,
        arrows      : false,
        rewind      : true,
        
    });

    splideMap2.mount();

    splideMap.mount();
    splideMap.on( 'move', function (e) {
        changeMap(activeSlide[e])
        splideMap2.go(e)
    });

    function changeMap(name) {
        $('.text-mapping').removeClass('text-white')
        $('.text-mapping').removeClass('drop-shadow-2xl')
        $(`.text-mapping`).css({
            "transform" : "none",
            "filter" : "drop-shadow(0 0 2px transparent)",
            "text-decoration" : "none"
        })
        $('.map').attr('fill', '#dbdbdb')
        $(`.map[data-name=${name}]`).attr('fill', '#F34646')
        $(`.${name}`).addClass('text-black')
        $(`.${name}`).addClass('drop-shadow-2xl')
        $(`.${name}`).css({
            "transform" : "translateY(-5px)",
            "filter" : "drop-shadow(0 0 2px #fff)",
            "text-decoration" : "underline"
        })
        $('.sidebarmap').html(name)
    }

    // end map controller


    $('.nav-item.drop-down').on('mouseenter', function (){
        $('body').addClass('overflow-hidden')
        $('.dropdown-nav').removeClass('max-h-0')
        $('.dropdown-nav').removeClass('opacity-0')
    })
    $('.nav-item.drop-down').on('mouseleave', function (){
        $('body').removeClass('overflow-hidden')
        $('.dropdown-nav').addClass('max-h-0')
        $('.dropdown-nav').addClass('opacity-0')
    })


    // top destination slider

    let width = window.innerWidth
    // console.log('width', width)
    let container = width > 1536 ? 1350 : width > 1280 ? 1250 : width > 1024 ? 994 : width > 768 ? 738 : width > 640 ? 610 : 0
    // console.log('container', container)
    let getGap = (window.innerWidth - container) / 2
    // console.log('getGap', getGap)
    let amountSlide = $('.splide_l ul').find('.splide__slide').length - 1
    let currentSlide = 2
    var slideTopDest = new Splide( '.splide_l', {
        type        : 'loop',
        focus       : 'left',
        gap         : 24,
        autoWidth   : true,
        padding     : getGap,
        pagination  : false,
        arrows      : false,
        slideSize   : 500
    });
    
    slideTopDest.mount();
    slideTopDest.go(2)


    $('.destination-left').on('click', function () {
        // currentSlide = currentSlide === 0 ? amountSlide : currentSlide - 1
        // console.log(currentSlide)
        slideTopDest.getPrev()
    })
    $('.destination-right').on('click', function () {
        currentSlide  = currentSlide !== amountSlide ? 0 : currentSlide + 1
        slideTopDest.go(currentSlide)
        
    })
    // end top destination slider


    // searching destination
    let data = ['fukuoka','saga','nagasaki','kumamoto','oita','miyazaki','kagoshima','okinawa','niigata','toyama','ishikawa','fukui','yamanashi','nagano','gifu','shizuoka','aichi','ibaraki','tochigi','gunma','saitama','chiba','tokyo','kanagawa','aomori','iwate','miyagi','akita','yamagata','fukushima','tottori','shimane','okayama','hiroshima','yamaguchi','tokushima','kagawa','ehime','kochi','kanto','hokkaido','chubu','tohoku','kansai','chugoku','shikoku','kyushu']
    let search = ''

    addList(data)

    function component(spot) {
        return `
            <div class="flex option pl-5 gap-5 py-2 hover:bg-neutral-200 cursor-pointer capitalize search-destination-click">
                <div class="value text-base font-medium">${spot}</div>
            </div>
        `
    }

    $(document).on('click', '.search-destination-click', function (e) {
        let val = e.target.innerText.replace(/\s+/g, '')
        $('.searchdestination').val(val.slice(0, 1).toUpperCase() + val.slice(1))
    })

    $('.searchdestination').on('input', function (e) {

        search = e.target.value
        let searching = data.filter( d => { 
            if(d.indexOf(search) > -1) {return d }
            }) 
        
        searching = searching.length === 0 ? ['not found'] : searching

        addList(searching)

    })

    function addList(searching) {
        $('.spot-search').html('')
        let listElements = searching.map(d => component(d)).join('')
        $('.spot-search').append(listElements)
    }
    // end search destination


    // mobile modal booking
    $('.open-modal-booking').on('click', function (e) {
        $('.target-modal-booking').removeClass('invisible')
        $('.target-modal-booking').removeClass('opacity-0')
        $('body').addClass('overflow-hidden')
    })
    $('.close-modal-booking').on('click', function (e) {
        $('.target-modal-booking').addClass('invisible')
        $('.target-modal-booking').addClass('opacity-0')
        $('body').removeClass('overflow-hidden')
    })
    // end mobile modal booking 

});



// document.addEventListener('click', function (e) {
//     const specifiedElement = document.getElementsByClassName('active_element')
    
//     document.addEventListener('click', function (eve) {
//         if (specifiedElement.length > 0) {
//             const isClickInside = specifiedElement[0].contains(eve.target)
//             if (!isClickInside) {
//                 specifiedElement[0].classList.toggle('active_element')
//             }
//         }
//     })
// })