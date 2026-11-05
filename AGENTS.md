# AGENTS.md — Entorno de práctica de Node.js

## Datos del proyecto

- Tema: Node.js
- Materia o curso: Node.js
- Documento fuente de consignas: `api flujo.docx`
- Categoría o conjunto de ejercicios: todos los ejercicios
- Numeración visible: numeración original
- Tecnologías base: Node.js, JavaScript (ES Modules).
- Tecnologías complementarias habituales: Express, Postman
- Ejecución: Terminal / Línea de comandos.

Los datos anteriores identifican el proyecto, pero no sustituyen la lectura del documento fuente.

## Objetivo

Preparar la estructura de carpetas y archivos para organizar los ejercicios asignados en Node.js.

El entorno debe consistir en carpetas independientes por ejercicio conteniendo únicamente un archivo de entrada inicial con la consigna comentada al principio. El agente no debe resolver ejercicios ni realizar revisiones, correcciones o pruebas de forma predeterminada, sino **únicamente cuando el usuario lo solicite expresamente**.

## Análisis obligatorio antes de crear la estructura

1. Inspeccionar la estructura y el contenido existentes en el workspace.
2. Leer íntegramente el documento fuente indicado.
3. Identificar las categorías, secciones y consignas disponibles.
4. Seleccionar únicamente los ejercicios que cumplan el criterio indicado para este proyecto.
5. Registrar para cada ejercicio:
   - identificador o número original;
   - título original;
   - consigna completa;
   - orden original.
6. Comparar el contenido extraído con el documento para confirmar que no se omitieron ejercicios.
7. No crear ni modificar archivos hasta haber identificado de manera fiable los ejercicios seleccionados.

No elegir ejercicios por su dificultad aparente. No inventar ni corregir títulos, números o consignas. Conservar el texto y el orden originales.

Si el documento fuente no está disponible o no permite identificar con seguridad la selección, explicar el problema y no crear ejercicios basados en suposiciones.

## Reglas para preservar el trabajo existente

- Antes de sobrescribir un archivo, leerlo y conservar la información que siga siendo útil.
- No eliminar archivos existentes con contenido relevante.
- No modificar el documento fuente.
- Mantener las soluciones existentes.
- No convertir, reformatear ni reemplazar en bloque ejercicios respondidos sin comprobar su contenido.

## Estructura del proyecto

No utilizar archivos comunes innecesarios, plantillas web, carpetas de estilos, ni archivos HTML. Tampoco incluir un `package.json` global en la raíz; el usuario inicializará un `package.json` individual desde la consola dentro de la carpeta de cada ejercicio al momento de resolverlo.

Crear una carpeta numerada independiente por ejercicio directamente en la raíz. Dentro de cada carpeta, crear únicamente un archivo `index.js` (u otro nombre si el ejercicio lo requiere) sólo con la consigna comentada al principio.

Estructura de referencia:

    /
    ├── AGENTS.md
    ├── README.md
    ├── [ARCHIVO_FUENTE]
    ├── ejercicio-XX/
    │   └── index.js
    └── ...

Usar el número original en el nombre de la carpeta cuando exista. No renumerar para llenar huecos. Si no hay número original, elegir un identificador técnico estable.

## Modo de interacción y asistencia bajo demanda

El agente actuará exclusivamente en modo pasivo hasta que el usuario solicite explícitamente una acción. Las intervenciones posibles incluyen:

- **Creación de la estructura inicial:** Generar únicamente las carpetas del proyecto con su correspondiente archivo de entrada que contenga la consigna comentada al principio.
- **Revisión y corrección de código (bajo demanda):** Cuando el usuario lo pida, analizar el código del ejercicio indicado para detectar fallos lógicos, errores de sintaxis o proponer mejoras de refactorización.
- **Consultas y explicaciones (bajo demanda):** Responder dudas conceptuales o técnicas sobre Node.js, Express, middleware, rutas, etc.
- **Guía de pruebas y depuración (bajo demanda):** Ayudar a formular comandos de ejecución, scripts o colecciones/peticiones para Postman cuando el usuario lo requiera.

## Archivos de los ejercicios

Crear un archivo `index.js` dentro de la carpeta de cada ejercicio, con la consigna comentada al principio.

No incluir código de ejemplo, plantillas con funciones, ni respuestas parciales o totales dentro de los archivos, salvo solicitud explícita del usuario. El archivo debe contener únicamente la consigna comentada al principio y, cuando el usuario resuelva el ejercicio, su solución.

Cuando el usuario pida formatear o revisar código existente:
- Usar sangría consistente de 2 espacios.
- Mantener convenciones estándar de JavaScript de forma legible y sin minificar.

## README

Crear o actualizar `README.md` en español. Documentar:

- El propósito y tema del proyecto.
- La estructura de carpetas independiente basada en Node.js.
- La indicación de cómo navegar a la carpeta de cada ejercicio (`cd ejercicio-XX`), inicializar su entorno (`npm init -y` o instalación de paquetes necesarios) y ejecutarlo desde la terminal (`node index.js`).
- El flujo de trabajo del proyecto y la asistencia del agente únicamente bajo demanda.

## Revisión final

Antes de terminar la configuración del proyecto, comprobar e informar:

- Cuáles ejercicios se incluyeron y que pertenecen al conjunto seleccionado.
- Que se conservan su numeración, orden y títulos.
- Que cada carpeta de ejercicio contenga únicamente su archivo principal (`index.js`) con la consigna comentada al principio.
- Que no se hayan creado archivos `package.json`, carpetas compartidas ni dependencias previas.