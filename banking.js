// uploading the photo function
var loadFile = function(event) 
{
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};
// Working of transcation function
function updateTransaction()
{
    // selecting the option
    var selectWD = document.getElementById("selectBanking")
    var showWD = selectWD.selectedIndex
    var showopt = selectWD.options[showWD].text
    
    //Entering the amount, description and displaying the total balance
    var enterAmt = Number(document.getElementById("EnterAmount").value)
    var enterDesc = document.getElementById("EnterDescription").value
    var totalBal = Number(document.getElementById("updateBalance").value)

    //if user donot select any option
    if(showopt=="--select--")
    {
        alert("You have not selected valid option please select \n 1. withdraw \n 2. deposit")
    }

    //if user select deposit option. first check total balance is less then 50k & user can't deposit more 50k at once 
    if(totalBal<=50000&&enterAmt<=50000)
    {
        if(showopt=="Deposit")
        {   
            totalBal += enterAmt
            document.getElementById("updateBalance").value = totalBal
            document.getElementById("showAmount1").innerHTML += enterAmt +"<br>"
            document.getElementById("showDescription1").innerHTML += enterDesc +"<br>"
        }
    }
    else if(totalBal<=50000)
    {
        alert("You are not suppose to deposit more then "+totalBal)
    }

    //if user select withdraw option. first chk total balance if it is lessthen 0 then don't allow to withdraw or else allow
    if(!(totalBal==0))
    {
        if(showopt=="Withdraw") 
        {
            totalBal -= enterAmt
            document.getElementById("updateBalance").value = totalBal
            document.getElementById("showAmount").innerHTML += enterAmt +"<br>"
            document.getElementById("showDescription").innerHTML += enterDesc +"<br>"
        }
    }
    else if(totalBal<=0||totalBal<0)
    {
        alert("Your account balance is "+totalBal+ " you cannot withdraw amount") 
    }

// canvas pie chart javascript
    var chart = new CanvasJS.Chart("chartContainer", {
        // theme: "dark1", // "light1", "light2", "dark1", "dark2" // gives the background-color to the pie chart 
        // exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Transaction History"
        },
        data: [{
            type: "pie",
            startAngle: 25,
            // toolTipContent: "<b>{label}</b>: {y}%", // works same as html tooltip
            showInLegend: "true",
            legendText: "{label}",
            // indexLabelFontSize: 16,
            // indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: totalBal, label: "Deposit" },
                { y: enterAmt, label: "Withdraw" },
                // you can even check out the below commented options
                // { y: 51.08, label: "Chrome" },
                // { y: 27.34, label: "Internet Explorer" },
                // { y: 10.62, label: "Firefox" },
                // { y: 5.02, label: "Microsoft Edge" },
                // { y: 0.44, label: "Others" }
            ]
        }]
    });
    chart.render();
    }   
    // you will encounter some problem in withdraw and deposit history that is bcoz of pdf function that I am making it to print in pdf and on the webpage 
    // PDF function
      function printDiv() {
        let mywindow = window.open('','','height=650,width=900,top=100,left=150'); 
        
        var enterAmt = Number(document.getElementById("EnterAmount").value)
        var enterDesc = document.getElementById("EnterDescription").value
        var totalBal = Number(document.getElementById("updateBalance").value)
        var date = new Date()
        var completeDate = '<br>'+date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear()+date.getHours() +':'+date.getMinutes()
        totalBal-=enterAmt
        // PDF body code
        mywindow.document.write(`
        <center>
        <b>Transaction History</b>
        </center><br>
        <hr>
        <span style="position: absolute;word-spacing:100px">Description Balance Deposit Withdraw</span><br>
        <table>
        <th>
        ${document.getElementById("showDescription1").innerHTML}
        <td>${completeDate}</td>
        </th>
        <th>
        &nbsp;&nbsp;
        ${document.getElementById("updateBalance").value}
        </th>
        <th style="position: absolute;margin: 0px 0px 0px 150px">
        ${document.getElementById("showAmount1").innerHTML}
        </th>
        <th style="position: absolute;margin: 0px 0px 0px 300px">
        ${document.getElementById("updateBalance").innerHTML = totalBal}
        </th>
        </table>`);

        mywindow.print();
        mywindow.close();
      
        return true;
      }

