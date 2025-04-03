"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//for 循环只是绑定点击事件的过程，每个按钮的监听器会记住当时的 i，所以你点击时它知道你是谁、你是第几个 用了 let，每次 i 都是独立作用域，每个函数“记住的”是那一轮的 i 值
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);

  const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };
  //✅closeModal（不加括号）	👉 把函数本身传进去，等“点击时再执行”
  //❌ closeModal()（加括号）	👉 立刻执行函数，把结果（undefined）传进去
  btnCloseModal.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", function (e) {
    console.log(e.key);

    //如果我按了 Escape 键，而且弹窗当前是“显示状态”（也就是没有 hidden 类），那我就执行 closeModal() 把它关掉
    if (e.key === "Escape") {
      if (!modal.classList.contains("hidden")) {
        closeModal();
      }
    }
  });
}

// 此时所有点击都会输出 3，因为 var 没有块作用域
// for (var i = 0; i < 3; i++) {
//   btns[i].addEventListener("click", function () {
//     console.log(i);
//   });
// }
