// vòng lặp for có sử dụng dấu phẩy
for(var i = 0, j = 10 ; i <= 10; i++, j--) {
    var sum = i + j;
    Document.write(i + " + " + j + " = " + sum);
}

// vòng lặp pvowsi đều kiện phức tạp
var text = 'hello';
while (text !== 'q') {
    document.write(text + '<br/>' );
    text = prompt('Enter a text to print. Enter "q" to quit. ');

}
//vòng lặp là khối lệnh lặp đi lặp lại nhiều lần
//vòng lặp giúp ta viết dc các mã nguồn ngắn gọn hơn
//vòng lặp bao gồm :
//-đánh giá 
//-thực thi
//các vòng lặp dc hổ trợ bởi: for, while và do-while


//vòng lặp while
//lặp lại một khối lệnh nếu biểu thức điều kiện trả về giá trị đúng
// cú pháp:
//while (lôp-continuation-condition) {
    //statement(s)
//}
// trong dok 
//loop-continuation-condition : là biểu thức diều kiện
//statement(s) :là các câu lệnh dc thực thi trong mỗi lần lặp

// vòng lặp do-while
// cú pháp:
// do {
//  statements(s)
//} while (loop-continuation-condition);
// trong dok:
// statement(s): câu lệnh thực thi
// loop-continuation-condition: biểu thức điều kiện nếu trả về giá trị là true thì vòng lặp tiếp tục thực thi còn về giá trị là false thì vòng lắp kết thúc
//thân vòng lặp dc thực hiện ít nhất 1 lần kể cả biểu thức điều kiện trả về là sai
// vd tính tổng số nguyên
var sum = 0;
var number;
do {
    number = parseInt(prompt('Enter a number'));
    sum += number;
} while (number != 0) ;
document.write("the sum is: = sum");
//câu lệnh break
//break dùng để thoát khỏi vòng lặp mà k đi tới điểm cuối
//câu lệnh continue
// để nhảy qua một phần của khối lệnh vả bắt đầu vòng tiếp theo
// lặp vô hạn
// là chuổi các câu lệnh dc thục hiện lặp đi lặp lại k có điểm dừng
//vòng lặp lồng nhau
//1 vòng lặp có thể chứa bên trong 1 vòng lặp khác
// k hạn ché số lượng vòng lặp lồng nhau
//vd
//forr ( var i = 0 ; i < 5; i++ ){
//   for(var j = 0; j < 10; j++){
//       console.log("*");
//    }
//  console.log();
// }
