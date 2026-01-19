 // Datos de las actividades y evidencias
const datosActividades = {
    unidad1: [
        { id: 1, titulo: "Análisis, pedagogías del PLE", descripcion: "Esta actividad me permitió comprender de manera amplia lo que son los PLE o &quot;Entornos Personales de Aprendizaje&quot;. Pude entender que se refieren a la forma en que aprendemos y gestionamos nuestro entorno para conformar un ecosistema diverso, repleto de aprendizajes, así como a las teorías que los sustentan.",fecha: "", icono: "fas fa-search", enlaceDrive: " https://docs.google.com/document/d/1U30i5jqYQuUXg7kNWdwiykhAJ_XAOV1g/edit?usp=drivesdk&ouid=112927865735086434992&rtpof=true&sd=true" },
        { id: 2, titulo: "Competencias digitales docentes", descripcion: "La realización de esta actividad me ayudó a comprender cómo las tecnologías pueden mejorar significativamente los procesos de aprendizaje y enseñanza. Asimismo, el trabajo en equipo me permitió practicar la organización de ideas, la investigación y el desarrollo de una comunicación clara. Otro punto crucial fue entender la importancia de que el docente se actualice constantemente y haga un uso efectivo de las TIC.", fecha: "", icono: "fas fa-comments", enlaceDrive: "https://docs.google.com/presentation/d/1vQx4i1ZCgljYEgoPx5kyk0u3dp6Wcj3M/edit?usp=drivesdk&ouid=112927865735086434992&rtpof=true&sd=true" },
        { id: 3, titulo: "Cuadro sinóptico &quot;Mi PLE&quot; V1", descripcion: "Esta tarea me ayudó a entender mejor mi propia forma de aprender. Al explorar aspectos como mis métodos actuales de aprendizaje, los elementos y herramientas que utilizo, las personas a quienes recurro y mis experiencias y estrategias, pude reflexionar sobre mi metodología. Esto me permitió identificar áreas en las que puedo implementar acciones para optimizar mi proceso de aprendizaje.", fecha: "", icono: "fas fa-chart-bar", enlaceDrive: "https://drive.google.com/file/d/1flg5Va1VOim9jtQhET6hpmrLrrECIcyL/view?usp=drivesdk" },
        { id: 4, titulo: "Cuadro sinóptico &quot;Mi PLE&quot; V2", descripcion: "Esta actividad me permitió profundizar en la reflexión del primer cuadro, añadiendo herramientas, mecanismos y actividades específicas que utilizo al leer, hacer y compartir dentro de mi red personal de aprendizaje. Así, obtuve una idea más concreta de dónde y cómo empleo estos recursos, y qué implican.", fecha: "", icono: "fas fa-chart-bar", enlaceDrive: "https://drive.google.com/file/d/1YyfOFVlMxCinCd250DKN1wDRH2JYelf5/view?usp=drivesdk" },
        { id: 5, titulo: "Etnografía organizador gráfico", descripcion: "En equipo, realizamos un organizador gráfico sobre la etnografía, lo cual me permitió entender qué es, para qué se utiliza y cómo se lleva a cabo. Es un tema interesante, ya que explica cómo se estudia una comunidad, los roles existentes en esta práctica, entre otros aspectos. Además, me sirvió para conocer nuevas herramientas digitales, utilizarlas en la actividad y aplicar ese conocimiento en tareas actuales", fecha: "", icono: "fas fa-file-alt", enlaceDrive: "https://drive.google.com/file/d/1gBiGoxG5mNVVxSBQzEqq52oeWT49MVXr/view?usp=drivesdk" },
      //  { id: 6, titulo: "Google Site colaborativo", descripcion: "Elaboración de una presentación que sintetice los conceptos clave de la unidad.", fecha: "19/10/2025", icono: "fas fa-presentation-screen", enlaceDrive: "https://drive.google.com/drive/folders/ejemplo6" },
        { id: 6, titulo: "Mapa conceptual &quot;Teorías del PLE&quot;", descripcion: "Al investigar las teorías que sustentan los PLE, aprendí cómo se relacionan con mi propio estilo de aprendizaje, que es kinestésico. Esto me dio una perspectiva más amplia sobre la existencia de estas corrientes de pensamiento y sus bases teóricas. Las teorías analizadas fueron: Conectivismo: proceso de conectar fuentes de información, Complejidad: el aprendizaje como un sistema adaptativo, no lineal y caótico, Heutagogía: aprendizaje auto-determinado, Teoría de la Actividad: el aprendizaje ocurre mediante actividades mediadas por herramientas, Construccionismo/Constructivismo: el conocimiento se construye activamente mediante la experiencia y la reflexión.         \n Además de entenderlas y adaptarlas a nuestro PLE, reflexionamos y buscamos ejemplos de su aplicación.", fecha: "", icono: "fas fa-book", enlaceDrive: "https://drive.google.com/file/d/17lVk7D5bT1mUe3IRTNq9ToqVNWgN6VsK/view?usp=drivesdk" },
        { id: 7, titulo: "Mapa conceptual &quot;Mi PLE&quot;", descripcion: "En esta actividad reflexioné sobre mi método de aprendizaje y descubrí que, aunque soy visual, mi estilo predominante es kinestésico. Esto significa que aprendo mejor interactuando con objetos, mientras que me resulta más difícil mantener la atención solo escuchando. También detallé en qué consisten mis métodos de aprendizaje e incluí un ejemplo de cómo los aplico.", fecha: "", icono: "fas fa-person", enlaceDrive: "https://drive.google.com/file/d/1L3LTmPmNI7aaDQYvxgFwxFjD9TlxDfJm/view?usp=drivesdk" },
        { id: 8, titulo: "Padlet", descripcion: "Esta herramienta me permitió desarrollar nuevas habilidades digitales. Además, me ayudó a comprender la naturaleza de la sociedad actual, cada vez más digitalizada, y a observar cómo crece la dependencia de la tecnología para gestionar la vida diaria.", fecha: "", icono: "fas fa-book-open", enlaceDrive: "https://docs.google.com/document/d/1iN62sgaRCbdBlGcqdj-JeyBTBC-zdWvL/edit?usp=drivesdk&ouid=112927865735086434992&rtpof=true&sd=true" },
        { id: 9, titulo: "Pedagogías del PLE", descripcion: "Al ser una actividad colaborativa, además de facilitar la investigación, pudimos conversar, reflexionar y opinar sobre estas pedagogías. Nos llamó la atención cómo se conforma el proceso de enseñanza-aprendizaje. Nos introdujimos en el tema abordando los cinco enfoques relacionados con los PLE: \n Conectivismo, Teoría de la complejidad, Heutagogía, Teoría de la Actividad, Constructivismo y Construccionismo.", fecha: "", icono: "fas fa-puzzle-piece", enlaceDrive: "https://docs.google.com/presentation/d/18j2_HEbroYUr3oIlsDHBvjpWU0rDGVbL/edit?usp=drivesdk&ouid=112927865735086434992&rtpof=true&sd=true" },
        { id: 10, titulo: "Symbalo &quot;Vida saludable&quot;", descripcion: "Al explorar diversas fuentes de información sobre vida saludable, comprendí la importancia de llevar una vida sana, sin excesos, cuidando tanto la alimentación como la actividad física. \n Esta actividad me resultó muy útil, ya que soy aficionado a un deporte que requiere un estilo de vida saludable y activo. Dada la cantidad de fuentes recopiladas, me tomé el tiempo de revisar la mayoría y así aprendí más sobre este tema tan importante.", fecha: "", icono: "fas fa-user-check", enlaceDrive: "https://docs.google.com/document/d/11XVONyODkfm7vhJNS0UBZjxPY9AfGR3e/edit?usp=drivesdk&ouid=112927865735086434992&rtpof=true&sd=true" },
        //{ id: 12, titulo: "Propuesta de Investigación", descripcion: "Diseño de una propuesta de investigación basada en los temas de la unidad.", fecha: "31/11/2025", icono: "fas fa-flask", enlaceDrive: "https://drive.google.com/drive/folders/ejemplo12" }
    ],
    unidad2: [
        { id: 1, titulo: "Guión de entrevista", descripcion: "Aunque utilicé apoyo externo, esta actividad me ayudó a pensar de forma crítica sobre las preguntas planteadas para docentes, alumnos y padres de familia. Me permitió cuestionar si estaban formuladas correctamente para obtener la información deseada.Además, representó un avance en mi lucha constante por superar la timidez y reducir la ansiedad al hablar con personas ajenas a mi círculo social. Como futuro docente, considero crucial desarrollar esta habilidad de comunicación. Si bien con los niños no experimento esta dificultad, una de mis metas personales es seguir superando este obstáculo. ", fecha: "", icono: "fas fa-chalkboard-teacher", enlaceDrive: "https://docs.google.com/document/d/1nRGmuiNI46c08g_aLeva1oeraFdwwBJW/edit?usp=drivesdk&ouid=112927865735086434992&rtpof=true&sd=true" },
        { id: 2, titulo: "Informe &quot;Medios digitales y convencionales&quot;", descripcion: "Esta actividad me permitió reflexionar críticamente sobre el ejercicio previo de entrevistas. Asimismo, comprendí con mayor claridad el propósito final de la información recabada mediante aquellos cuestionarios. ", fecha: "", icono: "fas fa-pen", enlaceDrive: "https://docs.google.com/document/d/1YjJgWhXgdrFB4NHl5h4_YpiVybgwNY9y/edit?usp=drivesdk&ouid=112927865735086434992&rtpof=true&sd=true" },
        { id: 3, titulo: "Lista de cortejo", descripcion: " La realización de esta tarea me permitió recordar y aplicar habilidades previas en el manejo de Excel. También me impulsó a investigar en Internet para descubrir métodos que permitieran representar la información obtenida de una manera más visual y efectiva. ", fecha: "", icono: "fas fa-file", enlaceDrive: "https://docs.google.com/spreadsheets/d/1Elnawc9c6wOyjL1Vf_ICPhDjHTjM-Vsh/edit?usp=drivesdk&ouid=112927865735086434992&rtpof=true&sd=true" },
        { id: 4, titulo: "Medios convencionales y virtuales para el aprendizaje", descripcion: " En esta actividad pude investigar y aprender más sobre los medios digitales y convencionales, específicamente sobre su aplicación en el ámbito educativo. Analicé los aportes distintivos y los tipos de aprendizaje que promueve cada uno de ellos. ", fecha: "", icono: "fas fa-laptop", enlaceDrive: "https://docs.google.com/document/d/16z31jpVf4dDmTXbHQ3LdzurlwP6lDZiM/edit?usp=drivesdk&ouid=112927865735086434992&rtpof=true&sd=true" },
        { id: 5, titulo: "Primera narrativa", descripcion: " Esta reflexión me ayudó a visualizar cómo los medios convencionales y la virtualidad se integran en la educación. Este proceso da origen a una nueva era en la que el docente, aliado con la tecnología, se actualiza constantemente y enfoca su rol en ser un facilitador del aprendizaje. ", fecha: "", icono: "fas fa-user-friends", enlaceDrive: "https://docs.google.com/document/d/17_wSf-oLaKIiWhdeNYHOqWBEIVFM_7y4/edit?usp=drivesdk&ouid=112927865735086434992&rtpof=true&sd=true" },
        { id: 6, titulo: "Segunda Narrativa", descripcion: " Esta actividad se centró principalmente en los Recursos Educativos Abiertos (REA). Su estudio no solo nos permite comprender la gran cantidad de información de acceso libre disponible en Internet, sino también reconocer su importancia fundamental. Sin estos recursos, nuestra capacidad de investigación y acceso al conocimiento estaría significativamente limitada. ", fecha: "", icono: "fas fa-users", enlaceDrive: "https://docs.google.com/document/d/1er_yT-KFU9NChHB9etai3nOI069Mhdbj/edit?usp=drivesdk&ouid=112927865735086434992&rtpof=true&sd=true" }
    ],
    evidenciasUnidad1: [
        { id: 1, titulo: "Google Site colaborativo", descripcion: "Esta actividad me apoyo en mejorar mis habilidades de coordinación de un grupo, guiando a mi equipo, apoyandolo y ayudandoles en cualquier problema que les surgiera durante el proceso de creacion de este Google Site.", fecha: "", icono: "fas fa-globe", enlaceDrive: "https://docs.google.com/document/d/1DuGOPthlzS4VTe3tvKJMFALCtKAh8Ksb/edit?usp=drivesdk&ouid=112927865735086434992&rtpof=true&sd=true" }
    ],
    evidenciasUnidad2: [
        { id: 1, titulo: "Prpuesta de ecológia de medios", descripcion: "Durante el desarrollo de esta actividad,analizando de forma critica constructiva se pudo llegar a formar una propuesta que incluye aspectos importantes sobre los cuales los menores deben tener conocimiento, ademas de saber manejar un dispositivo como lo es un celular, el niño debe tener el conocimiento para distinguir entre páginas seguras de las que no lo son.", fecha: "", icono: "fas fa-user", enlaceDrive: "https://docs.google.com/document/d/16rcYyCpY9lk-nZDIvWWP-R3A9hsrzTt2/edit?usp=drivesdk&ouid=112927865735086434992&rtpof=true&sd=true" },
       // { id: 2, titulo: "portafolio ", descripcion: "Registro audiovisual del proceso de desarrollo del proyecto y explicación de los resultados.", fecha: "24/11/2025", icono: "fas fa-video", enlaceDrive: "https://drive.google.com/drive/folders/ejemplo21" }
    ]
};

