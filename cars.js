window.onload = function(){
    function Auto(model, price, dateV, photo){
        
        this.model = model
        this.price = price
        this.dateV = new Date(dateV)
        this.photo = photo
        this.info = function(){
            let mounts = this.dateV.getMonth() + 1
            if(mounts < 10){
                mounts = "0" + mounts
            }
            return "<img src = './img/" + this.photo + "' width = '200px'>" + "Модель: " + this.model +  " Ціна: " + this.price + " Дата: " + this.dateV.getDate() + " " + mounts + " " + this.dateV.getFullYear()
        }
    }
    const AutoSecond = new Auto("BMW M5", 45000, "2016-03-19", "one.jpg")
    //document.getElementById("d2").innerHTML = AutoSecond.info()
    console.log(AutoSecond.dateV.getTime())
    /* const AutoThird = new Auto("Porsche", 78000, 2019-4-16)
    document.getElementById("d3").innerHTML = AutoThird.info()
                                                            */
    let garage = [AutoSecond, new Auto("BMW M4", 93000, "2021-03-27", "two.jpg"), new Auto("BMW M3", 31000, "2017-07-17", "three.jpg"), new Auto("Porsche", 88000, "2019-01-10", "four.jpg"), new Auto("Mclaren", 60000, "2022-11-29", "five.jpg"), new Auto("Audi", 67000, "2019-05-12", "six.jpg"), new Auto("Jeep", 70400, "2018-02-25", "seven.jpg")]
    /*let garageInfo = ""
    for(let i = 0; i < garage.length; i++){
        garageInfo += garage[i].info() + "<br>"
        document.getElementById("d3").innerHTML = garageInfo
    } */
    function showGarage(num){
        let text = ""
        if(num == null || num == 0 || num == false || num == false || num == ""){  //////// показує всі авто
            num = garage.length
        }

        //////// сортує ціну
       /* garage.sort(function(a, b){
            a.price - b.price
            return b.price - a.price
        })
        */
       garage.sort(function(a, b){
        return b.dateV.getTime() - a.dateV.getTime()
       })

       // для того щоб сортувати дату потрібно їх перевести в мілісекунди метод гет тайм повертає мілісекунди


        for(let i = 0; i < num; i++){
            if(i % 2 == 0 ){
                text += "<p class = 'blclass' >";
            } else {
                text += "<p>"
            }
            text += garage[i].info() + "</p>"

        }
        document.getElementById("d3").innerHTML = text
    }
    document.getElementById("btnFive").onclick = function(){
        topPrice(garage, 3)
    }

    document.getElementById("btnFour").onclick = function(){
        minNum(garage)
    }

    document.getElementById("btnThi").onclick = function(){
        maxNum(garage)
    }

    
    showGarage(4)
    document.getElementById("btnOne").onclick = function(){
        showGarage()
    }

    document.getElementById("btnSec").onclick = function(){
        search()
        
    }
    
    function search(){
        let result = ""
        let haveCar = false
        let autoSearch = document.getElementById("textSearch").value // достає інформацію з форми яку вводить людина
        for(let x = 0; x < garage.length; x++){ // перебирає гараж
            if(garage[x].model.toLowerCase().indexOf(autoSearch.toLowerCase()) != -1){ // пошук моделі в гаражі і присвоєння їх нижнього регістру
               // document.getElementById("d3").innerHTML = garage[x].info() // вивод конкрет авто в якому знаходяться авто
               result += "<p>" + garage[x].info() + "</p>"
                haveCar = true // перевіряємо чи знайшли авто 
               // break // зупинка циклу так як авто знайшли
            }
        }
        if(!haveCar){ // тут перевіряємо авто на його наявність
            document.getElementById("d3").innerHTML = "В гаражі немає такого авто!"
        }
     else{
        document.getElementById("d3").innerHTML = result
     }   
    
        
     
    }
    function maxNum(garage){
        let max = garage[0].price
        let index = 0 // записуєм індекс авто ціну якого вважаємо максимальною
        //alert(max)
        for(let i = 1; i < garage.length-1; i++){
            if(garage[i].price > max){
                max = garage[i].price
                index = i // записуєм індекс авто яке подорожче
            }
        }
        document.getElementById("d3").innerHTML = garage[index].info()
    
    }

    function minNum(garage){
        let min = garage[0].price
        let index = 0
        for(let i = 1; i < garage.length; i++){
            if(garage[i].price < min){
                min = garage[i].price
                index = i
            }
        }
        document.getElementById("d3").innerHTML = garage[index].info()
    }
    
    function topPrice(garage, number){
        let text = ""
        garage.sort(function(a, b){
            return b.price - a.price
        })
        for(let i = 0; i < number; i++){ // перебираэм список автомобылыв
            if(i % 2 == 0){ // дивимось цндекс авто і якщо він чотний то робимо синій фон
                text += "<p class = 'blclass'>" //
            } else{
                text += "<p>"
            }
            text += garage[i].info()+"</p>" // в тіло абзаца добавляєм інформацію про авто та закриваєм тег п
        }
        document.getElementById("d3").innerHTML = text // вивод
    }
       
    
    
}

    // повторити таке саме на ін тему
    


 /* 1.зробити щоб виводилось немає авто!
 
 1) потрібно було дізнатись чи є взагалі авто в гаражі 
 далі іде пошук в гаражі чи є саме цей автомобіль який хоче користувач 
 якщо є то вивести його якщо немає то написати що немає
 і вивести кінцевий результат

 2.найти і вивести самий дорогий і самий дешевий авто

 2)
 */
 
///////// зробить схоже на іншу тему