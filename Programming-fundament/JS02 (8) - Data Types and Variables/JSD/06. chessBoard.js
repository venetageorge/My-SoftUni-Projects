function chessBoard(num) {
  let div = ``;
  let color = "black";
 
  for (let i = 0; i < num; i++) {
    let span = ``;
 
    if (i % 2 !== 0) color = "white";
    else color = "black";
 
    for (let j = 0; j < num; j++) {
      span += `
    <span class="${color}"></span>\n`;
 
      if (color === "black") color = "white";
      else color = "black";
    }
 
    div += `
  <div>
${span.replace(/^\s*\n/gm, "")}
  </div>`;
  }
 
  return `
<div class="chessboard">
${div.replace(/^\s*\n/gm, "")}
</div>`;
}
console.log(chessBoard(3));