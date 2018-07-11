

var component1 = {
    options: {
        cities : {
            bra: ["Сан-Паулу", "Рио-де-Жанейро"],
            rus: ["Москва", "Санкт-Петербург"],
            ind: ["Мумбаи", "Дели"],
            chn: ["Шанхай", "Пекин"],
            zaf: ["Йоханнесбург", "Кейптаун"]
        },
        country : document.getElementById("country"),
        city : document.querySelector("#city")
    },

    init: function (options) {
        component1.options = $.extend(component1.options, options);
        console.log('initialization of chained dropdown lists "country+city" completed');
    },

    selectCountry: function(ev){
       component1.options.city.innerHTML = "";
        var c = this.value, o;
        for(let i = 0; i < component1.options.cities[c].length; i++){
            o = new Option(component1.options.cities[c][i],i.toString(),false,false);
            component1.options.city.add(o);
        }
    }
};

$(document).ready(function() {
    component1.init();
    window.onload = component1.selectCountry;
    component1.options.country.onchange = component1.selectCountry;
});

