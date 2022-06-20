let N;
        for (N = 1; N <= 100; N++) {
            if (N % 3 == 0 && N % 5 !== 0) {
                document.write("Fizz" + "<br>");
                continue;
            } else if (N % 5 == 0 && N % 3 !== 0) {
                document.write("Buzz" + "<br>");
                continue;
            } else if (N % 3 == 0 && N % 5 == 0) {
                document.write("FizzBuzz" + "<br>");
                continue;
            }
        }   document.write (N + "<br>");