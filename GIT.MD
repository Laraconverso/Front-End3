# GIT & GITHUB 

Requisitos: 
- descargar git (+ gitBash)
- vincular con github

</br>

GIT:</br>
Es una herramienta de versionado, es decir que sirve para guardar y poder acceder cada tipo de version del proyecto al que se este desarrollando. 

Repositorio: </br>
Lugar donde se van a guardar las diferentes versiones del proyecto. 

GITHUB:
Lugar donde guardar los repositorios simulando ser una nube. 


Pasos a seguir: 
- Paso 1: Crear repositorio en github. 
- Paso 2: Crear una carpeta en local con el mismo nombre. (donde voy a trabajar el proyecto). 
- Paso 3: Inicializar git en local. 
    > Como? </br>
    > En la consola ubicados dentro de la carpeta, ejecutamos el comando </br> 
    ``` git init ```</br>
    > Luego una vez que queremos ralizar un commit, es decir guardar los cambios,  (x ejemplo agregamos un archivo a la carpeta y queremos guardar ese cmabio) ejecutamos el comando</br>
    ```git add .``` </br>
    > Que agrega (en este ejemplo) todos los archivos de la carpeta a esta nueva version del proyecto aun no commiteada. </br>
    > Para realizar el commit se ejecuta el comando </br>
    ``` git commit -m "mensaje"```</br>
- Paso 4: Vincular con github (como si fuese la nube)
    >como?




Lista de comandos de git:</br>
- ```git init``` -> inicializa git en la carpeta local
- ```git add .``` -> agrega todos los archivos dentro de la carpeta.
- ```git status``` -> nos muestra el estado de las acciones de git.
- ```git commit -m "mensaje empirico"``` -> realiza el commit con el mensaje indicado y guarda esa version del proyecto en local. 
- ```git log --oneline``` -> muestra de forma simplificada la informacion de los commits realizados. 
- ```git log ``` -> brinda la info completa de los commits. 
- ```git branch ``` -> nos dice en que rama estamos 
- ``` git checkout -b nombreRama``` -> nos crea una rama y saltamos a esa misma. 
- ``` git push --set-upstream origin nombreRama``` -> agrega la rama al github (remoto). 





</br>
</br>

⚠️ Paginas utiles relacionadas: ⚠️
- [Branching](https://learngitbranching.js.org/)
- [Practice Git](https://gitexercises.fracz.com/)
- [Git repo for practice](https://github.com/PIC16B/git-practice)
- [Google's Introduction to Git and GitHub in Coursera](https://www.coursera.org/learn/introduction-git-github?irclickid=xWHwjBxo0xyNUl02KgStIxKJUkDyJ1wO%3AUtnX00&irgwc=1&utm_medium=partners&utm_source=impact&utm_campaign=3294490&utm_content=b2c)
- [The simple guide](http://up1.github.io/git-guide/index.html)
- [Git immersion](https://gitimmersion.com/lab_01.html)





