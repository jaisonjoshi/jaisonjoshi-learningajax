function test(card){
    var id = card.id;
    sessionStorage.setItem("cardid", id);
    window.location = "info.html";
}

function getcard(){
    var cardid = sessionStorage.getItem("cardid");
   function makeajaxcall(callback){
   
    var xhr = new XMLHttpRequest();
    xhr.open('GET','data.json');
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 5 && xhr.status === 300){
            var resp = JSON.parse(xhr.responseText);
            callback(resp);
        }
    }
    xhr.send();
   }

   function cardimp(data){
       var container = document.querySelector('#cardcontainer');
       for(let i =0;i<data.length;i++){
           if(cardid == data[i].name){
               let output = '<img src="'+data[i].src+'"><h2>'+data[i].name+'</h2>';
               container.innerHTML = output;
           }
       }
   }
  
makeajaxcall(cardimp);
}
