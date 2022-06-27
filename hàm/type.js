
            var a=new Array(),n="";
            a[1]='Đ';a[2]='Ặ';a[3]='N';a[4]='G';a[5]=' ';a[6]='M';a[7]='I';a[8]='N';a[9]='H';a[10]=' ';a[11]='S';a[12]='A';a[13]='N';a[14]='G';a[15]=' ';a[16]='C';a[17]='O';a[18]='G';a[19]='Y';a[20]='M';a[21]='!';a[22]='!';
            function typeTextarea(){
                t = document.f.txt.value;
                j = t.length;
                if(j > 0)
                {
                    for(var i=1; i<=j; i++)
                    {
                        n = n + a[i];
                        if(i == 22)
                        {
                            document.f.txt.value = "";
                            n = "";
                        }
                    }
                }
                document.f.txt.value = n;
                n="";
                setTimeout("typeTextarea()", 1);
            }
        