const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");
const audio = document.getElementById("audioAmor");

let cancionYaEmpezo = false; 

document.addEventListener("click", (e) => {
   
    if (
        e.target.matches(".sobre") || 
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda") ||
        e.target.matches(".corazon")
    ) {
        envoltura.classList.toggle("abierto");
    }

  
    else if (e.target.matches(".sobre *")) {
        if (!carta.classList.contains("abierta")) {
            carta.classList.add("mostrar-carta");

            setTimeout(() => {
                carta.classList.remove("mostrar-carta");
                carta.classList.add("abierta");
            }, 500);

            envoltura.classList.add("desactivar-sobre");

           
            if (!cancionYaEmpezo) {
                audio.play().catch(err => console.log("No se pudo reproducir el audio:", err));
                cancionYaEmpezo = true;
            } 
            
            else if (audio.paused) {
                audio.play().catch(err => console.log("No se pudo reanudar el audio:", err));
            }

        } else {
        
            carta.classList.add("cerrando-carta");
            envoltura.classList.remove("desactivar-sobre");

            
            if (!audio.paused) {
                audio.pause();
            }

            setTimeout(() => {
                carta.classList.remove("cerrando-carta");
                carta.classList.remove("abierta");
            }, 500);
        }
    }
});
