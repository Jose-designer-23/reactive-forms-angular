# 📝 Reactive Forms Angular App 🚀

¡Bienvenido a la aplicación **Reactive Forms Angular App**! Este proyecto es una demostración integral y avanzada de las capacidades de los Formularios Reactivos en Angular. Explora cómo construir formularios complejos, implementar validaciones robustas (síncronas y asíncronas), gestionar el estado del formulario y crear interfaces de usuario dinámicas basadas en la interacción del usuario.

Esta aplicación es ideal para desarrolladores que buscan comprender y aplicar las mejores prácticas en el manejo de formularios en Angular, desde los conceptos básicos hasta escenarios más avanzados como campos dinámicos y validaciones personalizadas.

## ✨ Características Principales

La aplicación está organizada en varias categorías, cada una explorando diferentes aspectos y complejidades de los formularios reactivos:

### 📄 Básicos

Esta sección introduce los fundamentos de los formularios reactivos con un formulario de producto:

* **Campos de Entrada:**
    * **Nombre del Producto:** Campo de texto.
    * **Precio:** Campo numérico.
    * **Número de Existencias:** Campo numérico.
* **Guardado en Consola:** Al hacer clic en "Guardar", el valor del formulario se imprime en la consola del navegador.
* **Indicadores de Estado del Formulario:** Muestra en tiempo real el estado del formulario y de sus campos individuales:
    * **`valid`**: ¿Es válido el formulario/campo?
    * **`pristine`**: ¿El formulario/campo no ha sido modificado por el usuario?
    * **`touched`**: ¿El formulario/campo ha sido visitado o "tocado" por el usuario?
    * **`dirty`**: ¿El formulario/campo ha sido modificado por el usuario?
* **Valor del Formulario JSON:** Muestra el valor actual de todos los datos introducidos en el formulario en formato JSON.
* **Manejo de Errores y Validaciones:** Implementación de validaciones con **expresiones regulares y `Validators`** de Angular, mostrando mensajes de error dinámicos si los datos introducidos no cumplen los criterios.

### ➕ Dinámicos

Esta categoría demuestra la flexibilidad de los formularios reactivos para manejar campos que se añaden o eliminan dinámicamente:

* **Nombre de Usuario:** Campo de texto para introducir el nombre del usuario.
* **Lista Dinámica de Videojuegos:**
    * Un input de texto para añadir nombres de videojuegos.
    * Los juegos se agregan a una **lista de inputs dinámicos**.
    * Cada juego en la lista puede ser **editado individualmente**.
    * **Validación:** Requiere un **mínimo de 2 juegos** añadidos para que la lista sea válida.
    * Implementa las mismas validaciones y mensajes de error que en la categoría "Básicos".

### 💡 Switches

Explora el uso de diferentes tipos de controles de formulario para opciones binarias o de selección:

* **Género:** Un conjunto de **inputs de tipo `radio`** para seleccionar el género (Masculino/Femenino).
* **Notificaciones:** Un **toggle switch** para confirmar si el usuario desea recibir notificaciones.
* **Condiciones de Uso y Servicio:** Un **checkbox (`input` de tipo cuadrado)** que el usuario debe **aceptar obligatoriamente** para que el formulario sea válido.

### 🔐 Registro

Una sección dedicada a un formulario de registro completo, mostrando validaciones comunes y cruzadas:

* **Campos de Registro:**
    * Nombre
    * Apellido
    * Email
    * Username
    * Password
    * Confirmar Contraseña
* **Validaciones Robustas:** Todos los campos de texto tienen validaciones implementadas usando `Validators` de Angular y **expresiones regulares**.
* **Validación de Contraseñas:** `password` y `confirmar contraseña` deben **coincidir obligatoriamente** para que el registro sea válido, demostrando validaciones a nivel de grupo de formulario.

### 🌍 Países

Una demostración avanzada del encadenamiento de selecciones en listas desplegables:

* **Listas Desplegables Anidadas:**
    1.  **Selección de Continente:** La primera lista permite seleccionar un continente.
    2.  **Selección de País:** Basado en el continente seleccionado, la segunda lista se llena dinámicamente con los países de ese continente.
    3.  **Países Limítrofes:** La tercera lista muestra los países que **rodean o son vecinos** del país seleccionado en la segunda lista.
* Esta sección demuestra el consumo de APIs externas y la manipulación de datos para construir lógica de formulario compleja y dependiente.

## 🛠️ Tecnologías Utilizadas

### Frontend:

* **[Angular](https://angular.io/) (v19.2.14, con Signals):** El framework principal para construir la interfaz de usuario, aprovechando sus potentes pipes integrados y personalizados, junto con la gestión de estado reactivo mediante Signals.
* [**Angular Reactive Forms**](https://angular.io/guide/reactive-forms) - El módulo central para la creación de estos formularios.
* **[TypeScript](https://www.typescriptlang.org/) (~5.7.2):** El lenguaje de programación base que añade tipado estático.
* **[Tailwind CSS](https://tailwindcss.com/) (v3.4.17):** Un framework CSS de utilidad para un diseño rápido y responsivo.
* **[DaisyUI](https://daisyui.com/) (v4.12.24):** Una biblioteca de componentes UI para Tailwind CSS.
* **[RxJS](https://rxjs.dev/) (~7.8.0):** Para la gestión de flujos de datos asíncronos y programación reactiva dentro de Angular.
* **API Externa de Países:** (Si aplica, menciona la API específica, ej. REST Countries API) para obtener la información de continentes, países y fronteras.

---

## 🚀 Cómo Ejecutar el Proyecto

Para poner en marcha la aplicación **Reactive Forms Angular App** en tu entorno local, sigue estos pasos:

### Requisitos Previos

* Node.js (versión 18 o superior)
* npm o Yarn

### Pasos

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/Jose-designer-23/reactive-forms-angular](https://github.com/Jose-designer-23/reactive-forms-angular)
    cd reactive-forms-angular
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    # o si usas Yarn
    # yarn install
    ```

3.  **Iniciar la aplicación:**
    ```bash
    ng serve
    ```

4.  **Acceder a la Aplicación:**
    Abre tu navegador y ve a `http://localhost:4200/`. La aplicación se recargará automáticamente cada vez que modifiques los archivos fuente.

---

## 💻 Comandos de Desarrollo (Angular CLI)

Esta sección proporciona una referencia rápida a los comandos más comunes de Angular CLI.

* **Arrancar el Servidor de Desarrollo:**
    ```bash
    ng serve
    ```
* **Generar Componentes, Servicios, etc.:**
    ```bash
    ng generate component nombre-del-componente
    ng generate service services/mi-servicio
    # Para ver una lista completa de esquemas: ng generate --help
    ```
* **Construir el Proyecto para Producción:**
    ```bash
    ng build
    ```
* **Ejecutar Pruebas Unitarias:**
    ```bash
    ng test
    ```
