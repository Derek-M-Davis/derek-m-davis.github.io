$(() => {
    



    // var url = 'https://api-v3.igdb.com/achievements';
    // var xhr = createCORSRequest('GET', url);
    // xhr.send();
//     $.ajax({
//       url: 'https://api-v3.igdb.com/games/',
//       Headers: {
//         'Access-Control-Allow-Credential': true,
//         'Accept': 'application/json',
//           'user-key': 'e9e6341303be555f38f64c89b5928eaf',
//       },
//     //   data: "fields achievement_icon,category,created_at,description,external_id,game,language,locked_achievement_icon,name,owners,owners_percentage,rank,slug,tags,updated_at;"
//     })
//       .then(response => {
//           console.log(response.data);
//       })
//       .catch(err => {
//           console.error(err);
//       });
    

    $.ajax({
         url: "https://api-v3.igdb.com/games/",
         type: "GET",
         beforeSend: function(xhr){xhr.setRequestHeader('X-Test-Header', 'test-value');},
         success: function() { console.log('got data') }
      });



})
