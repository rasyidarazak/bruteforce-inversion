// Brute force algorithm
function getInvCount(arr){
    let inv_count = 0;
    $('#inversion-value').html("");
    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] > arr[j]) {
                $('#inversion-value').append("<span class='text-success'> (" + arr[i] + "," +arr[j] + ")</span>");
                inv_count++;
            }  
        }
    }
    return inv_count;
}

// Add value to array & show result
arr = [];
let addArray = function(){
    let val = document.getElementById("val").value;
    if (!isNaN(val)){
        if (val<1 || val>10){
            alert("Enter numbers more than equal to 1 and less than equal to 10!")
        }else{
            arr.push(parseInt(val));
            $("#arr").html("");
            $('#arr').append("{ " + arr + " }");
        }
    }else{
        alert("Enter a number!")
    }

    if (arr.length > 0){
        $("#inversion-btn").html("<button type='button' class='btn btn-sm btn-success' id='inversion-calculate'>Calculate Inversion</button>");
    }

    $("#inversion-calculate").on("click", function () {
        $("#inversion-result").html("<div class='alert alert-success d-inline-block'>Inversion Result = <span class='fw-bold'>" + getInvCount(arr) + "</span></div>");
    });
}
$("#addArr").click(addArray)
$("#val").keypress(function(event){
    let keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        addArray();
    }
});

// Reset button
$("#reset").click(function(){
    location.reload(true);
});

// Card navigation
$('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
})