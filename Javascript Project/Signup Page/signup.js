function validate() {
    
    var res=document.getElementById("fn").value
    var res1=document.getElementById("ln").value
    var res2=document.getElementById("pn").value
    var res3=document.Entrance.gender
    var res4=document.getElementById("psw").value
    var res5=document.getElementById("cpd").value

    if (res.length==0) {
        document.getElementById("one").innerHTML="Name cannot be empty"
        return false
    }
        else if (res.length<3) {
            document.getElementById("one").innerHTML="Please enter minimum 3 letter"
            return false
        }
        else if (res.lenght>15) {
            document.getElementById("one").innerHTML="Letter should be less than 15"
            return false
        }
        if (res1.length==0) {
            document.getElementById("two").innerHTML="Name cannot be empty"
            return false
        }
            else if (res1.length<3) {
                document.getElementById("two").innerHTML="Please enter minimum 3 letter"
                return false
            }
            else if (res1.lenght>15) {
                document.getElementById("two").innerHTML="Letter should be less than 15"
                return false
            }
             if (isNaN(res2)) {
                document.getElementById("three").innerHTML="Number is Digit only"
                return false
            }
           else if (res2.length>10 || res2.length<10) {
                document.getElementById("three").innerHTML="Number should be 10 digit "
                return false
            }
            else if (res2.length==0) {
                document.getElementById("three").innerHTML="Number is not blank"
                return false
            }
            else if (res2.charAt(0)<6) {
                document.getElementById("three").innerHTML="Number should start from 6 to 9"
                return false
            }
           
           for(let i=0; i<res3.length; i++){
                if (res3[i].checked) {
                    return true
                }
            }
            document.getElementById("four").innerHTML="enter you gender"
        
            if (res4.length==0) {
                document.getElementById("five").innerHTML="enter password"
                return false
            }
            if (res4.length<3) {
                document.getElementById("five").innerHTML="not less than 3"
                return false
            }
            if (res4!=res5) {
                document.getElementById("six").innerHTML="password must be same"
                return false
            }

}
var stateObject = {
    "India": {
            "Delhi": ["new Delhi", "North Delhi"],
            "Kerala": ["Thiruvananthapuram", "Palakkad"],
            "Goa": ["North Goa", "South Goa"],
    },
    "Australia": {
    "South Australia": ["Dunstan", "Mitchell"],
    "Victoria": ["Altona", "Euroa"]
    }, 
    "Canada": {
    "Alberta": ["Acadia", "Bighorn"],
    "Columbia": ["Washington", "Columbo"]
    }
    }
    window.onload = function () {
    var countySel = document.getElementById("countySel"),
    stateSel = document.getElementById("stateSel"),
    districtSel = document.getElementById("districtSel");
    for (var country in stateObject) 
    {
        countySel.options[countySel.options.length] = new Option(country, country);
    }
    
    countySel.onchange = function () {
    stateSel.length = 1; // remove all options bar first
    districtSel.length = 1; // remove all options bar first
    if (this.selectedIndex < 1) return; // done 
    for (var state in stateObject[this.value]) {
    stateSel.options[stateSel.options.length] = new Option(state, state);
    }
    }
    
    stateSel.onchange = function () {
    districtSel.length = 1; // remove all options bar first
    if (this.selectedIndex < 1) return; // done 
    var district = stateObject[countySel.value][this.value];
    for (var i = 0; i < district.length; i++) {
    districtSel.options[districtSel.options.length] = new Option(district[i], district[i]);
    }
    }
    // countySel.onchange(); // reset in case page is reloaded
    }
