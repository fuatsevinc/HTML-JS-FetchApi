document.querySelector("#button1").addEventListener("click", TextVerisiAl);
document.querySelector("#button2").addEventListener("click", JsonVerisiAl);
document.querySelector("#button3").addEventListener("click", ApiVerisiAl);


function TextVerisiAl(){
    fetch("textverisi.txt").then(function(cevap){

        return cevap.text();
    }).then(function (veri){
        document.getElementById("output").innerHTML += veri;
    });
}

function JsonVerisiAl(){
    fetch("jsonverisi.json").then(function(cevap){

        return cevap.json();
    }).then(function (veriListesi){
        
        let output = "<ul>";
        veriListesi.forEach(function(veri){
            output += `<li> ${veri.title} - ${veri.body}</li>`
        })

        output += "</ul>"

        document.getElementById("output").innerHTML += output;
        // console.log(veri)
        // document.getElementById("output").innerHTML += data;
    });
}


function ApiVerisiAl(){
    fetch("https://api.github.com/users").then(function(cevap){

        return cevap.json();
    }).then(function (userListesi){
        
        let output = "<ul>";
        userListesi.forEach(function(user){
            output += `<li>Kullanıcı Adı ${user.login}</li>`
        })

        output += "</ul>"

        document.getElementById("output").innerHTML += output;
    });
}
