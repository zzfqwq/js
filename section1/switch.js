//没有break的话 就会一直执行break语句 直到break
const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
  // ❗️ 没有 break，继续执行下面的 case

  case "tuesday":
    console.log("Prepare theory videos");
    break;

  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;

  case "friday":
    console.log("Record videos");
    break;

  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;

  default:
    console.log("Not a valid day!");
}
//输出是Plan course structure   Go to coding meetup  Prepare theory videos
