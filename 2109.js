document.write('<h2>Hello the external JS<h2>');
x = '<h1>Hello</h1>';
document.write(x);
function add()
{
	a = 10;
	b = 2;
	y=a % b;
	document.write(y);
	document.write(x);
}
add();
document.write('<br>',a);
document.write(b);
x = 100;
y = 200;
document.write('<br>',x);
document.write('<br>',y);
x+=y;
document.write('<br>kết quả x+=y la ' ,x); 
document.write('<br>',x);
document.write('<br>',y);
x-=y;
document.write('<br>kết quả x-=y la ' ,x);
document.write('<br>',x);
document.write('<br>',y);
x*=y;
document.write('<br>kết quả x*=y la ' ,x); 
diem = 12;
if ((diem > 10)||(diem <= 0)) document.write('<br>điểm ',diem,' la sai');
else document.write('<br>đúng');
s = 'chung';
document.write('<br>độ dài của xâu là ',s.length);
document.write('<br>tổng tiền ',parseInt('100')+parseInt('200.2')+parseInt('300.3'));
document.write('<br>tổng tiền ',parseInt('100')+parseFloat('200.2')+parseFloat('300.3'));
x = 123; y = 456;
document.write('<br>'+x+y); 
document.write('<br>');
document.write('123'+ 456 + 789); 
document.write('<br>');
document.write(123 + '456' + 789); 
document.write('<br>');
document.write(123 + 456 + '789'); 
document.write('<br>số Pi có giá trị ',Math.PI);
with(Math)
{
	document.write('<br>số E có giá trị ',E);
	document.write('<br>số căn 2 có giá trị ',SQRT2);
	document.write('<br>số 15 mũ 2 có giá trị ',pow(15,2));
	//floor(0.9999)=0 ; ceil(0.00001)=1 ; round(0,3;0,7)=(0,1) ;
}
document.write('<br>tổng tiên '+(parseInt('A/123'.split('/')[1])+parseInt('B/456'.split('/')[1])+parseInt('C/789'.split('/')[1])));	
str = 'ABCDEFGHIJKLMN';
document.write('<br>',str.charAt(1));
document.write('<br>',str.charCodeAt(5));
str1 = 'ABC';
str2 = 'DEF';
document.write('<br>',str1.concat(str2));
//document.write('<br>',String.formCharCode(112,108,97,105,110));
var str3 = 'BABEBNUBUEBEBNB';
document.write('<br>',str3.indexOf('BEB'))
document.write('<br>',str3.lastIndexOf('BEB'))
s = 'The rain in Japan fall main in the plain';
document.write('<br>',s.replace('the','this'));//tìm và thay thế
document.write('<br>',s.slice(9,17));//lấy xâu con
x = 125; //đổi cơ số
document.write('<br>',x.toString([2]));
document.write('<br>Hôm nay là thứ ',new Date().getDay());
document.write('<br>Hôm nay là ngày ',new Date().getDate());
document.write('<br>Tháng ',new Date().getMonth());
document.write('<br>Năm ',new Date().getFullYear());
document.write('<br>Bây giờ là ',new Date().getHours(),'.',new Date().getMinutes(),'.',new Date().getSeconds());

	

