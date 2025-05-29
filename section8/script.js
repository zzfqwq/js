"use strict";

// Selecting elements
console.log(document.documentElement); // 整个 HTML 文档节点
console.log(document.head); // <head> 元素
console.log(document.body); // <body> 元素

// 使用 querySelector 和 querySelectorAll
const header = document.querySelector(".header"); // 选择第一个 class 为 'header' 的元素
console.log(header);

const allSections = document.querySelectorAll(".section"); // 获取所有 class 为 'section' 的元素
console.log(allSections);

// 使用 getElementById、getElementsByTagName 和 getElementsByClassName
const section1 = document.getElementById("section--1"); // 通过 ID 获取元素
console.log(section1);

const allButtons = document.getElementsByTagName("button"); // 获取所有 <button> 元素
console.log(allButtons);

const allBtnClass = document.getElementsByClassName("btn"); // 获取所有 class 为 'btn' 的元素
console.log(allBtnClass);

// Creating and inserting elements
const message = document.createElement("div");
message.classList.add("cookie-message");

// message.textContent = 'We use cookied for improved functionality and analytics.';
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// 将 message 元素插入到 header 元素的最后一个子元素位置
header.append(message);

// 其他插入位置的可选操作（被注释掉的）
// header.prepend(message); // 插入到 header 最前面
// header.append(message.cloneNode(true)); // 复制一份并插入
// header.before(message); // 插入到 header 之前
// header.after(message);  // 插入到 header 之后

// Delete elements
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    // message.remove(); // 更现代简洁的方法
    message.parentElement.removeChild(message); // 老写法，更兼容旧浏览器
  });

// Styles
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

document.documentElement.style.setProperty("--color-primary", "orangered");

// Attributes
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute("designer"));
logo.setAttribute("company", "Bankist");

console.log(logo.src);
console.log(logo.getAttribute("src"));

const link = document.querySelector(".nav__link--btn");
console.log(link.href);
console.log(link.getAttribute("href"));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add("c", "j"); // 添加类名
logo.classList.remove("c", "j"); // 移除类名
logo.classList.toggle("c"); // 切换类名（有则删，无则加）
logo.classList.contains("c"); // 检查是否包含某个类名

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section2 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset);

  console.log(
    "height/width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
});

// Scrolling
// window.scrollTo(
//   s1coords.left + window.pageXOffset,
//   s1coords.top + window.pageYOffset
// );

// window.scrollTo({
//   left: s1coords.left + window.pageXOffset,
//   top: s1coords.top + window.pageYOffset,
//   behavior: 'smooth',
// });

section1.scrollIntoView({ behavior: "smooth" });

const alertH1 = function (e) {
  alert("addEventListener: Great! You are reading the heading :D");
};

h1.addEventListener("mouseenter", alertH1);

setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("LINK", e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop propagation
  // e.stopPropagation(); //能阻止冒泡到父元素
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("CONTAINER", e.target, e.currentTarget);
});

document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("NAV", e.target, e.currentTarget);
});

const h1 = document.querySelector("h1");

// Going downwards: child
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest(".header").style.background = "var(--gradient-secondary)";
h1.closest("h1").style.background = "var(--gradient-primary)";

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = "scale(0.5)";
});

// 当 HTML 解析完毕、DOM 树构建完成后触发（不等待图片、CSS等资源加载）
document.addEventListener("DOMContentLoaded", function (e) {
  console.log("HTML parsed and DOM tree built!", e);
});

// 当页面所有资源（包括图片、CSS、iframe等）完全加载完成后触发
window.addEventListener("load", function (e) {
  console.log("Page fully loaded", e);
});

// 当用户即将离开页面（关闭、刷新、跳转）时触发（常用于弹窗确认）
// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault(); // 某些浏览器需要这一句才能触发提示
//   console.log(e);
//   e.returnValue = ''; // 显示浏览器默认离开确认弹窗
// });
