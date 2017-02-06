$(function() {
    console.log( "ready!" );

    var search= "";
      $( "#input" ).keyup(function () {
      search = this.value;

    });

    $("#search").on("click", function () {
      $("#autocomp").append("<option value='"+ search +"'>");
      $("ul").empty();
      var api =
      "http://en.wikipedia.org/w/api.php?action=query&srlimit=20&list=search&srsearch="+ search +"&prop=extracts&format=json&exintro=";

      if ( search !==""){
        $.ajax({

                type: "GET",

                url: api,

                dataType: 'jsonp',

                success: function( json ){
                      var list = json.query.search;
                      if (json.query.searchinfo.totalhits === 0) {
                        alert("sorry no result found");

                      }
                      list.forEach(function (val) {

                        $("#result")
                        .append('<a target="_blank" href="https://en.wikipedia.org/wiki/'+ val.title +'"><li>Title : '+val.title+'<br>'+val.snippet +'</li></a>');

                      });
        }
      });
    }

    });


    $("#input").on('keyup', function (e) {
        if (e.keyCode == 13) {
            $("#search").click();
        }
    });

});
