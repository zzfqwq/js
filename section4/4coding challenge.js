// 创建 textarea 元素并加入页面
document.body.append(document.createElement("textarea"));

// 创建 button 元素并加入页面
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const lines = text.split("\n");
  for (const [i, line] of lines.entries()) {
    const [first, second] = line.toLowerCase().trim().split("_");
    const camelCase = first + second[0].toUpperCase() + second.slice(1);
    const output = camelCase.padEnd(20) + "✅".repeat(i + 1);
    console.log(output);
  }
});
