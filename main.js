// Automatically update the current year in footer

let year = new Date();
let currentYear = year.getFullYear();
document.getElementById("current-year").innerHTML = currentYear;

// Lazy loading for the images
// let images = document.images;
// console.log(images);
// images.forEach((image) => {
//   // 3. For each individual image, call setAttribute()
//   image.setAttribute("loading", "lazy");
// });
