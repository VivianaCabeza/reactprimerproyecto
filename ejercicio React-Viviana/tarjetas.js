document.title = "Tarjetas de Monumentos";

// header
const header = document.querySelector("header");
const tituloHeader = document.createElement("h1");
tituloHeader.innerText = "Monumentos de Francia";
tituloHeader.setAttribute(
  "style",
  "text-align: center"
);

header.appendChild(tituloHeader);

//tarjetas
Monumentos = [
  {
    nombre : "Arco del triunfo",
    img: "./img/arco.jpg",
    descripcion:
      "'Es uno de los monumentos más famosos de la capital francesa y probablemente se trate del arco de triunfo más célebre del mundo. Construido entre 1806 y 1836 por orden de Napoleón Bonaparte para conmemorar la victoria en la batalla de Austerlitz",
  },
  {
    nombre : "Catedral de Notre-Dam",
    img: "./img/catedral de Notre-Dam.jpg",
    descripcion:
      "'Es una catedral de culto católico, sede de la archidiócesis de París, la capital de Francia. Dedicada a la Virgen María, madre de Jesucristo, se sitúa en la pequeña isla de la Cité, rodeada por las aguas del río Sena. Es uno de los monumentos más populares de la capital francesa. Su construccion se termino en 1345'.",
  },
  {
    nombre: "Panteon",
    img: "./img/panteon.jpg",
    descripcion:
      "'Esta enorme construcción, que hoy contiene los restos del pintor renacentista Rafael (1483-1520) y del rey italiano Víctor Manuel II (1820-1878), nació con la idea de servir de templo de veneración de los dioses romanos, de ahí su nombre, panteón, literalmente en griego 'todos los dioses'.",
  },
  {
    nombre : "Torre Eiffel",
    img: "./img/Torre Eiffel.jpg",
    descripcion:
      "Concebida en 1884, edificada entre 1887 y 1889 e inaugurada para la exposición universal de 1889 en París, la torre Eiffel simboliza hoy en día a un país entero.",
  },
  
];

// se comienza a leer cada componente del objeto
for (let i = 0; i < Monumentos.length; i++) {
    const mainSection = document.querySelector("main");
    const section = document.createElement("section");

  const estiloBase =
    "width: 50%; height:auto; display:block; margin:auto; padding: 10px; border: solid 3px; border-color: #263E7F;";
    
  section.setAttribute("style", estiloBase);

  const tituloSection = document.createElement("h2");
  tituloSection.textContent = Monumentos[i].nombre;
  const imgSection = document.createElement("img");
  imgSection.setAttribute(
    "style",
    "width: 90%; height:auto; padding: 10px; display:block; margin:auto;"
      );
  imgSection.src = Monumentos[i].img;
  const pSection = document.createElement("p");
  pSection.textContent = Monumentos[i].descripcion;


  section.appendChild(tituloSection);
  section.appendChild(imgSection);
  section.appendChild(pSection);
  mainSection.appendChild(section);

}
