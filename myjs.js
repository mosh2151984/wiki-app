$(function() {
    console.log( "ready!" );

    var search= "";
      $( "#input" ).change(function () {
      search = this.value;

    });

    $("#search").on("click", function () {
      $("#autocomp").append("<option value='"+ search +"'>");
      $("ul").empty();
      var api =
      "http://en.wikipedia.org/w/api.php?action=query&srlimit=20&list=search&srsearch="+ search +"&prop=extracts&format=json&exintro=";
      // alert(api);
      // console.log(api);
      if ( search !==""){
        $.ajax({
        // request type ( GET or POST )
    type: "GET",

        // the URL to which the request is sent
    url: api,


        // The type of data that you're expecting back from the server
    dataType: 'jsonp',

    success: function( json ){
          var list = json.query.search;
          // console.log(list);
          list.forEach(function (val) {

            $("#result").append('<a target="_blank" href="https://en.wikipedia.org/wiki/'+ val.title +'"><li>Title : '+val.title+'<br>'+val.snippet +'</li></a>');

          })
        }
      });
    }

    });


});
