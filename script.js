
// --------------------
function hideThis(e, eVal)
{
    //console.log(e)
    var lbl = document.querySelector(`label[for="${e}"]`);
    lbl.style.display = "none";
    //lbl.innerHTML = '';
    var x = document.querySelector(`input[name="${e}"]`);
    x.value = eVal;
	x.style.display = "none";
}

window.onload=function()
{

	var callsign = document.querySelector('input[name="callsign"]');
	callsign.value = "FDX9526";

    var flightRule = document.getElementById('flight_rules');
    flightRule.value = 'I';

	var aircraft = document.querySelector('input[name="aircraft"]');
	aircraft.value = "MD11";

    var wakeCat = document.getElementById('wake_category');
    wakeCat.value = 'M';
    //wakeCat.style.display="none";
    //document.querySelector('label[for="wake_category"]').style.display = "none";
    
   
    hideThis("equipment","A")
    hideThis("transponder","")    
    hideThis("off_block_time","1234");

	var altitude = document.querySelector('input[name="altitude"]');
	altitude.value = "31000";    

    hideThis("speed","350");
    hideThis("alternate","")
    hideThis("enroute_time","1234")
    hideThis("fuel_time","1234")

    // Hide the other fields and their labels
    let tokens = ["pbn","nav","dat","sur","dof","reg","sel","code","rvr","opr","per","ralt","talt","orgn","com","eet"];
    tokens.forEach(token => {
        hideThis(token,'');
    })

    //hideThis("rmk","FedEx Express Virtual - FDXVA.ORG");
	var remark = document.querySelector('input[name="rmk"]');
	remark.value = "FedEx Express Virtual - FDXVA.ORG";  

};





// --------------------
function getRandomString()
{
	var alphabet= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var i = 0;
	var loopCount= getRandomNumber1(10);
	var string = "";
		while(i<loopCount)
			{
			string= string + alphabet[getRandomNumber1(25)]
			i++;
			}
	return string;
}


function getRandomNumber1(upperLimit)
{
    var randomNumber;
    var signOfParameter;
    if (upperLimit < 1)
    {
    signOfParameter=-1;
    upperLimit=Math.abs(upperLimit);
    }
    else
    {
    signOfParameter=1;
    }
    upperLimit= Math.floor(upperLimit);
    randomNumber=Math.floor(Math.random()*(upperLimit + 1));
    randomNumber=randomNumber*signOfParameter;
    return randomNumber;
}
