
var temp = document.querySelector("#icon");

    var part = document.querySelector("#part");

    let temperature = () => 
    {

        let opt = document.querySelector("#unit");

        let display = document.querySelector(".value");

        var a = document.querySelector(".takevalue").value;

        if (opt.value == "celsius") 
        {
            console.log(a, "C to F", opt.value)

            let F = a * (9 / 5) + 32
            
            display.innerHTML = F.toFixed(4) + " F"

            if (F < 32) 
            {
                part.innerHTML = "Cool At Freezing Point"
            } 
            
            else if (F > 122) 
            {
                part.innerHTML = "So Warm"
            } 
            
            else 
            {
                part.innerHTML = ""
            }

        } 
        
        else 
        {
            console.log(a, "F to C", opt.value)
            
            let C = (a - 32) * (5 / 9)

            display.innerHTML = C.toFixed(4) + " ºC"

            if (C < 0) 
            {
                part.innerHTML = "Cool At Freezing Point"
            } 
            
            else if (C > 50) 
            {
                part.innerHTML = "So Warm"
            } 
            
            else 
            {
                part.innerHTML = ""
                
            }
        }
    }