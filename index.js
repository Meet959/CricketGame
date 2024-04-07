const redirectFirst = 1;
function CalculateRuns()
{
    SetAllValueToLocalStorage();
    var KeyValue = new Map();

    for (var i = 1; i <= 8; i++) {
        var p1 = $("#P" + i + "1").val();
        var p2 = $("#P" + i + "2").val();
        var p3 = $("#P" + i + "3").val();

        var totalRuns = GetOutputAsInt(parseInt($("#" + p1).val())) + GetOutputAsInt(parseInt($("#" + p2).val())) + GetOutputAsInt(parseInt($("#" + p3).val()));

        KeyValue.set(i, totalRuns);

        var sumText = $("#" + p1).val() + " + " + $("#" + p2).val() + " + " + $("#" + p3).val();
        $("#P" + i + "Runs").html(sumText + " = " + totalRuns);
    }

    var  maxPlayer = getKeyForMaxValue(KeyValue);
    for(var i = 1;i <=8 ;i++){
        $("#P"+i+"Runs").removeClass("Winner");
    }
    
    var FoundEmpty = false;
    for(var i=1;i<=6;i++){
        if($("#F"+i).val() == "" || $("#S"+i).val() == ""){
            FoundEmpty = true;
        }
    }
    if(!FoundEmpty)
        $("#P"+maxPlayer+"Runs").addClass("Winner");
}

function GetOutputAsInt(number){
    if (isNaN(number)) {
        return 0;
    }
    return number;
}

function getKeyForMaxValue(map) {
    let maxKey = null;
    let maxValue = -Infinity;

    for (let [key, value] of map.entries()) {
        if (value > maxValue) {
            maxValue = value; 
            maxKey = key;
        }
    }

    return maxKey; 
}  

function SetPlayersTolocalStorage(){
    for(var i = 1;i<=8;i++)
    {
        for(var j=1;j<=3;j++){
            localStorage.setItem("P"+i+j,$("#P"+i+j).val());
        }
    }
}

function GetPlayersFromLocalStorage(){
    for(var i = 1;i<=8;i++)
    {
        for(var j=1;j<=3;j++){
            $("#P"+i+j).val(localStorage.getItem("P"+i+j))
        }
    }
}

function ClearPlayersFromLocalStorage(){
    for(var i = 1;i<=8;i++)
    {
        for(var j=1;j<=3;j++){
            localStorage.setItem("P"+i+j,"");
        }
    }
}

$(document).ready(()=>{
    GetAllValueFromLocalStorage();
})

function GetPlayersFromMainDistributePage(){
    for(var i = 1;i<=8;i++)
    {
        for(var j=1;j<=3;j++){
            $("#P"+i+j).val(localStorage.getItem("DP"+i+j))
        }
    }
}

function GetAllValueFromLocalStorage(){
    if(redirectFirst==1){
        GetPlayersFromMainDistributePage();
        redirectFirst = 2
    }else{
        GetPlayersFromLocalStorage();
    }
    GetRunsFromLocalStorage();
}

function SetAllValueToLocalStorage(){
    SetRunsToLocalStorage();
    SetPlayersTolocalStorage();
}

function ClearAllLocalStorage(){
    ClearRunsFromLocalStorage();
    ClearPlayersFromLocalStorage();
}

function SetRunsToLocalStorage(){
    for(var i=1;i<=6;i++){
        localStorage.setItem("F"+i,$("#F"+i).val());
        localStorage.setItem("S"+i,$("#S"+i).val());
    }
}

function GetRunsFromLocalStorage(){
    for(var i=1;i<=6;i++){
        $("#F"+i).val(localStorage.getItem("F"+i))
        $("#S"+i).val(localStorage.getItem("S"+i))
    }
}

function ClearRunsFromLocalStorage(){
    for(var i=1;i<=6;i++){
        localStorage.setItem("F"+i,"");
        localStorage.setItem("S"+i,"");
    }
}