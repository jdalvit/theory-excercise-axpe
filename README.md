# theory-excercise-axpe

Problemas encontrados:
>1. RegisteredUser no debería tener la responsabilidad de calcular el total, solo tendría que exponer sus services.
>2. El método getTotal no debería calcular los precios individuales de cada servicio, eso es responsabilidad del servicio en sí mismo (sino, esto acopla al método con cada servicio particular), tampoco es su responsabilidad realizar la lógica de precio premium.
>3. MultimediaContent está acoplado a los distintos tipos de servicio y con la lógica de precio premium.

Esquema UML:
> En el archivo `UML.jpg`

Pseudocodigo:
> En el archivo `Pseudocodigo.ts`
