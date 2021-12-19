// Brute force algorithm
function getInvCount(arr){
    let inv_count = 0;
    $('#invertion-value').html("");
    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] > arr[j]) {
                $('#invertion-value').append(" (" + arr[i] + "," +arr[j] + ") ");
                inv_count++;
            }  
        }
    }
    return inv_count;
}

// Add value to array & show result
arr = [];
$("#addArr").on("click", function () {
    let val = document.getElementById("val").value;
    if (!isNaN(val)){
        arr.push(parseInt(val));
    }

    $("#arr").html("");
    $('#arr').append("{ " + arr + " }");

    if (arr.length > 0){
        $("#invertion-btn").html("<button type='button' class='btn btn-sm btn-dark' id='invertion-calculate'>Calculate Invertion</button>");
    }

    $("#invertion-calculate").on("click", function () {
        $("#invertion-result").html("Invertion Result = " + getInvCount(arr));
    });
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