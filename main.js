// Automatically update the current year in footer
let year = new Date();
let currentYear = year.getFullYear();
document.getElementById("current-year").innerHTML = currentYear;

// All inputs are required
let inputs = document.querySelectorAll("input,textarea");
inputs.forEach((input) => {
  input.setAttribute("required", true);
});

// Lazy loading for the images
// let images = document.images;
// console.log(images);
// images.forEach((image) => {
//   // 3. For each individual image, call setAttribute()
//   image.setAttribute("loading", "lazy");
// });

// jQuery for header toggle menu in mobile
$(function () {
  $(".toggler").on("click", function () {
    $(".nav").toggleClass("active");
  });
});

// Slider
let sliderImage = document.querySelector(".slider img");
let bullets = document.querySelectorAll(".slider .bullets li");

let sliderImages = [
  "images/slider-01.jpg", // Default
  "images/slider-02.png",
  "images/slider-03.png",
  "images/slider-04.jpg",
  "images/slider-05.jpg",
];

bullets.forEach((bullet, index) => {
  bullet.addEventListener("click", () => {
    // Remove active class from all bullets
    bullets.forEach((b) => b.classList.remove("active"));
    // Add active class to the clicked bullet
    bullet.classList.add("active");

    // Add fade-out class
    sliderImage.classList.add("fade-out");

    // Change the image source after the fade-out transition
    setTimeout(() => {
      sliderImage.src = sliderImages[index];
      // Remove fade-out class to fade-in the new image
      sliderImage.classList.remove("fade-out");
    }, 400);
  });
});
