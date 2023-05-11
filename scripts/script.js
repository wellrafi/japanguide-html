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



    $('.form-input').on('click',function (e) {
        $(this).find('.target-form-input').toggleClass('active_element')
    })
    // $(document).on("click", function(e) {
    //     if ($(e.target).is(".target-form-input") === false) {
    //         $(".target-form-input").removeClass("active_element");
    //     }
    //     console.log(e)
    // });

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

    $('.map').on('mouseover', function () {
        let name = $(this).data('name')
        $('.text-mapping').removeClass('text-white')
        $('.text-mapping').removeClass('text-xl')
        $(`.text-mapping`).css({
            "-webkit-text-stroke" : "0px transparent",
            "text-stroke" : "0px transparent",
            "transform" : "none"
        })
        $('.map').attr('fill', '#dbdbdb')
        $(this).attr('fill', '#F34646')
        $(`.${name}`).addClass('text-white')
        $(`.${name}`).addClass('text-xl')
        $(`.${name}`).css({
            "-webkit-text-stroke" : "1px #F34646",
            "text-stroke" : "1px #F34646",
            "transform" : "translateY(-5px)"
        })
    })



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