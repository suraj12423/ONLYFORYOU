// Persistent Music Player - Session Based (Fixes Reuse & Start Logic)
document.addEventListener("DOMContentLoaded", function () {
    const bgMusic = document.getElementById("bgMusic");
    if (!bgMusic) return;

    bgMusic.volume = 0.5;

    // Check if music has been activated by the Code Entry
    const isMusicActive = sessionStorage.getItem("musicActive") === "true";
    const savedTime = parseFloat(sessionStorage.getItem("bgMusicTime") || "0");

    // Helper: Save state to Session Storage (Clears when tab/browser closes)
    const saveState = () => {
        if (bgMusic.currentTime > 0) {
            sessionStorage.setItem("bgMusicTime", bgMusic.currentTime);
        }
    };

    // Only auto-play if explicitly activated (i.e., after code entry)
    if (isMusicActive) {
        if (savedTime > 0) {
            bgMusic.currentTime = savedTime;
        }

        const playPromise = bgMusic.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => console.log("Auto-play prevented:", error));
        }
    }

    // Save state on unload and visibility change
    window.addEventListener("beforeunload", saveState);
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === 'hidden') saveState();
    });

    // Periodic save for robustness
    setInterval(saveState, 500);
});
