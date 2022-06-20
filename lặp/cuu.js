let haha, s, a;
haha = "<table border='1'>"
for (s = 1; s <= 9; s++) {
    haha = haha + "<tr>";
    for (a =1; a <=9; a++)
    haha = haha + "<td>" + a + "*" + s + "=" + s * a + "</td>"
}
 haha = haha + "</table>";
 document.write(haha)