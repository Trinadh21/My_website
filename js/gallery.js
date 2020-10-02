var arr=["../img/i2.png","../img/i3.jpeg","../img/i4.png","../img/i5.jpeg","../img/i1.jpeg"]
var i=0;
function slideshow()
{
    document.getElementById("first").src=arr[i];
    i++;
    i=i%5;
}