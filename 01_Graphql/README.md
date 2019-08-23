
# GraphQL

GraphQl es un lenguaje de querys para API's, se creo en 2012 por Facebook cómo una alternativa a REST.
GraphQl usa una arquitectura basada en definición de Tipos y Atributos.
Tiene Operaciones llamadas Query: que nos ayudan a leer la data(son como gets en REST), y Mutations: nos sirven para crear, actualizar ó borrar información.
Graphql no es un remplazo para las BD, es solo un lenguaje de consulta.

## Ventajas de GraphQl
* Forma declarativa de obtener data.
* No hay sobre carga en GraphQl. Ej: Una app móvil generalmente extrae datos y en REST la probabilidad de que traiga data inecesaria son altas.
Con Graphql nuestro front-end puede elegir un conjunto de campos diferentes, por lo que solo obtiene la informacion necesaria para esa vista.
* Se puede acoplar a casi cualquier framework de front-end y/ó backend.
* Fuertemente Tipado.
* En GraphQl no hay versionamiento de API.
* Equipos de Front-end más autonomos.


## Desventajas de GraphQl
* GraphQl no elimina los cuellos de botella de rendimiento.
* Limintación de velocidad. Mientras que en REST es más simple permitir cierto número de consultas en un día, es más difícil hacer lo mismo para operaciones individuales en GraphQl, porque puede ser todo entre una operación costosa ó barata.
* Implementar un caché con GraphQl es más complejo que en REST. Sin embargo la mayoria de las librerias creadas sobre GraphQl ofrecen un mecanismo de almacenamiento en caché listo para usar.

## Referencias
* [GraphQl](https://graphql.org/)
* [Why Graphql](https://www.robinwieruch.de/why-graphql-advantages-disadvantages-alternatives/)

## Tutoriales
* [GraphQl](https://graphql.org/learn/)
* [How to Graphql](https://www.howtographql.com/)
* [Learning Graphql](https://github.com/mugli/learning-graphql)