var dataOfAllValleys = [{
                          Name: "Neelum Valley",
                          District: "Neelum District",
                          Territory:"Azad Kashmir",
                          Area : "144 kilometres",
                          Language: "Hindko",
                          Top_Hotels :["Shangrila Sharda Resort","Pine Park Lodges" , "Waadi Resort Sharda"],
                          Para : "Neelum valley is one of the most attractive places for tourists due to its famous lush greenery, springs, streams, lakes and hilly and sloppy mountains. Some of its famous places like Athmuqam, Kutton Jagran, Karen, Neelum, Ratti Galli, Baboon, Noori top, Sharda, Sharda Fort, Sharda University (The Oldest University of Sub-Continent), Arrang Kel, Surgon, Halmet, Taobut and many more. Patlian Lake and Baboon Top are new addition in Neelum Valley’s attractions."
                        },
                        {
                          Name: "Hunza Valley",
                          District: "Neelum District",
                          Territory:"Azad Kashmir",
                          Area : "144 kilometres",
                          Language: "Hindko",
                          Top_Hotels :["Shangrila Sharda Resort","Pine Park Lodges, Waadi Resort Sharda"],
                          Para : "Neelum valley is one of the most attractive places for tourists due to its famous lush greenery, springs, streams, lakes and hilly and sloppy mountains. Some of its famous places like Athmuqam, Kutton Jagran, Karen, Neelum, Ratti Galli, Baboon, Noori top, Sharda, Sharda Fort, Sharda University (The Oldest University of Sub-Continent), Arrang Kel, Surgon, Halmet, Taobut and many more.In addition, Neelum Valley offers you to visit the most beautiful lake “Ratti Gali”. Patlian Lake and Baboon Top are new addition in Neelum Valley’s attractions"

                        }


                       ];




var allValleys = document.getElementsByClassName("cool");


var myFunction = function() {

    var nameOfValley = this.innerText;

    for (var i = 0; i < dataOfAllValleys.length; i++) {

      if(dataOfAllValleys[i].Name==nameOfValley)
      {
         console.log(dataOfAllValleys[i].Name)
         document.querySelector('#name').value = "Name:  " + dataOfAllValleys[i].Name;
         document.querySelector('#district').value = "District:  " + dataOfAllValleys[i].District;
         document.querySelector('#territory').value = "Territory:  " + dataOfAllValleys[i].Territory;
         document.querySelector('#area').value = "Area:  " + dataOfAllValleys[i].Area;
         document.querySelector('#language').value = "Language:  " +dataOfAllValleys[i].Language;
         var topHotels = dataOfAllValleys[i].Top_Hotels;
         document.querySelector('#topHotels').value = "Top Hotels:  " + topHotels[0] + " , " + topHotels[1] + " , " + topHotels[2];
         document.querySelector('#para').value = dataOfAllValleys[i].Para;
      }

    }

    var element = document.getElementById("div");
    element.classList.remove("hide");
    var element2 = document.getElementById("div2");
    element2.classList.add("hide");


};

for (var i = 0; i < allValleys.length; i++) {
    allValleys[i].addEventListener('click', myFunction, false);
}
