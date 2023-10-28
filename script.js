let existingWindow = null;

// Add a keydown event listener to the window
window.addEventListener('keydown', function(event) {
    // Check if the pressed key is "k" (key code 75 or key value "K" or "k")
    if (event.key === 'k' || event.key === 'K') {
        // If the user has previously opened a window, focus on that window
        if (existingWindow && !existingWindow.closed) {
            existingWindow.focus();
        } else {
            // Otherwise, open a new window and remember it
            existingWindow = window.open("https://classroom.google.com/"); // Replace with the desired URL
        }
    }
});








// Add a click event listener to close the modal when the user clicks anywhere outside the modal
document.body.onclick = function(event) {
    var modal = document.querySelector('.modal');
    if (modal && event.target === modal) {
        modal.parentNode.removeChild(modal);
    }
};

// JavaScript code will go here
window.addEventListener('load', function() {
    // Hide the loading screen after 10 seconds
    setTimeout(function() {
        var loadingScreen = document.querySelector('.loading-screen');
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
    }, 8000); // 8 seconds in milliseconds
});

window.addEventListener('load', function() {
    // Hide the loading screen after 10 seconds
    setTimeout(function() {
        var loadingScreen = document.querySelector('.loading-screen-index');
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
    }, 4000); // 4 seconds in milliseconds
});


function displayAd() {
    var adContainer = document.createElement("div");
    adContainer.id = "ad-container"; // Assign a unique ID to the ad container if needed
    document.body.appendChild(adContainer);

    var adScript = document.createElement("script");
    adScript.async = true;
    adScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    adScript.crossorigin = "anonymous";
    document.body.appendChild(adScript);

    var adElement = document.createElement("ins");
    adElement.className = "adsbygoogle";
    adElement.style.display = "block";
    adElement.setAttribute("data-ad-format", "fluid");
    adElement.setAttribute("data-ad-layout-key", "-ha+2t+5l-5k-6a");
    adElement.setAttribute("data-ad-client", "ca-pub-3160553381689260");
    adElement.setAttribute("data-ad-slot", "1359848004");

    // Add the ad element to the ad container
    adContainer.appendChild(adElement);

    // Include the AdSense JavaScript asynchronously
    (adsbygoogle = window.adsbygoogle || []).push({});
}