// [El resto del código permanece exactamente igual...]
// Las funciones crearFondoFuturista(), generarTarjetasActividades(), etc. no se modificaron

// Función para crear el fondo futurista
function crearFondoFuturista() {
    const fondo = document.getElementById('fondoFuturista');
    if (!fondo) return;
    
    // Limpiar contenido existente
    fondo.innerHTML = '';
    
    // Crear líneas de cuadrícula horizontales
    for (let i = 0; i < 20; i++) {
        const linea = document.createElement('div');
        linea.className = 'linea-cuadricula horizontal';
        linea.style.top = `${(i * 5)}%`;
        linea.style.left = '0';
        fondo.appendChild(linea);
    }
    
    // Crear líneas de cuadrícula verticales
    for (let i = 0; i < 20; i++) {
        const linea = document.createElement('div');
        linea.className = 'linea-cuadricula vertical';
        linea.style.left = `${(i * 5)}%`;
        linea.style.top = '0';
        fondo.appendChild(linea);
    }
    
    // Crear elementos flotantes
    for (let i = 0; i < 15; i++) {
        const elemento = document.createElement('div');
        elemento.className = 'elemento-flotante';
        
        // Tamaño y posición aleatorios
        const tamaño = Math.random() * 100 + 20;
        elemento.style.width = `${tamaño}px`;
        elemento.style.height = `${tamaño}px`;
        elemento.style.left = `${Math.random() * 100}%`;
        elemento.style.top = `${Math.random() * 100}%`;
        
        // Color aleatorio
        const tono = Math.random() * 60 + 180;
        elemento.style.background = `radial-gradient(circle, hsla(${tono}, 100%, 70%, 0.3), transparent)`;
        
        // Retraso de animación aleatorio
        elemento.style.animationDelay = `${Math.random() * 5}s`;
        
        fondo.appendChild(elemento);
    }
}

