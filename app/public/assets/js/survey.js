
 $("#submit").on("click", function(event) {
    event.preventDefault();
    let questArray =[]
  for(i=0; i<10; i++)
    let answer = parseInt($('#question-' + i).val())
    console.log(answer);
    questArray.push(answer);

    let newFriend = {
    name: $("#user-name").val().trim(),
    photo: $("#image-1").val().trim(),
    scores:questArray,
    
     }

    
    $.post("/api/friends", newFriend)
      .then(function(data) {
        console.log("survey.html", data);
        alert("Adding profile...");
      });
  });
console.log(newFriend);


// Ajax request and initiate modal
var currentURL = window.location.origin;

$.ajax({ 
  type: "POST",
  url: currentURL + "/api/friends", method: "GET" })
  data: JSON.stringify(newFriend)
  .then(function(newFriend) {

 // Here we are logging the URL so we have access to it for troubleshooting
  console.log("------------------------------------");
  console.log("URL: " + currentURL + "/api/friends");
  console.log("------------------------------------");

   // Loop through and display each of the friends
   for (var i = 0; i < newfriend.length; i++) {

$("#name-input").val("")
$("#image-1").val("")
$("#question-1").val("")
$("#question-2").val("")
$("#question-3").val("")
$("#question-4").val("")
$("#question-5").val("")
$("#question-6").val("")
$("#question-7").val("")
$("#question-8").val("")
$("#question-9").val("")
$("#question-10").val("")

// throw(error)
   }
  });
// //     // Then display the remaining fields in the HTML (Section Name, Date, URL)
// //     $("#-" + i + 1).append("<h2><span class='label label-primary'>" + tableNumber + "</span> | " + tableData[i].customerID + "</h2>");
// //   }
// // });
// // }

