# theory-excercise-axpe

## Problemas encontrados
### Single responsibility
**Problema:** La clase RegisteredUser no deberia encargarse del calculo getTotal.

**Solucion:** Implementar una clase TotalPriceCalculator con un metodo que reciba un RegisteredUser y se encargue de la logica de getTotal.

### Open-Closed
**Problema:** El metodo getTotal se encuentra acoplado a la implementacion de las clases Service y MultimediaContent.

**Solucion:** Implementar un metodo getServicePrice en la clase Service que se pueda consultar para conocer el precio asociado. RegisteredUser se comunica con Service a traves de una interfaz PayableService, de esta manera RegisteredUser no esta acoplado a una implementacion especifica de Service. La misma logica se replico para obtener el precio de un PriceableMultimediaContent desde un Service, para desacoplar los distintos precios.

### Liskov Substituion
No considero que haya ninguna violacion del principio en el esquema provisto. Tanto Service y sus herencias como MultimediaContent y PremiumContent lo respetan, ya que las clases padre son sustituibles por sus herencias sin generar side effects.

### Interface Segregation
El codigo actual no viola el principio de Interface Segregation ya que no hay interfaces definidas, pero en la implementacion de las modificaciones realizadas se tuvo en cuenta el principio, en particular en el caso de las interfaces PayableService y PremiumMarkup.

### Depencency Inversion
**Problema:** La clase RegisteredUser esta acoplada a la clase Service a traves del comportamiento getMultimediaContent.

**Solucion:** Crear la interfaz PayableService para desacoplar RegisteredUser y Service y tambien en el resto de modificaciones realizadas garantizar que las clases se comunican entre si a traves de interfaces.

## Esquema UML:
Se encuentra disponible en el siguiente archivo: [UML](https://github.com/jdalvit/theory-excercise-axpe/blob/main/Diagrama%20UML.jpg)

## Pseudocodigo:
Se encuentra disponible en el siguiente archivo: [Pseudocodigo](https://github.com/jdalvit/theory-excercise-axpe/blob/main/Pseudocodigo.ts)
