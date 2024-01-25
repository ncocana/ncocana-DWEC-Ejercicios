# Variables reactivas

- Se acceden con `{{ variables }}`.
  
  `<p>El usuario es {{ usuario.name }} {{usuario.surname}}</p>`

- Los atributos se acceden con dos puntos (`:class="class_name"`).
  
  `<p :class="activeClass + ' bold'">La notificación 3 es: {{notificaciones[2]}}</p>`

# Visibilidad e iteración

- v-if --> Renderiza dada una condicion
  
  ```
    <p v-if="activeClass=='red'">La notificación 1 es: {{notificaciones[0]}}</p>
  ```
  ```
    <!--v-if-->
  ```

- v-show --> Visualiza dada una condición
  
  ```
    <p :class="'bold'" v-show="activeClass=='red'">La notificación 2 es: {{notificaciones[1]}}</p>
  ```
  ```
    <p class="bold" style="display: none;">La notificación 2 es: Adios</p>
  ```

- v-fow --> Iteración
  
  ```
  <ul>
    <li v-for="n in notificaciones">{{n}}</li>
  </ul>
  ```
  ```
    <ul>
        <li>Hola</li>
        <li>Adios</li>
        <li>Whassup</li>
    </ul>
  ```
