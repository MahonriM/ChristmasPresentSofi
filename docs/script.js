var f =new Date();
month=f.getMonth()+1;
if( f.getDate()==24 && month==12){
    document.writeln("<h1>Happy Christmas Eve Sofia/Feliz Noche Buena Sofia</h1>");
}
if(f.getDate()==25 && month==12){
    document.writeln("<h1>Happy Christmas Sofia/Feliz Navidad Sofia</h1>");
}
else{
    document.writeln("<h1>Felices Fiestas</h1>");
}