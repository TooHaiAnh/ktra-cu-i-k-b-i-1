let menu = ['rau xào', 'thịt luộc', 'gà rán'];
do {
 input = prompt("Mời người dùng nhập vào C,R,U,D");
 if (input == 'c') { 
   menu.push(prompt("Mời người dùng nhập món ăn muốn thêm vào menu"));
   console.log("Menu món ăn sau khi thêm là:", menu);
   localStorage.setItem('so mon an trong menu',menu);
 console.log(localStorage.getItem('mon an',menu))
 }
 else if (input == 'r') {
   console.log("Menu món ăn được in ra là:", menu);
 }
 else if (input == 'u') {
   let viTriUpdate = menu.indexOf(prompt("người dùng nhập món muốn update"))
   menu[viTriUpdate] = prompt("Người dùng nhập món ăn mới thay thế món cũ:")
   console.log("Menu món ăn sau khi update là:", menu);
 }
 else if (input == 'd') {
   let viTriDelete = menu.indexOf(prompt("người dùng nhập món muốn Delete"));
   menu.splice(viTriDelete, 1);
   console.log("Menu món ăn sau khi delete là:", menu);
 }
}
while (input == 'c' || input == 'r' || input == 'u' || input == 'd');
