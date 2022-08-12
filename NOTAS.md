## NOTAS del material

# React 

## Clase 1 
----
Intro - Pq usar React?
- Actualizaciones de estado del lado del navegador (Menos cargas desde el backend y sin recargas en la pagina). Estado ->  son los datos almacenados en la aplicacion, cada vez que alguien modifica algo (sea el backend o el usuario) ocurre un evente, x ej el click, eso hace que cambie el estado de la app. 
- Tecnologia creada en 2011
- Secciones estan pensadas como componentes reutilizables, en vez de etiquetas. 
- Componentes -> son partes autosuficienttes dentro de la UI. 
- La interfaz se creo usando JSX. 
</br>
</br>
Framework vs Library</br>
-> Library: los desarrolladores eligen cuando y donde se usan las funciones. 
-> Framework: el propio framework decide el flow del programa. 
</br>
</br>
React permite pantener una UI de forma:</br>
- Practica
- Rapida 
- Robusta 

</br>
Agregando React a una pagina existente
> ver index.html en carpeta Clases > C1

----

en vivo:
- React es una Library
- Continuamnete de desarrollo
</br>
</br>

-> para importar la libreria de react y de ractDOM en la version 18
```JS
     <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
 ```

En reactDOM usamos el metodo render 
```JS
//<div id="root"></div>
    //ReactDom.render(elementoCreado, ElementoDondeIntroduzco)
   React.createElement(
    type,
    [props],
    [...children]
)

```
</br>
La tarea de las mesas de trabajo se encuentra en la capera Clases> C1 en el archivo C1.html 

</br>
</br>

## Clase 2
---
Repaso de JS
- Declaracion de variables :
    ```JS 
    var: estandar. Funciona en varios ambitos o bloques
    let: es una variable que solo funciona dentro del bloque de codigo que se situa.
    const: no modificable 
    ``` 
- Declaracion de funciones:  
    ```JS
    function myFuncion(){}

    ```

- Metodos de document que messirven para react:
    ```JS
    document.querySelector();
    document.querySelectorAll();
    document.getElementById();
    document.getElementByClassName();
    document.getElementBytName();
    document.getElementsByTagName();
    document.addEventListener();
    ```

</br>

BABEL 

Babel, se importa y traduce el JSX a una forma gralmente mas secilla. 

```JS 
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

 //y abajo el script va a ser de tipo babel
 <script type="text/babel"> </srcipt>
```
Trabajo en mesas, se encuentra en la carpeta C2>mesa5.html

</br>
</br>

## Clase 3 - Integradora 
Revision </br>
Corregimos los trabajos realizados en la mesas el martes.

Mesa de trabajo en la carpeta C3>index.html

</br>
</br>

## Clase 4 
Creando una aplicación con React</br>
</br>
<img src="img_teoria/1.png">

Como se instala React?</br>
</br>
<img src="img_teoria/2.png">
</br>


[LINK --> Pasos a seguir para crear app en react](https://create-react-app.dev/)

----

En vivo: </br>

Que son las props?

- Cumplen la funcion de pasar informacion de un componente a otro. 
- Un componente recibe informacion desde su componente padre y de esta forma, poder utlilzar dicha informacion. 
- Si bien, las props, son inmutables, se pueden volver a gurdar en otra variable y esta misma puede modificarse. 
</br>

<img src="img_teoria/3.png">

-> En cada compnente sea hijo o padre se le pueden pasar props (propiedades).

```JS
    <div id="root"></div>

    const Photo=(props)=>{
        return(
            <section className="photo" class="col-4 d-flex justify-content-center">
                <img src={props.pic} id="imagen"></img>
            </section>
        )
    }

    function App() {     
        return(
            <div>
                <Photo pic="https://es.web.img2.acsta.net/pictures/22/04/18/16/11/4406324.jpg"/>
            </div>        
        )
    }
    ReactDOM.render(<App/>, document.getElementById('root'))
```

En este caso la App al renderizarse, muestra la foto indicadaa en la funcion APP (Componente padre), Photo, el componente hijo, recibe la pops declarada en App. 

Create react APP comandos:
<img src="img_teoria/4.png">

El trabajo realizado en las mesas del dia de la fecha se encuentra en Clases>C4 

</br>
</br>

## Clase 5

Ejemplo de componente funcional:
```JS
    import React from'react';
    import React DOM from'react-dom';
    const MyComponent Functional=()=><h1>Hola mundo de las Funciones/h1;
    ReactDOM.render(
    <My Component Functional/>,
    document.getElementById('root')
    ); 
```

```JS
    import React from'react';
    import ReactDOM from'react-dom';
    class MyComponent Class extends React.Component{
    render(){
        return<h1>Hola mundo de las Clases/h1;
    };
    ReactDOM.render(
    <My Component Class/>,
    document.getElementById('root')
    );
```
</br>
Las props pasan informacion o atributos entre componentes

- Las props son inmutables 
- Las props son recibidas
- Las props facilitan la reutilizacion de componentes
- Son pasadas al componentes hija o hijo cuando este se esta creando. 
- Para un componente hijo las propiedades no cambian despues del render inicial. 
- Facilita la previsibilidad en el manejo de datos de la aplicacion.

----

Clase en vivo </br>
```JS
import ...
require(...)
// son parecidos
// Y hay que exportar al final de APP.js (que seria el main component)
```
El trabajo de las mesas de esta clase se encuentra en la carpeta Clases > C5

</br>
</br>

## Clase 6 - Integradora 

Clase de repaso en vivo
--- 

Que es webpack ?</br>
Es un empaquetador d emodulos que se va a encargar de mostrar el proyecto que desarrollamos dentro de un browser.</br>
Va a empaquetar todos los archivos que trabajamos y lo va a convertir en un estatico distribuible 
Se puede configurar un webpack dentro del proyecto de react que creamos.</br>

<img src="./img_teoria/5.png"/>

</br>
Que es Eslint ?</br>
Se encarga de optimizar el codigo que realizamos.</br> 
Advierte sobre ciertos patrones que pueden lanzar errores o que pueden mejorar su sintaxis. 
Tambien se puede configurar con el proposito de poder generar un convenio entre desarrolladores.

</br>
Que es Jest y testing-library ?

Son librerias utilizadas para testear el codigo. 
Si instalamos alguna de estas librerias
(...)
Nos devuelven un log con los errores y pruebas ejecutadas. 

</br>
Fragment</br>
<img src="./img_teoria/6.png"/>

</br>
Children</br>
<img src="./img_teoria/7.png"/>

</br>

La trabajo de la mesa se encuentra en la carpeta Clases> C6

</br>
</br>

## Clase 7

</br>
</br>

## Clase 8

</br>
</br>

## Clase 9 - Integradora

</br>
</br>