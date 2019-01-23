$(document).ready(function() {

  $("#myForm").submit(function(){
    var vowels = ["a","e","i","o","u"]
    var sentence = $("#sentence").val();


    for (var index = 0; index < sentence.length; index+=1){
      if (vowels.includes(sentence[index].toLowerCase())){
        $("#output").append("-");
      } else {
        $("#output").append(sentence[index]);
      }
    }
    // function withoutVowels(string) {
    //   var strWithoutVowels = [];
    //   string = string.split
    // }
    event.preventDefault();
  }); //end of myForm.submit function
}); //end of document ready function
