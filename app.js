var tasklar = new Array(0);

//Tapshirigi Sil
function deleteTask(param){

	param.classList.toggle('deleted');
}


//Teze Tapshiriq Ucun
function yeniTask(){

document.write("<link rel='stylesheet' type='text/css' href='style.css'>");
document.write("<h1>Etməliyəm</h1>");

var taskSayi = prompt("Neçə Tapşırıq Edəcəksən?");

for(var j = 0; j < taskSayi; j++){

var newTask = prompt("Yeni Etməli Olduğu Tapşırığı Yaz");

tasklar.push(newTask);
} 

for(var i = 0; i < tasklar.length; i++){
	document.write("<li class='tasklar' onclick='deleteTask(this);'>" + tasklar[i] + "</li>" );
}

document.write("<a href='index.html'> Başa Qayıt </a>")

}




