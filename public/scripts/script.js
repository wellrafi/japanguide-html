function toggleClass(target1, target2, target3, target4) {
    toggle(target1)
    toggle(target2)
    toggle(target3)
    toggle(target4)
}

function toggle(target) {
    try {
        let doit = document.querySelector(target)
            doit.classList.toggle('active') 
    } catch (error) {
        target.classList.toggle('active')  
    }

}