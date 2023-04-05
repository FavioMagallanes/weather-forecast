<img src="https://cdn.worldvectorlogo.com/logos/react-1.svg" width="100">
<img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.svg" alt="TypeScript Logo" width="100"/>

# Boilerplate de React con TypeScript

Este proyecto proporciona una base sólida y organizada para comenzar una
aplicación de React utilizando TypeScript para una mayor legibilidad y
mantenibilidad del código. Se han aplicado diversas herramientas y buenas
prácticas para mejorar la calidad y eficiencia del desarrollo.

## Instalación extensiones VScode

Cuando se ingresa a la carpeta en donde se encuentra el proyecto una vez
clonado, mostrará un cartel en la parte inferior derecha del editor con las
extensiones recomendades MÍNIMAS para que el proyecto funcione correctamente:

<img width="336" alt="Captura de pantalla 2023-02-13 105309" src="https://user-images.githubusercontent.com/53442176/218487512-e2f0d9bf-5204-410d-a042-558532100ef1.png">

al clickear en **Install** se instalarán todas las extensiones recomendadas.

## Instalación de dependencias :package:

Antes de comenzar a trabajar en el proyecto, es necesario instalar las
dependencias. Para ello, se utiliza el manejador de paquetes yarn. Ejecuta el
siguiente comando en la terminal:

```
yarn install
```

## Inicio de la aplicación 🚀

Una vez instaladas las dependencias, puedes levantar la aplicación con el
siguiente comando:

```
yarn start
```

La aplicación se abrirá en el navegador en la dirección http://localhost:3000/.

## Autoformateador y calidad de código ⚙️

Para mantener la calidad y legibilidad del código, se han implementado diversas
herramientas y buenas prácticas, tales como:

- **Prettier**: para el formateo automático del código.
- **ESLint**: para detectar y corregir problemas en el código.
- **husky**: para ejecutar ESLint y Prettier antes de realizar un commit.

De esta manera, se garantiza que el código subido al repositorio sea limpio y de
calidad.

Un ejemplo al realizar un commit, se ejecuta husky y procesará tanto Prettier
cómo Eslint, en este ejemplo muestra algunos errores de importaciones:

<img width="530" alt="Captura de pantalla 2023-02-13 113333" src="https://user-images.githubusercontent.com/53442176/218488140-d8fcc858-3dc5-4ef9-8a92-abcb34388f0d.png">

Debido a estos errores, el **commit** no se realizó ya que **Eslint** validó que
el código no cumple con las reglas. Para solucionarlo se debe ir a el/los
archivos descriptos en la captura (ejemplo), arreglarlos y volver a realizar
**git add.** & **git commit -m "..."**.

## Tipos de datos con TypeScript <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.svg" alt="TypeScript Logo" width="25"/>

Se utiliza TypeScript para mejorar la legibilidad y mantenibilidad del código,
permitiendo la definición de tipos de datos en las variables, funciones, etc.

## Pruebas unitarias y de integración ✅

Para garantizar el correcto funcionamiento de la aplicación, se han instalado
diversas herramientas para realizar test unitarios y de integración:

- **jest-ts**
- **react-testing-library**

Puedes ejecutar todas las pruebas con el siguiente comando:

```
yarn run test:w
```

Esto ejecutará todos los archivos con extensión .spec o .test dentro de la
carpeta src y generará una carpeta `coverage` en el root de la aplicación
mostrando en detalle el porcentaje de líneas/ramas cubiertas por las pruebas.

Ejemplo al correr el comando descripto previamente:

<img width="418" alt="Captura de pantalla 2023-02-13 115305" src="https://user-images.githubusercontent.com/53442176/218491780-4b380505-54ea-41d8-b588-2f5d7cceac18.png">

También crea en la estructura de carpetas, una carpeta con el nombre
**coverage** y dentro de **Icov-report** un archivo **index.html** donde al
clickearlo te lleva a un reporte mas global en el cual se detalla más
ampliamente el código cubierto por cada test.

## Estructura de carpetas

```
src
|-- components
|   |-- common
|   |   |-- Buttons
|   |   |   |-- Button.tsx
|   |   |   |-- ...
|   |   |   |-- style.css
|   |   |   |-- index.ts
|   |   |-- Inputs
|   |   |   |-- Input.tsx
|   |   |   |-- ...
|   |   |   |-- style.css
|   |   |   |-- index.ts
|   |   |-- ...
|   |-- shared
|   |   |-- Header
|   |   |   |-- Header.tsx
|   |   |   |-- ...
|   |   |   |-- style.css
|   |   |   |-- index.ts
|   |   |-- Footer
|   |   |   |-- Footer.tsx
|   |   |   |-- ...
|   |   |   |-- style.css
|   |   |   |-- index.ts
|   |   |-- ...
|   |   |-- index.ts
|   |-- ...
|   |-- index.ts
|-- utils -> funciones reutilizables
|   |-- date.ts
|   |-- formatter.ts
|   |-- ...
|   |-- index.ts
|-- config -> configuraciones globales
|-- routes
|-- hooks
|-- pages -> una carpeta por cada página
|   |-- Home
|   |   |-- components
|   |   |   |-- HomeHeader
|   |   |   |-- HomeHero
|   |   |   |-- HomeFooter
|   |   |   |-- ...
|   |   |   |-- index.ts -> requerido el use de un archivo .index que contenga todos los componentes a exportar
|   |   |-- tests
|   |   |   |-- HomeHeader.test.tsx
|   |   |   |-- HomeHero.test.tsx
|   |   |   |-- HomeFooter.test.tsx
|   |   |   |-- ...
|   |   |   |-- index.ts
|   |   |-- utils  -> utilidades sólo usadas dentro de Home
|   |   |   |-- index.ts
|   |   |   |-- ...
|   |   |-- interfaces
|   |   |   |-- HomeAbout.ts
|   |   |   |-- ...
|   |   |-- Home.tsx
|   |   |-- index.ts
|   |   |-- style.css
|   |-- About
|   |   |-- components
|   |   |   |-- AboutHeader
|   |   |   |-- AboutHero
|   |   |   |-- AboutFooter
|   |   |   |-- ...
|   |   |   |-- index.ts
|   |   |-- tests
|   |   |   |-- AboutHeader.test.tsx
|   |   |   |-- AboutHero.test.tsx
|   |   |   |-- AboutFooter.test.tsx
|   |   |   |-- ...
|   |   |   |-- index.ts
|   |   |-- utils
|   |   |   |-- index.ts
|   |   |   |-- ...
|   |   |-- interfaces
|   |   |   |-- ...
|   |   |-- About.tsx
|   |   |-- index.ts
|   |   |-- style.css
|   |-- ...
|-- api
|   |-- api.auth.ts
|   |-- api.post.ts
|-- services -> se agrupan en base a dominio
|   |-- Auth
|   |   |-- auth.service.ts
|   |   |-- index.ts
|   |   |-- ...
|   |-- Post
|   |   |-- post.service.ts
|   |   |-- index.ts
|   |   |-- ...
|   |-- ...
|-- models
|   |-- User.ts
|   |-- Post.ts
|   |-- ...
|   |-- index.ts
|-- index.tsx
|-- App.tsx
```
