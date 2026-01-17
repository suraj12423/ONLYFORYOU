/* --- No typing animation needed - text displays immediately --- */

/* --- Floating Emojis - Bottom to Top Flow --- */
const emojis = ["💖", "💛", "💝", "✨", "🦋", "💕", "💗", "💓", "💞", "💟"];
const container = document.querySelector(".floating-emojis");

if (container) {
  // Function to create a new floating emoji
  function createFloatingEmoji() {
    const span = document.createElement("span");
    span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    
    // Random horizontal position
    span.style.left = Math.random() * 100 + "%";
    
    // Random animation duration for variety (6-10 seconds)
    const duration = 6 + Math.random() * 4;
    span.style.animationDuration = duration + "s";
    
    // Random delay to stagger appearance
    span.style.animationDelay = Math.random() * 2 + "s";
    
    // Random size (20-35px)
    span.style.fontSize = (20 + Math.random() * 15) + "px";
    
    container.appendChild(span);
    
    // Remove emoji after animation completes
    setTimeout(() => {
      if (span.parentNode) {
        span.parentNode.removeChild(span);
      }
    }, duration * 1000 + 2000);
  }
  
  // Create initial emojis
  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      createFloatingEmoji();
    }, i * 500);
  }
  
  // Continuously create new emojis
  setInterval(() => {
    createFloatingEmoji();
  }, 1500);
}


/* --- Flip Card Functionality for Moments Page --- */
document.addEventListener("DOMContentLoaded", () => {
  const flipCards = document.querySelectorAll(".flip-card");
  
  flipCards.forEach((card) => {
    card.addEventListener("click", function() {
      const isFlipped = this.getAttribute("data-flipped") === "true";
      
      if (!isFlipped) {
        // Flip the card
        this.classList.add("flipped");
        this.setAttribute("data-flipped", "true");
        
        // Show caption after flip animation completes
        const caption = this.querySelector(".photo-caption");
        if (caption) {
          setTimeout(() => {
            caption.classList.add("visible");
          }, 600); // Wait for flip animation to complete
        }
      }
    });
  });
});

/* --- Message Page Animations --- */
document.addEventListener("DOMContentLoaded", () => {
  const messageParagraphs = document.querySelectorAll(".message-paragraph");
  
  if (messageParagraphs.length > 0) {
    // Show paragraphs one by one with delay
    messageParagraphs.forEach((para, index) => {
      setTimeout(() => {
        para.classList.add("visible");
      }, 1000 + (index * 400)); // Start after 1s, then each paragraph appears 400ms after the previous
    });
  }
  
  // Hearts are already wrapped in spans in HTML, so they'll animate automatically
});






