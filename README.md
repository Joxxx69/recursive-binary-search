# recursive-binary-search

## Búsqueda Binaria Recursiva

Crear una función `rBinarySearch` que reciba los siguientes argumentos:

- `list`, el cual representa una lista ordenada de números
- `value`, el cual representa un valor a ser buscado dentro de la lista

La función debe retornar `true` si el elemento existe en la lista, y `false` si el elemento no existe en la lista. Considerar los siguientes puntos:

- Se asume que la lista de elementos está ordenada de menor a mayor
- Los números de la lista pueden repetirse
- Se debe controlar el caso cuando no se envíe el argumento de lista
- Se debe usar recursión para resolver el problema (es decir, no hacerlo con un lazo `for` o similar)

*Ejemplos:*

- `rBinarySearch([], 1) -> false`
- `rBinarySearch([1,2], 1) -> true`
- `rBinarySearch([1,2,3], 4) -> false`
- `rBinarySearch([1,3,5,7], 4) -> false`
- `rBinarySearch([1,1,1,1], 1) -> true`
