function payment() {
    let elnumber=number(document.getElementById('number').value);
    let sumpay;
    if (elnumber>400) {
        document.getElementById('bậc 1').value=50;
        document.getElementById('grant 11').value=(50*1678);
        document.getElementById('bậc 2').value=50;
        document.getElementById('grant l2').value=(50*1734);
        document.getElementById(' bậc 3').value=100;
        document.getElementById('grant l3').value=(100*2014);
        document.getElementById(' bậc4').value=100;
        document.getElementById('grant l4').value=(100*2536);
        document.getElementById('bậc 5').value=100;
        document.getElementById('grant l5').value=(100*2834);
        document.getElementById('bậc 6').value=(elnumber - 400);
        document.getElementById('grant l6').value=((elnumber - 400)*2927);
        sumpay=(50*1678)+(50*1734)+(100*2014)+(100*2536)+(100*2834)+((elnumber - 400)*2927);
    }
    else if (elnumber>300) {
        document.getElementById('bậc 1').value=50;
        document.getElementById('grant l1').value=(50*1678);
        document.getElementById('bậc 2').value=50;
        document.getElementById('grant l2').value=(50*1734);
        document.getElementById('bậc 3').value=100;
        document.getElementById('grant l3').value=(100*2014);
        document.getElementById('bậc 4').value=100;
        document.getElementById('grant l4').value=(100*2536);
        document.getElementById('bậc 5').value=(elnumber-300);
        document.getElementById('grant l5').value=((elnumber-300)*2834);
        sumpay=(50*1678)+(50*1734)+(100*2014)+(100*2536)+((elbậc-300)*2834);
        document.getElementById('bậc 6').value=null;
        document.getElementById('grant l6').value=null;
    }
        else if (elnumber>200) {
            document.getElementById('bậc 1').value=50;
            document.getElementById('grant l1').value=(50*1678);
            document.getElementById('bậc 2').value=50;
            document.getElementById('grant l2').value=(50*1734);
            document.getElementById('bậc 3').value=100;
            document.getElementById('grant l3').value=(100*2014);
            document.getElementById('bậc 4').value=(elbậc-200);
            document.getElementById('grant l4').value=((elnumber-200)*2536);
            sumpay=(50*1678)+(50*1734)+(100*2014)+((elnumber-200)*2536);
            document.getElementById('bậc 5').value=null;
            document.getElementById('grant l5').value=null;
            document.getElementById('bậc 6').value=null;
            document.getElementById('grant l6').value=null;
        }
            else if (elnumber>100) {
                document.getElementById('bậc 1').value=50;
                document.getElementById('grant l1').value=(50*1678);
                document.getElementById('bậc 2').value=50;
                document.getElementById('grant l2').value=(50*1734);
                document.getElementById('bậc 3').value=(elnumber-100);
                document.getElementById('grant l3').value=((elnumber-100)*2014);
                sumpay=(50*1678)+(50*1734)+((elbnumber-100)*2014) 
                document.getElementById('bậc 4').value=null;
                document.getElementById('grant l4').value=null;
                document.getElementById('bậc 5').value=null;
                document.getElementById('grant l5').value=null;
                document.getElementById('bậc 6').value=null;
                document.getElementById('grant l6').value=null;  
            }
                else if (elnumber>50) {
                    document.getElementById('bậc 1').value=50;
                    document.getElementById('grant l1').value=(50*1678);
                    document.getElementById('bậc 2').value=(elnumber-50);
                    document.getElementById('grant l2').value=((elnumber-50)*1734);
                    sumpay=(50*1678)+((elbậc-50)*1734);
                    document.getElementById('bậc 3').value=null;
                    document.getElementById('grant l3').value=null;
                    document.getElementById('bậc 4').value=null;
                    document.getElementById('grantl4').value=null;
                    document.getElementById('bậc 5').value=null;
                    document.getElementById('grantl5').value=null;
                    document.getElementById('bậc 6').value=null;
                    document.getElementById('grant l6').value=null;  
                }
                    else if (elnumber>0) {
                        document.getElementById('bậc 1').value=elnumber;
                        document.getElementById('grant l1').value=(elnumber*1.678);
                        sumpay=(elnumber*1678); 
                        document.getElementById('bậc 2').value=null;
                        document.getElementById('grant l2').value=null;
                        document.getElementById('bậc 3').value=null;
                        document.getElementById('grant l3').value=null;
                        document.getElementById('bậc 4').value=null;
                        document.getElementById('grant l4').value=null;
                        document.getElementById('bậc 5').value=null;
                        document.getElementById('grant l5').value=null;
                        document.getElementById('bậc 6').value=null;
                        document.getElementById('grant l6').value=null; 
                    }
                        else {
                            window.alert('undefined');
                        }
document.getElementById('payment').value=sumpay;
document.getElementById('paymenttax').value=(sumpay*(1+0.1));
}  
function reset() {
    document.getElementById('bậc').value=null
    document.getElementById('bậc 1').value=null;
    document.getElementById('grant l1').value=null;
    document.getElementById('bậc 2').value=null;
    document.getElementById('grant l2').value=null;
    document.getElementById('bậc 3').value=null;
    document.getElementById('grant l3').value=null;
    document.getElementById('bậc 4').value=null;
    document.getElementById('grant l4').value=null;
    document.getElementById('bậc5').value=null;
    document.getElementById('grant l5').value=null;
    document.getElementById('bậc 6').value=null;
    document.getElementById('grant l6').value=null;
    document.getElementById('payment').value=null;
    document.getElementById('paymenttax').value=null;
}    