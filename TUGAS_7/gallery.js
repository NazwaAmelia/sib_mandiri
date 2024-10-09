document.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const closeButton = document.getElementById("close");
  const audio = document.getElementById("audio");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImage.src = thumbnail.src;
      audio.currentTime = 0;
      audio.play();
    });
  });

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
    audio.pause();
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      audio.pause();
    }
  });
});
