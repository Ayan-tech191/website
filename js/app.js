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
    $("#contact").click(function(e){
        e.preventDefault()
        loadpage('contact')
    })
    $("#service").click(function(e){
        e.preventDefault()
        loadpage('service')
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
     <h5 class="card-title">${users.p-price}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary view" data-id="${users.id}">view details</a>
  </div>
</div>`


                })
                $("#myrow").html(myhtml)
            }
        })
    }
    datafetching()
    // dynamic product detail display in modal  
    $(document).on("click",'.view', function(e){
        e.preventDefault()
        let myid = $(this).data('id');

        $.ajax({
            url : 'data json',
            success : function(mydata){
                let p = mydata.find(item => item.id == myid)
                $("#m-image").attr('src',p.image)
                $("#m-name").html(p.name)
                $("#m-price").html(p.price)
                let mymodal = new bootstrap.modal(document.getElementById("mymodal")).show()
            }

        })

    }
})