// Función para generar las tarjetas de actividades
function generarTarjetasActividades() {
    // Generar actividades de la Unidad 1
    const contenedorUnidad1 = document.getElementById('actividades-unidad1');
    if (contenedorUnidad1) {
        datosActividades.unidad1.forEach((actividad, indice) => {
            const tarjeta = crearTarjetaActividad(actividad, indice);
            contenedorUnidad1.appendChild(tarjeta);
        });
    }
    
    // Generar actividades de la Unidad 2
    const contenedorUnidad2 = document.getElementById('actividades-unidad2');
    if (contenedorUnidad2) {
        datosActividades.unidad2.forEach((actividad, indice) => {
            const tarjeta = crearTarjetaActividad(actividad, indice);
            contenedorUnidad2.appendChild(tarjeta);
        });
    }
    
    // Generar evidencias de la Unidad 1
    const contenedorEvidencias1 = document.getElementById('evidencias-unidad1');
    if (contenedorEvidencias1) {
        datosActividades.evidenciasUnidad1.forEach((evidencia, indice) => {
            const tarjeta = crearTarjetaEvidencia(evidencia, indice);
            contenedorEvidencias1.appendChild(tarjeta);
        });
    }
    
    // Generar evidencias de la Unidad 2
    const contenedorEvidencias2 = document.getElementById('evidencias-unidad2');
    if (contenedorEvidencias2) {
        datosActividades.evidenciasUnidad2.forEach((evidencia, indice) => {
            const tarjeta = crearTarjetaEvidencia(evidencia, indice);
            contenedorEvidencias2.appendChild(tarjeta);
        });
    }
    
    // Animar las tarjetas después de crearlas
    setTimeout(animarTarjetas, 100);
}

