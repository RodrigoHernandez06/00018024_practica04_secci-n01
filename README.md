¿Qué ocurre en cada caso presentado anteriormente con los operadores y porqué JS me permite esto?
1) En la expresión 1 y 2 se obtienen esos resultados por la jerarquía de operaciones matemáticas, y en la tercera
se obtiene ese valor porque se empieza a leer la expresión desde la deracha.

3) Si la operación (++ o --) va antes de la varible, entonces primero se aumenta el valor y después se asigna,
si va después de la variable entonces primero se asigna el valor y después se opera.

5) Y en el ejercicio 3 se obtienen esos resultados porque el simbolo '=' tiene menor jerarquía que los demás símbolos.
   
¿El comportamiento de los flujos de control es similar a otros lenguajes y ambientes de desarrollo?
El flujo de control es similar otros lenguajes (c, c++, java o python) porque los flujos de control siguen la misma estructura,
que consiste en evaluar todas las condiciones hasta encontrar la primera que sea verdadera.
