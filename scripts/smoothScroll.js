$(document).ready(function(){
    // Add smooth scrolling to all the links
    $('.about, .ability, .projects, .contact').on('click', function(ev){
        // Make sure this.hash has a value before overriding default behaviour
        if (this.hash !== '') {
            // Prevent Default behaviour
            ev.preventDefault()
            // Store hash
            var hash = this.hash
            // Using JQuery's animate method to add smooth scroll
            // The optional number (800) specifies the number of milliseconds it 
            // takes to scroll to specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 400, function(){
                // Add hash (#) to URL when done scrolling
                window.location.hash = hash
            })
        }
    })
})