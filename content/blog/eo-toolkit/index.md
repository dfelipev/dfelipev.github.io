---
title: '# eo-toolkit, mucho mas que una herramienta de diagnostico...'
date: '2019-04-17'
---

![eo-toolkit launch](./splas-toolkit.gif)

Lo primero de todo quiero dar las gracias a [Peio Roth](https://about.me/peioroth) por haber compartido barco en esta aventura "agile", una verdadera experiencia de [product owner](https://proyectosagiles.org/cliente-product-owner/).

Que quede claro, trabajar con alguien que roza la excelencia tanto como programador, como diseñador, como 'coach' agile y como product owner es muy facil, sobre todo cuando esa persona es un excelente compañero de trabajo y amigo (y le encanta irse de tragos).

Juntos hemos creado una herramienta de trabajo, util 100%, con la consecucion de los objetivos iniciales, mejorable (como todos los softwares habidos y por haber), colaborado con nuestros clientes (compañeros en este caso) y utilizado un método de trabajo, que puede serme util de aqui en adelante. Y, como no habiamos estimado el tiempo que nos iba a costar, no nos hemos equivocado... o solo un poco... (lo explicare mas abajo).

En la parrafada que he escrito a continuacion, detallo mas o menos todo lo que hemos hecho sin entrar en detalles tecnicos. Puede que sirva a alguien mas o no, pero seguro que a mi me recuerda ciertas cosas para los proyectos futuros.

## Porque este software??

Desde hace tiempo, habiendo trabajo como responsable de produccion para una oficina tecnica, sé el beneficio cotidiano que tiene el disponer de la herramienta correcta para una tarea especifica (sobre todo si es repetitiva).

En [Eove](http://eove.fr/cms/), todo se ha construido rapido, en paralelo, para salir del paso y bastante bastante bien. Es gracias a programas como el que asiste a los operadores a controlar los aparatos antes de mandarlos al cliente, que la empresa es lo que es hoy. Estando en el puesto de validacion y verficacion, como casi todo lo que se ha desarrollado en la empresa durante os primeros 4 años, ese programa ha pasado por mis manos, manipulado, stressado, corregido e instalado en produccion. Esto no quita que, todas las mañanas al saludar a mis colegas de curro de produccion (si, todas las mañanas nos saludamos TODOS en la empresa) vea que el programa que un dia convirtio la fabricacion artesanal en un cadena de produccion, se haya quedado obsoleto, lleno de errores y tenga la misma ergonomia que une rueda cuadrada.

Tras varios intentos y siguiendo nuestro objetivo de liquidar esa deuda tecnica creada por necesidad, nos han concedido 2 meses (mas o menos) para crear/completar/inventar un software que mejore el dia a dia de la produccion, ayude al servicio tecnico a diagnosticar y reparar y permita a Eove de producir màs rapido.

## Antes de empezar

### Objetivos

Primera parte super importante en el comienzo de un proyecto, sea el que sea. Muchos son los objetivos, pero pocos (los verdaderamente importantes) deben ser los abordados para delimitar el perimetro de accion. Creo que todo product owner, jefe de proyecto, etc... deberia de aplicarse "el que mucho abarca, poco aprieta".

Asi que nosotros, elegimos los siguientes:

- **Rapidez**: la produccion necesita poder controlar rapido.
- **Fiabilidad**: durante el control, solamente el dispositivo fabricado puede fallar, el programa de control tiene que funcionar si o si (una herramienta que funiona siempre hace ganar tiempo igualemente)
- **Ergonomia**: un trabajo repetitivo es aburrido siempre, pero al menos que sea facil de utilizar y agradable a la vista.

Y los hemos tenido delante durante todo el desarrollo, justo enfrente de nuestros puestos de trabajo, y en una zona de paso... nosotros no nos hemos olvidado en ningun momento, los demas han tenido curiosidad y sin quererlo ni beberlo, todo el mundo estaba al dia de que se queria conseguir con este software.

![eo-toolkit launch](./projet_targets.jpg)

### Ubiquitous Language

![communication issue](./com_issue_3.jpg)

Segunda parte esencial en el comienzo de un proyecto, sea el que sea. En toda comunicacion, utilizar un lenguaje comun es necesario para que la transmision de informacion sea optima. La receta que hemos utilizado es la siguiente:

Ingredientes:
- 1m2 de pizarra
- 500gr idea general del programa/applicacion que se va a crear
- 2 cucharadas de ingles tecnico.

Pasos a seguir para obtener un suculento _ubiquitous language_:
1. Se lista las partes del software/aplicacion
2. Todo el mundo toma nota y pregunta si no queda claro
3. Todo el mundo lo utiliza desde el principio, sin excepciones, tanto en la comunicacion verbal, como en la redaccion de ticket/tareas.
4. Corregir al compañero es obligartorio, y solamente debe de tomarse como algo contructivo y nunca como una critica vanal.

De esta manera, no hay lugar a errores de comunicacion/interpretacion, es decir, de trabajo en vano, perdida de tiempo, retraso en el planning, conflicto entre compañeros de equipo, etc...

### Definition of Done

Tercero y ultimo, ponerse de acuerdo en que es lo que cada uno tiene que hacer para considerar que una tarea esta totalmente terminada y se puede pasar a otra cosa. Es la unica manera de no dejar las cosas a medias, de no dejar para el final lo menos agradable y de mantener una vision clara/instantanea del avance del proyecto. Y lo mejor, permite de versionar practicamente en todo momento, y eso es oro.

## Gestion del proyecto

### El PO negocia y tiene la obligacion de decir NO

Siempre, durante la vida de un proyecto, las prioridades cambian, se nos ocurren cosas, se puede mejorar el diseño, etc.. pero todo eso impacta el trabajo del PO, que debe respetar los plazos y que ha _diseñado su backlog_ de manera optima. La negociacion del PO en estos casos es primordial, y pasa por el NO y, a seguido, por la priorizacion. Cuando se define el scope de un proyecto, hay que tener en cuenta que esto sucedera y hay que estar preparado si se quiere llegar a buen puerto. 

### Pocos tickets, pero buenos

No sirve de nada llenar el backlog o el TODO con cientos de tickets, crear por no olvidar, crear todos y sentirse aliviado... NO. 

1. Shit IN = Shit OUT (mierda a la entrada =  mierda a la salida)
2. Menos tickets = mas facil de priorizar = MVP
3. Menos tickets = mas parece que avanzamos, mas lejos del suicidio estara nuestro programador
4. Si un ticket es importante, se volvera a hablar de él y podremos incluirlo en el momento adecuado.
5. Un ticket tiene que escribirse cuando se tiene claro lo que se tiene que hacer y se dispone del tiempo necesario para crearlo correctamente. Los tickets con solamente un titulo no deben crearse (excepto si lo hace el programador "toto" para resolverlo el mismo; si, los programadores tienen mas derechos que el PO).

### Ticket = pseudo code

El programador, la mayor parte del tiempo, no necesita comprender el porqe de ciertas decisiones, el valor de las variables, etc... para eso esta el PO que pasa su tiempo a recopilar toda esa informacion, a filtarla y a darle forma. Sin embargo, cuanto mas detallado sea el ticket de la tarea que el programador debe ejecutar (utilizando ubiquitous language), mas simple sera la comprension, mas facil sera de crear el TU y mas rapido se podra pasar ese ticket a DONE! Lo ideal seria que la descripction del ticket se haga con un leguaje que un compilador poueda interpretar... pero bueno, eso es la tarea del programador y tampoco vamos a quitarle la faena. ;) 

### La doc, poco a poco y con cabeza

La documentacion es muchas veces desagradable, aburrida, repetitiva... sobre todo si se deja para el final. Sin embargo, si en la _definition of done_ se decide que la doc tiene que hacerse a la vez, el mal trago es mas frecuente pero menos malo. Esto permite igualemente de estructurar la doc con cabeza (y no apelotonar todo sin orden ni concierto) de manera que una persona exerior al proyecto que tenga que intervenir (o incluso el cleinte) sepa encontrar lo que necesita o ejecitar un test de manera facil y sencilla.

### Tests unitarios: SI o SI

Toda aplicacion/software que no cuente con un buen paqueton de test unitarios que se lancen con frecuencia sufrira regresiones que pasaran inadvertidas durante la verificacion y lo mas probable es que se vea una vez que se haya liberado. Y eso es asi.

### Una demo vale mas que mil palabras

Cuando el software comienza a ser presentable, no hay que dudar en mostrarlo a los individuos interesados, sobre todo si pueden darte informacion, opiniones, criticas que puedan ayudarte en la consecucion de tus objetivos. De esta manera se consiguen varias cosas:

- Feedback/use experience: No se sabe si se està haciendo bien hasta que el usuario confirma, comenta y critica. Incluso si el PO debe ir a buscar esa valiosa infirmacion antes de nada, a veces se tomann decisiones que paracen buenas en el seno del equipo, pero que no lo son del todo (o para nada) cuando se trata del usuario. Nadie mejor que el usuario (sobre todo si tiene experiencia con programas precedentes) sabe que es lo que le cuesta mas, que es lo que le ayudaria en el dia a dia y que es lo que le saca de quicio. Todo eso se tiene que reinyectar progresivamente (siempre y cuando no provoque el hundimiento del barco) y mostarlo a esos usuarios finales porque, al final, son ellos los que van a utilizar ese programa cada dia.
- El mejor GPS: Si el proyecto empieza a coger una direccion erronea, los clientes presentes en la demonstracion enseguida lo detectaran y lo haran saber. Asi se evitan las derivas, la perdida de tiempo, el agotamiento del presupuesto y tirar el programa a la basura porque ya es demasiado tarde.
- Confianza: si el cliente/usuario del proyecto ve que sus comentarios y propuestas cogen forma cada semana, se crea un vinculo con el equipo de desarrollo que tiene muchao,volar. El poder ver y manipular ese programa antes de encontrarselo instalado en su PC un martes por la mañana y estar obligado a utilizarlo sin haber dicho ni muh, facilitara su aceptacion.

##CONCLUSIONES (de los errores siempre se aprende)

- Tu programador es tu amigo, tratalo bien.
- La fase de preparacion del proyecto es obligatoria y hay que tomarse el tiempo necesario.
- Cuanto mas curioso es un PO, mas informacion sonsacara al cliente (marketing, usuario final, etc...) y de mejor calidad sera el INPUT.
- Hay que sentarse al lado del usuario final y dejarle _zarcear_, ese sera tu mejor FEEDBACK.
- Una demo regular transmite confianza y buen ambiente.
- La negociacion es primordial para llegar a buen puerto.
