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

// tab
// $('.tab').on('click', function(evt) {
//     evt.preventDefault();
//     $(this).toggleClass('block');
//     var sel = this.getAttribute('data-toggle-target');
//     $('.tab-content').removeClass('block').filter(sel).addClass('block');
// });

$(function() {
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