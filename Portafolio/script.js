/*********Activar/desactivar boton de menu ****** */
((d)=>{
  const $btnMenu = d.querySelector(".menu-btn"),
  $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click",(e)=>{
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });
  /**Para regresar o bajar el menu despues de seleccionada una opcion */
  d.addEventListener("click",(e)=>{
    if(!e.target.matches(".menu a")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  })
})(document);


/**************--------Contact Form------5:34:58***********/
((d)=>{
  const $form = d.querySelector(".contact-form"),
  $loader = d.querySelector(".contact-form-loader"),
  $response = d.querySelector(".contact-form-response");
  $form.addEventListener("submit",(e)=>{
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/iuriasydes@gmail.com",{
      method: "POST",
      body: new FormData(e.target),
    })
    .then((res)=>(res.ok ? res.json() : Promise.reject(res)))
    .then((json)=>{
      console.log(json);
      location.hash = "#gracias";
      $form.reset();
    })
    .catch(err=>{
      console.log(err);
      let message = err.statusText || "Ocurrio un error al enviar, intenta de nuevo"
      $response.querySelector("h3").innerHTML = `Error ${err.status}:${message}`;
    }).finally(()=>{
        $loader.classList.add("none");
        setTimeout(()=>{
          location.hash = "#close";
        },3000);
      });
    
  });
})(document);