// Función para crear una tarjeta de actividad
function crearTarjetaActividad(datos, indice) {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta';
    tarjeta.style.animationDelay = `${indice * 0.1}s`;
    tarjeta.innerHTML = `
        <div class="titulo-tarjeta">
            <div><i class="${datos.icono}"></i> ${datos.titulo}</div>
            <span class="id-actividad">Actividad ${datos.id}</span>
        </div>
        <div class="contenido-tarjeta">
            ${datos.descripcion}
        </div>
      
        <button class="boton-drive" onclick="abrirEnlaceDrive('${datos.enlaceDrive}')">
            <i class="fab fa-google-drive"></i> Ver en Drive
        </button>
    `;
    return tarjeta;
}

// Función para crear una tarjeta de evidencia
function crearTarjetaEvidencia(datos, indice) {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta';
    tarjeta.style.animationDelay = `${indice * 0.1}s`;
    tarjeta.innerHTML = `
        <div class="titulo-tarjeta">
            <div><i class="${datos.icono}"></i> ${datos.titulo}</div>
            <span class="id-evidencia">Evidencia ${datos.id}</span>
        </div>
        <div class="contenido-tarjeta">
            ${datos.descripcion}
        </div>
        <div class="fecha-tarjeta">Fecha de entrega: ${datos.fecha}</div>
        <button class="boton-drive" onclick="abrirEnlaceDrive('${datos.enlaceDrive}')">
            <i class="fab fa-google-drive"></i> Ver en Drive
        </button>
    `;
    return tarjeta;
}

