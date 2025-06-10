const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.appendChild(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found 😢"));
    });
  });
};

const wait = function (seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

const loadNPause = async function () {
  try {
    let img = await createImage("img/img-1.jpg");
    console.log("Image 1 loaded");
    await wait(2);
    img.style.display = "none";

    img = await createImage("img/img-2.jpg");
    console.log("Image 2 loaded");
    await wait(2);
    img.style.display = "none";
  } catch (err) {
    console.error("Error Loading image:", err);
  }
};

loadNPause();

const loadAll = async function (imgArr) {
  try {
    const promises = imgArr.map((path) => createImage(path));
    const imgs = await Promise.all(promises);
    console.log("All image loaded", imgs);

    imgs.forEach((img) => img.classList.add("parallel"));
  } catch (err) {
    console.error("❌ Failed to load all images:", err);
  }
};

loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
