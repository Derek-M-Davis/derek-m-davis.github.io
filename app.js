$(() => {
    



    $.ajax({
        url: "http://api.brewerydb.com/v2/?key=ad6acda78c0797cff00c61c266391e5a",
        success: (data)=>{
            console.log(data);
        },
        error: ()=>{
            console.log('bad request');
        }

    }).then(

    )








})