export function setupScrollToTopButton() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
    // Function to handle scroll events
    function handleScroll() {
      if (window.scrollY > 500) {
        // Show the button
        scrollToTopBtn.style.opacity = "1";
      } else {
        // Hide the button
        scrollToTopBtn.style.opacity = "0";
      }
    }
  
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
  
    // Scroll to the top of the page when the button is clicked
    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  
    // Initially, hide the button
    scrollToTopBtn.style.opacity = "0";
  }