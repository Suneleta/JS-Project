$(document).ready(function(){

//slider
if(window.location.href.indexOf('index')>-1){
  $('.bxslider').bxSlider({
  mode: 'fade',
  captions: true,
  slideWidth: 1200,
  responsive:true,
  pager:false
  });
}

  //posts
  if(window.location.href.indexOf('index')>-1){

  var posts=[
    {
      title:'Titulo del articulo',
      date:"Publicado el dia" +moment().day()+ " de "+ moment().format("MMMM")+" del "+moment().format("YYYY"),
      content:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat'
    },
    {
      title:'Titulo del articulo 1',
      date:"Publicado el dia" +moment().day()+ " de "+ moment().format("MMMM")+" del "+moment().format("YYYY"),

    content:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat'
  },
    {
      title:'Titulo del articulo 2',
      date:"Publicado el dia" +moment().day()+ " de "+ moment().format("MMMM")+" del "+moment().format("YYYY"),

      content:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat'
    },
    {
      title:'Titulo del articulo 3',
      date:"Publicado el dia" +moment().day()+ " de "+ moment().format("MMMM")+" del "+moment().format("YYYY"),

      content:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat'
    },
  ];
  posts.forEach((item,index)=>{
    var post=`
        <article class="post">
          <h2>${item.title}</h2>
          <span class="fecha">${item.date}</span>
          <p>
            ${item.content}
          </p>
          <a href="#" class="button-more">Leer más</a>
        </article>
    `;
      $("#posts").append(post);
  });

}
  //selector de tema
  var theme=$("#theme");
  $("#to-green").click(function(){
    theme.attr("href", "css/green.css")
  });
  $("#to-red").click(function(){
    theme.attr("href", "css/red.css")
  });
  $("#to-blue").click(function(){
    theme.attr("href", "css/blue.css")
  });

  //scroll Arriba
  $(".subir").click(function(){
    e.preventDefault();
    $("html, body").animate({
      scrollTop:0
    }, 500);
    return false;
  });
  //login falso
  $("#login form").submit(function(){
    var form_name=$("#form_name").val();
    localStorage.setItem("form_name", form_name);
  });
  var form_name=localStorage.getItem("form_name");
  if(form_name!=null && form_name!="undefined"){
    var about_parrafo=$("#about p");
    about_parrafo.html("<strong>Bienvenido, "+form_name+"</strong>");
    about_parrafo.append("<a href='#' id='logout'>Cerrar session</a>");
    $("#login").hide();
    $("#logout").click(function(){
      localStorage.clear();
      location.reload();
    });

  }

  if(window.location.href.indexOf('about')>-1){
    $("#acordeon").accordion();
}

//RELOJ
if(window.location.href.indexOf('reloj')>-1){
  setInterval(function(){
    var reloj=moment().format("h:mm:ss");
    $("#reloj").html(reloj);

  }, 1000);


}
//validacion
if(window.location.href.indexOf('contact')>-1){
     $("form input[name='date']").datepicker({
       dateFormat:'dd-mm-yy'
     });
      $.validate({
          lang : 'es',
          modules : 'date',
          errorMessagePosition:'top',
          scrollToTopOnError: true
      });
}

});
