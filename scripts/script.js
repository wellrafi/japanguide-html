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