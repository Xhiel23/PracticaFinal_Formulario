<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">Formulario</h3>

  <p align="center">
    Formulario realizado para el curso de Desarrollo Web de Bejob.
    <br />
    <br />
    <br />
    <a href="https://github.com/Xhiel23/PracticaFinal_Formulario/issues">Comunica un bug</a>
    ·
    <a href="https://github.com/Xhiel23/PracticaFinal_Formulario/issues">Añade una nueva funcionalidad</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Tabla de contenidos</h2></summary>
  <ol>
    <li>
      <a href="#sobre-el-proyecto">Sobre el proyecto</a>
      <ul>
        <li><a href="#creado-con">Creado con</a></li>
      </ul>
    </li>
    <li>
      <a href="#antes-de-comenzar">Antes de comenzar</a>
      <ul>
        <li><a href="#vs-code">VS Code</a></li>
        <li><a href="#gulp">Gulp</a></li>
      </ul>
    </li>
    <li><a href="#próximos-pasos">Próximos Pasos</a></li>
    <li><a href="#contribuir">Contribuir</a></li>
    <li><a href="#licencia">Licencia</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre el proyecto

Tercera práctica realizada para el curso de Desarrolladora Web. 
La práctica consiste en la creación de un formulario de alta telefónica. Para ello se ha usado HTML y SASS para la estructura y los estilos usando propiedades como flexbox. Además, se ha automatizado las tareas de compilación de los diferentes archivos (Typescript y SASS) y la recarga automática del servidor.
<br />

*A tener en cuenta:*
* No tiene modo responsive
* No esta optimizado para pantallas pequeñas


### Creado con:

* HTML,CSS
* [Typescript](https://www.typescriptlang.org)
* [SASS](https://sass-lang.com)
* [VS Code](https://code.visualstudio.com)
* [Gulp](https://gulpjs.com)
* [Browser Sync](http://www.browsersync.io)



<!-- GETTING STARTED -->
## Antes de comenzar

Para guardar una copia local y hacerla funcionar sigue los pasos de la sección que aplique. Para modificar los archivos .scss tienes que tener instalada la extensión de Sass de VS Code o en su defecto usar Gulp.

### VS Code

1. Clona el repositorio
  ```sh
  git clone https://github.com/Xhiel23/PracticaFinal_Formulario.git
  ```
2. Abre la carpeta en VS Code


### Gulp

1. Clona el repositorio
  ```sh
  git clone https://github.com/Xhiel23/PracticaFinal_Formulario.git
  ```
2. Asegurate de tener instalado Nodejs
  ```sh
  node --version
  >> v14.15.4
  ```
3. Instala npm si no lo tienes instalado ya
  ```sh
  npm install
  ```
4. Instala Gulp si no lo tienes instalado ya
  ```sh
  sudo npm install gulp -g
  ```
5. Navega a la carpeta donde clonaste el repositorio e inicia npm
  ```sh
  npm init
  ```
6. Sigue las instrucciones de la pantalla para configurar el archivo package.json
7. Una vez configurado, instala Gulp, Sass y Browser Sync
  ```sh
  npm install gulp gulp-sass browser-sync gulp-typescript typescript
  ```

El archivo gulpfile.js contiene las siguientes tareas de Gulp:
<ul>
  <li> Compila los archivos SCSS y los convierte en CSS.
  <li> Compila los archivos .ts cuando se genera algún cambio en el archivo y los convierte en Javascript.
  <li> Mira si hay algún cambio en los archivos de Sass (.scss) o Javascript (.js).
  <li> Recarga automática de BrowserSync.
  <li> (Opcional) Hay una tarea no incluida en el default para generar la misma estructura de carpetas que se usa en este proyecto (gulp makeStructure).
</ul>
<!-- USAGE EXAMPLES -->



<!-- ROADMAP -->
## Próximos Pasos
Próximas implementaciones:
- [ ] Más combinaciones de colores.
- [ ] Modo responsive.
- [ ] Más diseños de los elementos.

Además, puedes mirar en [open issues](https://github.com/Xhiel23/PracticaFinal_Formulario/issues) para una lista completa de las mejoras propuestas (y bugs conocidos).




<!-- CONTRIBUTING -->
## Contribuir

Para contribuir sigue los siguientes pasos:

1. Haz fork al proyecto
2. Crea una rama para tu propuesta (`git checkout -b propuesta/PropuestaMaravillosa`)
3. Haz commit a los cambios (`git commit -m 'He añadido esta PropuestaMaravillosa'`)
4. Haz push a la Rama (`git push origin propuesta/PropuestaMaravillosa`)
5. Abre un Pull Request



<!-- LICENSE -->
## Licencia

Distribuido bajo la licencia MIT. Para más información mira el archivo `LICENSE`.



<!-- CONTACT -->
## Contacto


Project Link: [https://github.com/Xhiel23/Practica2_STKLM](https://github.com/Xhiel23/Practica2_STKLM)



<!-- ACKNOWLEDGEMENTS -->
## Agradecimientos
* [Plantilla original del readme](https://github.com/othneildrew/Best-README-Template)
* [Bejob](https://www.bejob.com)
* [Women4IT](https://www.bejob.com/women-4-it/)






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

