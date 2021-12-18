var click = false;
function myFunction() {
    if (click === false) {
        click = true;
        document.getElementById('demo').style.display = "none";
    } else {
        document.getElementById('demo').style.display = "block";
        document.getElementById('demo').innerHTML = "Button is clicked";
        click = false;
    }
}
function Array1() {
    var numArray = [1, 2, 3, 343, 5445];
    let sum = 0;
    for (let i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }
    return sum;
}

function Array2() {
    var numArray = [1, 2, 24, "", "ertgr4t", 4, a, b, 56, 6];
    let sum = 0;
    let num = 0;
    if (numArray= Number){
        num = arr[i];
    } else{
        num =" ";
    }
    for (let i = 0; i < num.length; i ++)
    {         
		sum += num[i];
	}
        
}
