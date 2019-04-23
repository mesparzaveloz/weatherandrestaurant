    function getRestaurant(param1, param2) {
        var opencity = param1;
        var opencountry = param2;
        console.log(opencity, "   ", opencountry);
        var urlopentable = "https://opentable.herokuapp.com/api/restaurants";
        var x, y, x1, x2, x3, x4, x5 =0;
        xarray = [];

        hotelSummary = {
            Price1: {
                otId:[],
                otName:  [],
                otCity: [],
                otState: [],
                otCountry: [],
                otAddress: [],
                otPhone: [],
                otZip: [],
                otImgURL: [],
                otReserveURL: [],
                otLat: [],
                otLong: []},
            Price2: {
                otId:[],
                otName:  [],
                otCity: [],
                otState: [],
                otCountry: [],
                otAddress: [],
                otPhone: [],
                otZip: [],
                otImgURL: [],
                otReserveURL: [],
                otLat: [],
                otLong: []},
            Price3: {
                otId:[],
                otName:  [],
                otCity: [],
                otState: [],
                otCountry: [],
                otAddress: [],
                otPhone: [],
                otZip: [],
                otImgURL: [],
                otReserveURL: [],
                otLat: [],
                otLong: []},
            Price4: {
                otId:[],
                otName:  [],
                otCity: [],
                otState: [],
                otCountry: [],
                otAddress: [],
                otPhone: [],
                otZip: [],
                otImgURL: [],
                otReserveURL: [],
                otLat: [],
                otLong: []},
            Price5: {
                otId:[],
                otName:  [],
                otCity: [],
                otState: [],
                otCountry: [],
                otAddress: [],
                otPhone: [],
                otZip: [],
                otImgURL: [],
                otReserveURL: [],
                otLat: [],
                otLong: []},
        };
        hotelFinal = {
                otId:[],
                otName:  [],
                otCity: [],
                otState: [],
                otCountry: [],
                otAddress: [],
                otPhone: [],
                otZip: [],
                otImgURL: [],
                otReserveURL: [],
                otLat: [],
                otLong: [],
                otPrice: []};

        // Getting restaurants by city
        $.ajax({
            url: urlopentable, //API Call
            dataType: "json",
            type: "GET",
            async: false,
            data: {
                city: opencity,
                //zip: 32000,
                //state: "CHH",
                country: opencountry,
                per_page: 50,
                // appid: yelpkey,
            },
            success: function(opendata) {
                console.log('Received Open Table: ', opendata);
                if (opendata.total_entries > opendata.per_page){x = opendata.per_page}
                else { x= opendata.total_entries};

                $.each(opendata.restaurants, function(index, val) {
                    var sttr = "hotelSummary.Price" + val.price + ".otId.push(val.id)";
                    eval(sttr);
                    var sttr = "hotelSummary.Price" + val.price + ".otName.push(val.name.substr(0,24))";
                    eval(sttr);
                    var sttr = "hotelSummary.Price" + val.price + ".otCity.push(val.city)";
                    eval(sttr);
                    var sttr = "hotelSummary.Price" + val.price + ".otState.push(val.state)";
                    eval(sttr);
                    var sttr = "hotelSummary.Price" + val.price + ".otCountry.push(val.country)";
                    eval(sttr);
                    var sttr = "hotelSummary.Price" + val.price + ".otAddress.push(val.address)";
                    eval(sttr);
                    var sttr = "hotelSummary.Price" + val.price + ".otPhone.push(val.phone.substr(0,(val.phone.length - 1)))";
                    eval(sttr);
                    var sttr = "hotelSummary.Price" + val.price + ".otZip.push(val.postal_code)";
                    eval(sttr);
                    var sttr = "hotelSummary.Price" + val.price + ".otImgURL.push(val.image_url)";
                    eval(sttr);
                    var sttr = "hotelSummary.Price" + val.price + ".otReserveURL.push(val.reserve_url)";
                    eval(sttr);
                    var sttr = "hotelSummary.Price" + val.price + ".otLat.push(val.lat)";
                    eval(sttr);
                    var sttr = "hotelSummary.Price" + val.price + ".otLong.push(val.lng)";
                    eval(sttr);
                })          
            }
        });

        console.log(hotelSummary);
        if(hotelSummary.Price5.otId.length > 6) {x5 = 6}
        else {x5 = hotelSummary.Price5.otId.length}
        if (x5 < 6) {
            if (hotelSummary.Price4.otId.length > (6- x5)) {x4 = (6-x5)}
            else {x4 = hotelSummary.Price4.otId.length}
        }
        else {x4 = 0}
        if ((x5 + x4) < 6) {
            if (hotelSummary.Price3.otId.length > (6 - (x5+x4))) {x3 = (6-(x4+x5))}
            else { x3 = hotelSummary.Price3.otId.length}
        }
        else {x3 = 0}
        if ((x5 + x4+ x3) < 6) {
            if (hotelSummary.Price2.otId.length > (6 - (x5+x4+x3))) {x2 = (6-(x3+x4+x5))}
            else {x2 = hotelSummary.Price2.otId.length}
        }
        else {x2 = 0}
        if ((x5 + x4 + x3 + x2) < 6) {
            if (hotelSummary.Price1.otId.length > (6 - (x5+x4+x3+x2))) {x1 = (6-(x2+x3+x4+x5))}
            else {x1 = hotelSummary.Price1.otId.length;}
        }
        else {x1 = 0}

        //  Completing final object/array with only 5 restaurants
        for (x=1; x<6; x++) {
            var str = "x" + x;
            for (y=0; y < eval(str); y++) {
                var str2 = "hotelSummary.Price" + x + ".otName[" + y + "]";            
                hotelFinal.otName.push(eval(str2));
                var str2 = "hotelSummary.Price" + x + ".otId[" + y + "]";            
                hotelFinal.otId.push(eval(str2));
                var str2 = "hotelSummary.Price" + x + ".otCity[" + y + "]";            
                hotelFinal.otCity.push(eval(str2));
                var str2 = "hotelSummary.Price" + x + ".otState[" + y + "]";            
                hotelFinal.otState.push(eval(str2));
                var str2 = "hotelSummary.Price" + x + ".otCountry[" + y + "]";            
                hotelFinal.otCountry.push(eval(str2));
                var str2 = "hotelSummary.Price" + x + ".otAddress[" + y + "]";            
                hotelFinal.otAddress.push(eval(str2));
                var str2 = "hotelSummary.Price" + x + ".otPhone[" + y + "]";            
                hotelFinal.otPhone.push(eval(str2));
                var str2 = "hotelSummary.Price" + x + ".otZip[" + y + "]";            
                hotelFinal.otZip.push(eval(str2));
                var str2 = "hotelSummary.Price" + x + ".otImgURL[" + y + "]";            
                hotelFinal.otImgURL.push(eval(str2));
                var str2 = "hotelSummary.Price" + x + ".otReserveURL[" + y + "]";            
                hotelFinal.otReserveURL.push(eval(str2));
                var str2 = "hotelSummary.Price" + x + ".otLat[" + y + "]";            
                hotelFinal.otLat.push(eval(str2));
                var str2 = "hotelSummary.Price" + x + ".otLong[" + y + "]";            
                hotelFinal.otLong.push(eval(str2));
                var str2 = "hotelSummary.Price" + x + ".otPrice[" + y + "]";            
                hotelFinal.otPrice.push(eval(x));
            }
        }

        console.log("Final Array: ", hotelFinal);
        $("#rImg1").attr("src", hotelFinal.otImgURL[0]); 
        $("#rImg2").attr("src", hotelFinal.otImgURL[1]); 
        $("#rImg3").attr("src", hotelFinal.otImgURL[2]); 
        $("#rImg4").attr("src", hotelFinal.otImgURL[3]); 
        $("#rImg5").attr("src", hotelFinal.otImgURL[4]); 
        $("#rImg6").attr("src", hotelFinal.otImgURL[5]); 
        $('#rName1').text(hotelFinal.otName[0]);
        $('#rlink1').attr("href", hotelFinal.otReserveURL[0]);
        $('#rphone1').text("Phone: " + hotelFinal.otPhone[0]);
        $('#rName2').text(hotelFinal.otName[1]);
        $('#rlink2').attr("href", hotelFinal.otReserveURL[1]);
        $('#rphone2').text("Phone: " + hotelFinal.otPhone[1]);
        $('#rName3').text(hotelFinal.otName[2]);
        $('#rlink3').attr("href", hotelFinal.otReserveURL[2]);
        $('#rphone3').text("Phone: " + hotelFinal.otPhone[2]);
        $('#rName4').text(hotelFinal.otName[3]);
        $('#rlink4').attr("href", hotelFinal.otReserveURL[3]);
        $('#rphone4').text("Phone: " + hotelFinal.otPhone[3]);
        $('#rName5').text(hotelFinal.otName[4]);
        $('#rlink5').attr("href", hotelFinal.otReserveURL[4]);
        $('#rphone5').text("Phone: " + hotelFinal.otPhone[4]);
        $('#rName6').text(hotelFinal.otName[5]);
        console.log(hotelFinal.otReserveURL[5]);
        $('#rlink6').attr("href", hotelFinal.otReserveURL[5]);
        $('#rphone6').text("Phone: " + hotelFinal.otPhone[5]);
    }
    
    var weatherkey = "3eaf6100e9b1bdb38f073d8f5016bcf2";
    // var city = "El Paso";
    var latitud = 32.897480;
    var longitud = -97.040443;
    var url5 = "https://api.openweathermap.org/data/2.5/forecast";
    var urlHoy = "https://api.openweathermap.org/data/2.5/weather";
    var hoy = moment(new Date()).format("MMM DD YYYY");
    var hoyDayOfWeek = moment(hoy).format('dddd');
    var hcity, hlatitud, hlongitud, htemp, hcountry, hhumidity, hdesc, hicon, hIconLocation = "";

    // Getting today's forecast
    $.ajax({
        url: urlHoy, //API Call
        dataType: "json",
        type: "GET",
        async: false,
        data: {
            lat: latitud,
            lon: longitud,
            appid: weatherkey,
            units: "metric"
        },
        success: function(datahoy) {
            console.log('Received dataHoy:', datahoy)
            hcity = datahoy.name;
            hlatitud = datahoy.coord.lat;
            hlongitud = datahoy.coord.lon;
            hcountry = datahoy.sys.country;
            htemp = Math.round(datahoy.main.temp) + "°C";
            hhumidity = datahoy.main.humidity + "%";
            hdesc = datahoy.weather[0].description;
            hicon = datahoy.weather[0].icon;
            hIconLocation = "https://openweathermap.org/img/w/" + hicon + ".png";            
        }
    });

    tSummary = {
        header:[hoy,hoyDayOfWeek,hcity,hlatitud,hlongitud,hcountry,htemp,hhumidity,hdesc,hIconLocation],
        day:  [],
        maxi: [],
        mini: [],
        iconos: []};
      
    $('#t0DayOfWeek').text(tSummary.header[1]);
    $('#t0Date').text(tSummary.header[0]);
    $('#tCity').text(tSummary.header[2] + ", " + tSummary.header[5]);
    $('#t0temp').text(tSummary.header[6]);
    $("#t0Icon").attr('src', hIconLocation); 


    // Getting info from 5 days in the future forecast
    $.ajax({
        url: url5, //API Call
        dataType: "json",
        type: "GET",
        async: false,
        data: {
            lat: latitud,
            lon: longitud,
            appid: weatherkey,
            units: "metric",
            cnt: "40"
        },
        success: function(data5) {
            console.log('Received dataForecast:', data5)
            $.each(data5.list, function(index, val) {
                var hora = val.dt_txt.substr(val.dt_txt.length -8);
            if (hora === "03:00:00"){
                var fday = val.dt_txt.substr(8,2);
                var fmonth = val.dt_txt.substr(5,2);
                var fyear = val.dt_txt.substr(0,4);
                var ffecha = fmonth + "/" + fday + "/" + fyear;
                var fformat = "MM/DD/YYYY";
                var fconverted = moment(ffecha, fformat);
                var fDayOfWeek = moment(fconverted).format('dddd').substr(0,3) + " " + fday;
                var t1 = Math.round(val.main.temp_min) + "°C";
                var fhumidity = val.main.humidity + "%";
                var fdesc = val.weather[0].description;
                var ficon = val.weather[0].icon;
                var fIconLocation = "https://openweathermap.org/img/w/" + ficon + ".png";
                tSummary.day.push(fDayOfWeek);
                tSummary.iconos.push(fIconLocation);
            }
            if (hora === "15:00:00"){
                var t2 = Math.round(val.main.temp_max) + "°C";
                if (t1<t2){
                    tSummary.maxi.push(t2);
                    tSummary.mini.push(t1);
                }
                else {
                    tSummary.maxi.push(t1);
                    tSummary.mini.push(t2);
                }
            }
            });
        }
        
    })
    // Printing info from 5 days in the future forecast
    $('#t1DayOfWeek').text(tSummary.day[0]);
    $("#t1Icon").attr("src", tSummary.iconos[0]); 
    $('#t1maxtemp').text(tSummary.maxi[0]);
    $('#t1mintemp').text(tSummary.mini[0]);

    $('#t2DayOfWeek').text(tSummary.day[1]);
    $("#t2Icon").attr("src", tSummary.iconos[1]);
    $('#t2maxtemp').text(tSummary.maxi[1]);
    $('#t2mintemp').text(tSummary.mini[1]);

    $('#t3DayOfWeek').text(tSummary.day[2]);
    $("#t3Icon").attr("src", tSummary.iconos[2]);
    $('#t3maxtemp').text(tSummary.maxi[2]);
    $('#t3mintemp').text(tSummary.mini[2]);

    $('#t4DayOfWeek').text(tSummary.day[3]);
    $("#t4Icon").attr("src", tSummary.iconos[3]);
    $('#t4maxtemp').text(tSummary.maxi[3]);
    $('#t4mintemp').text(tSummary.mini[3]);
    
    $('#t5DayOfWeek').text(tSummary.day[4]);
    $("#t5Icon").attr("src", tSummary.iconos[4]);
    $('#t5maxtemp').text(tSummary.maxi[4]);
    $('#t5mintemp').text(tSummary.mini[4]);

    console.log(tSummary);
    getRestaurant(tSummary.header[2], tSummary.header[5]);

