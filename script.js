// Get the modal elements (Video Modal)
const modal = document.getElementById("videoModal");
const videoPlayer = document.getElementById("fullScreenVideo");
const modalCaption = document.getElementById("modalCaption");

// Function to open the modal and play the video
function openModal(videoSrc, captionText) {
  // Agar koi element na mila ho (jo pichla error tha), toh yahin ruk jaao
  if (!videoPlayer) {
    console.error("Error: The video player element with ID 'fullScreenVideo' was not found.");
    return;
  }
  
  // Set video source and caption
  videoPlayer.src = videoSrc;
  modalCaption.textContent = captionText;
  
  // Show the modal
  modal.style.display = "block";
  
  // Play the video
  videoPlayer.load(); 
  videoPlayer.play();
}

// Function to close the modal
function closeModal(event) {
  // Agar videoPlayer mila hi na ho toh koi kaam na karein
  if (!videoPlayer) return;

  // Stop propagation for clicks inside the modal content to prevent accidental closing
  if (event && event.currentTarget.className.includes('modal-content')) {
      event.stopPropagation();
      return;
  }
  
  // Check if the click was directly on the modal background or close button
  if (!event || event.target === modal || event.target.className.includes('close-btn')) {
    modal.style.display = "none";
    // Pause the video when closing
    videoPlayer.pause();
  }
}

// Close the modal if the user presses the ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});


// 🟢 NAYA CODE YAHAN SE SHURU HOTA HAI: AUDIO FUNCTIONALITY

function playBirthdaySound() {
    // HTML mein di gayi ID se audio element dhoondo
    const sound = document.getElementById('birthdaySound');
    
    if (sound) {
        // Sound play karne ki koshish karo
        sound.play().catch(error => {
            // Agar browser ne autoplay block kiya toh console mein message aayega
            // (Autoplay policy ki wajah se yeh ho sakta hai)
            console.log("Audio autoplay blocked, user interaction required: ", error);
        });
    }
}

// Page load hone ke baad turant sound chalao
// jab saare elements (jismein audio tag bhi shamil hai) load ho jayenge.
window.onload = function() {
    playBirthdaySound();
};