// Función para abrir enlace de Drive
function abrirEnlaceDrive(url) {
    window.open(url, '_blank');
}

// Función para desplazarse a una sección
function desplazarSeccion(idSeccion) {
    const seccion = document.getElementById(idSeccion);
    if (seccion) {
        seccion.scrollIntoView({ behavior: 'smooth' });
        
        // Efecto visual de resaltado con animación
        seccion.classList.add('destacada-temporal');
        setTimeout(() => {
            seccion.classList.remove('destacada-temporal');
        }, 2000);
    }
}

// Función para animar las tarjetas cuando son visibles
function animarTarjetas() {
    const tarjetas = document.querySelectorAll('.tarjeta');
    const secciones = document.querySelectorAll('.seccion');
    
    const opcionesObservador = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visible');
            }
        });
    }, opcionesObservador);
    
    tarjetas.forEach(tarjeta => {
        observador.observe(tarjeta);
    });
    
    secciones.forEach(seccion => {
        observador.observe(seccion);
    });
}

// Función para manejar el botón de volver al inicio
function configurarBotonVolverInicio() {
    const botonVolverInicio = document.getElementById('volverInicio');
    if (!botonVolverInicio) return;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            botonVolverInicio.classList.add('mostrar');
        } else {
            botonVolverInicio.classList.remove('mostrar');
        }
    });
    
    botonVolverInicio.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Efecto de escritura para el título
function efectoMaquinaEscribir() {
    const titulo = document.querySelector('.titulo');
    if (!titulo) return;
    
    const textoOriginal = titulo.textContent;
    titulo.textContent = '';
    
    let i = 0;
    const velocidad = 100;
    
    function escribir() {
        if (i < textoOriginal.length) {
            titulo.textContent += textoOriginal.charAt(i);
            i++;
            setTimeout(escribir, velocidad);
        }
    }
    
    setTimeout(escribir, 500);
}

// Establecer el año actual
function establecerAnioActual() {
    const ahora = new Date();
    const elementoAnioActual = document.getElementById('anioActual');
    if (elementoAnioActual) {
        elementoAnioActual.textContent = ahora.getFullYear();
    }
}

// PROTECCIÓN DEL CÓDIGO - Evitar inspección del código fuente
function protegerCodigo() {
    // Deshabilitar clic derecho
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
    
    // Deshabilitar teclas F12, Ctrl+Shift+I, Ctrl+U
    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && e.key === 'I') || 
            (e.ctrlKey && e.key === 'U') ||
            (e.ctrlKey && e.shiftKey && e.key === 'J') ||
            (e.key === 'F12')) {
            e.preventDefault();
            return false;
        }
    });
    
    // Protección adicional contra herramientas de desarrollo
    setInterval(function() {
        if (window.outerWidth - window.innerWidth > 100 || 
            window.outerHeight - window.innerHeight > 100) {
            document.body.innerHTML = '<h1 style="text-align:center;color:red;margin-top:50px;">Acceso no autorizado al código fuente</h1>';
        }
    }, 1000);
}

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    crearFondoFuturista();
    establecerAnioActual();
    efectoMaquinaEscribir();
    generarTarjetasActividades();
    configurarBotonVolverInicio();
    protegerCodigo();
    
    // Hacer visibles todas las secciones inicialmente
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => {
        seccion.classList.add('visible');
    });
    
    // Efecto especial para las unidades
    const unidades = document.querySelectorAll('.seccion-unidad');
    unidades.forEach((unidad, indice) => {
        unidad.style.animationDelay = `${indice * 0.3}s`;
    });
});
