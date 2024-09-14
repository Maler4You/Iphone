function initMap() {
    var location = { lat: 48.2004, lng: 15.6230 }; // Coordinates of your location
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initMap();

    // Reviews slider
    const reviews = document.querySelectorAll('.review');
    let currentReview = 0;
    setInterval(() => {
        reviews[currentReview].classList.remove('active');
        currentReview = (currentReview + 1) % reviews.length;
        reviews[currentReview].classList.add('active');
    }, 5000);
});

document.addEventListener('DOMContentLoaded', function() {
    const reviews = document.querySelectorAll('.review');
    let currentReview = 0;

    function showNextReview() {
        reviews[currentReview].classList.remove('active');
        currentReview = (currentReview + 1) % reviews.length;
        reviews[currentReview].classList.add('active');
    }

    // Start the reviews slider
    setInterval(showNextReview, 5000);
});

document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-list > li');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(innerItem => {
                if (innerItem !== item) {
                    innerItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });
});
// Pronađi modal element
var modal = document.getElementById("imageModal");

// Pronađi element slike u modalu
var modalImg = document.getElementById("modalImage");

// Pronađi sve slike u galeriji
var galleryImages = document.querySelectorAll(".gallery img");

// Kada se klikne na sliku, otvori modal sa uvećanom slikom
galleryImages.forEach(function(img) {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

// Kada korisnik klikne na X (zatvori)
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

// Kada klikneš van slike, zatvori modal
modal.onclick = function() {
    modal.style.display = "none";
}
<script>
    document.addEventListener('DOMContentLoaded', function() {
        var video = document.getElementById('myVideo');
        video.play();
    });
</script>