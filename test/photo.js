const photos = document.querySelectorAll(".gallery img");
const gallery = document.querySelector(".gallery");

let maxHeight = 0;

photos.forEach((photo) => {
  if (photo.height > maxHeight) {
    maxHeight = photo.height;
  }
});

gallery.style.height = `${maxHeight}px`;

document.addEventListener("DOMContentLoaded", () => {
  const photos = document.querySelectorAll(".gallery img");
  const gallery = document.querySelector(".gallery");

  let maxHeight = 0;

  photos.forEach((photo) => {
    if (photo.height > maxHeight) {
      maxHeight = photo.height;
    }
  });

  gallery.style.height = `${maxHeight}px`;
});

document.addEventListener("DOMContentLoaded", () => {
  const photos = document.querySelectorAll(".gallery img");
  const gallery = document.querySelector(".gallery");

  let maxHeight = 0;

  photos.forEach((photo, index) => {
    photo.src = `../resized_images/fotka${index + 1}.jpg`;

    if (photo.height > maxHeight) {
      maxHeight = photo.height;
    }
  });

  gallery.style.height = `${maxHeight}px`;
});
