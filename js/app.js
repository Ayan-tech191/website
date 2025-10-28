$(document).ready(function(){
    
    function loadpage(page){
        $.ajax({
            url : page + ".html",
            success : function(data){
                $("#content").html(data)

                if(page === 'home'){
                    datafetching()
                }
            }
        })
    }

    $("#home").click(function(e){
        e.preventDefault()
        loadpage('home')
    })
    $("#about").click(function(e){
         e.preventDefault()
        loadpage('about')
    })
    $("#gallery").click(function(e){
         e.preventDefault()
        loadpage('gallery')
    })

    loadpage('home')


    function datafetching() {
        $.ajax({
            url:'data.json',
            type:'get',
            success: function(user){
                let myhtml =""
                user.forEach(users => {
                    myhtml+= `
                    <div class="card" style="width: 18rem;">
  <img src="${users.p-image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${users.p-name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">${users.p-price}</a>
  </div>
</div>`


                })
                $("#myrow").html(myhtml)
            }
        })
    }
    datafetching()
})