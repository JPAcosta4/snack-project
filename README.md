[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/rHJWqXwn)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12339161&assignment_repo_type=AssignmentRepo)
**Nombres de integrantes del grupo:** (Juan Pablo Acosta, Joaqu{in Galindo})

# Enunciado Proyecto 2

El segundo proyecto del curso consistirá en implementar una aplicación móvil utilizando tecnologías para el desarrollo híbrido. La tecnología que utilizaremos es React Native con [Expo](https://docs.expo.dev/), con la intención de que el desarrollo pueda ser desplegado en diferentes plataformas móviles.

## Descripción del Proyecto

PichangApp es una aplicación móvil que permite crear partidos amistosos e informales de fútbol o futbolito, en la cual el usuario podrá invitar a otros a participar de estos, unirse a otros partidos y más.

Para este proyecto, trabajarán con la API de Pichangas, una plataforma diseñada para la creación y gestión de partidos de fútbol informales. La API les permite crear y gestionar usuarios, así como organizar estos encuentros. Una "pichanga", en detalle, representa un partido de fútbol en el que dos equipos eligen un lugar, una hora y proporcionan una descripción final detallada de cómo transcurrió el partido.

La esencia de esta tarea consiste en llevar sus habilidades adquiridas a la práctica, adentrándose en el entorno de desarrollo móvil con Expo para iOS y Android. Explorarán y comprenderán las funcionalidades y la versatilidad que Expo ofrece al construir aplicaciones directamente en sus propios teléfonos móviles. Este paso resulta fundamental para que puedan adentrarse de manera más profunda en el mundo del desarrollo móvil, entendiendo cómo crear aplicaciones reales y hacerlas funcionar en dispositivos personales.

## Desarrollo de React Native

En este proyecto, se llevará a cabo el desarrollo de una aplicación móvil utilizando React Native y expo desde cero. Esto implica iniciar el proyecto con un nuevo esquema y estructura, configurando las dependencias y componentes necesarios para su funcionalidad. A diferencia de proyectos anteriores donde se trabajó en un front-end y un back-end, esta vez se centrarán exclusivamente en la parte móvil de la aplicación, utilizando React Native con [Expo](https://docs.expo.dev/) para crear una interfaz de usuario eficaz y receptiva.

### Objetivos Principales del Proyecto 2.1

La primera entrega del Proyecto 2.1 (parte 1) busca establecer los cimientos de "PichangApp" en React Native y Expo para dispositivos Android. Los objetivos clave incluyen crear un nuevo proyecto desde cero, integrar autenticación, navegar entre secciones, mostrar y gestionar pichangas desde una API, permitir compartir ubicación y fotos, garantizar la funcionalidad sin conexión.

## Tecnologías y Componentes

A continuación, se describen las tecnologías y componentes clave que se utilizarán en este proyecto:

### Tecnologías:

- **React Native con Expo**: Utilizaremos React Native en conjunto con Expo para desarrollar la aplicación móvil, tanto para iOS como para Android.

### Componentes y Bibliotecas:

- **Material UI**: Se utilizarán componentes de Material UI para garantizar un diseño consistente y estéticamente agradable en la interfaz de usuario de la aplicación. Para esto, se recomienda utilizar la versión [^](https://docs.npmjs.com/about-semantic-versioning)5.14.8 o superior de [Material UI](https://mui.com/).

- **Expo Icons**: La biblioteca Expo Icons proporciona una amplia gama de iconos listos para usar en la aplicación móvil, lo que facilita la representación de acciones, funciones y características en la interfaz de usuario.

- **axios**: Es fundamental utilizar [axios](https://axios-http.com/docs/example) para realizar solicitudes HTTP a la API de Pichangas. Se recomienda la versión "^1.4.0" o superior de axios para asegurar una comunicación confiable con el servidor.
Ejemplo para axios:
```import axios from 'axios';

// Definir los datos de inicio de sesión
const loginData = {
  email: 'usuario@example.com',
  password: 'contraseña123',
};

// Realizar una solicitud POST para iniciar sesión
axios
  .post('https://pichang-app-e6269910e1a5.herokuapp.com/api/v1/login', loginData)
  .then((response) => {
    // Manejar la respuesta exitosa aquí
    console.log('Respuesta del servidor:', response.data);
  })
  .catch((error) => {
    // Manejar errores aquí
    console.error('Error al iniciar sesión:', error);
  });
```

### Diseño Adaptable:

Es importante tener en cuenta la adaptabilidad de la aplicación para garantizar una experiencia óptima en una variedad de dispositivos Android y iOS. La aplicación debe incorporar uso de técnicas de diseño responsivo de interfaz de usuario.

### React Navigation:

Se utilizará React Navigation para gestionar la navegación entre pantallas de la aplicación móvil. Es recomendable utilizar la versión 6 de [@react-navigation](https://reactnavigation.org/docs/getting-started) para aprovechar las últimas mejoras y características de esta biblioteca.

## Funcionalidades Proyecto 2.1

1. **[1.0] Login Simple (Token JWT)**: Implementar un sistema de inicio de sesión que permita a los usuarios autenticarse utilizando credenciales (por ejemplo, correo electrónico y contraseña). Utilizar JSON Web Tokens (JWT) para gestionar la autenticación y autorización de los usuarios.
2. **[1.0] Navegación por la aplicación**: Implementar navegación dentro de la aplicación que permita acceder a diferentes secciones, incluyendo: perfil del usuario y listado de pichangas cronológico (de más reciente a menos reciente).
3. **[1.0] Perfil del Usuario**: Vista con información básica del usuario registrado.
4. **[1.0] Lista de Pichangas**: Mostrar una lista de pichangas disponibles, obtenidas a través de la API de Pichangas. Presentar información relevante de cada pichanga, como fecha, hora, lugar y descripción del partido.
5. **[1.0] CRUD de Pichanga**: Proveer interfaces para operaciones de creación, vista, actualización (edición) y eliminación de pichangas desde el listado de pichangas.
6. **[1.0] Comportamiento sin conectividad**: Asegurar que la aplicación funcione correctamente y proporcione una experiencia de usuario óptima incluso en ausencia de una conexión a Internet estable. Implementar mecanismos de manejo de errores y mensajes informativos para el usuario en caso de problemas de conexión.

Cada requisito será evaluado en escala 1-5 y dicho puntaje traducido a ponderadores (1:0.0; 2:0.25; 3:0.5; 4:0.75; 5:1.0) que son aplicados al puntaje del ítem correspondiente.

En esta entrega no habrá uso de georeferenciación ni archivos de imágenes. Éstas serán funciones requeridas en la entrega 2.2. Los próximos enunciados de proyecto serán publicados a través de Gists aquí en GitHub, o en repositorios nuevos, si la tarea lo requiere.

## Endpoints de API básicos a utilizar

En esta fase del proyecto, se incorporará el uso de una API proporcionada a través de un URL específico. La API, en este caso, es la API de Pichangas, diseñada para la creación y gestión de partidos de fútbol informales. Esta API permitirá a la aplicación acceder y manipular datos relacionados con los partidos, usuarios, ubicaciones, entre otros aspectos relevantes para la funcionalidad de PichangApp.

La relevancia de trabajar con una API radica en que permite a la aplicación móvil interactuar y obtener información actualizada y dinámica desde un servidor remoto. Al utilizar una API, la aplicación puede obtener datos en tiempo real, realizar operaciones específicas y mantenerse sincronizada con la información centralizada en el servidor. Esto facilita la creación de aplicaciones dinámicas y actualizadas, permitiendo a los usuarios acceder a la información más reciente y realizar acciones en tiempo real.

A continuación, se detallan los endpoints básicos que deben utilizarse en el proyecto:

1. **Login** - [POST]
    - URL: `https://pichang-app-e6269910e1a5.herokuapp.com/api/v1/login`
    - Parámetros:
        - `email`: String
        - `password`: String

2. **Registro de Usuario** - [POST]
    - URL: `https://pichang-app-e6269910e1a5.herokuapp.com/api/v1/signup`
    - Parámetros:
        - `email`: String
        - `password`: String
        - `name`: String
        - `category`: String

3. **Pichangas** - [POST, GET, PUT, DELETE]
    - URL: `https://pichang-app-e6269910e1a5.herokuapp.com/api/v1/pichangas`
    - Parámetros:
        - `home_team_id`: int
        - `visitor_team_id`: int
        - `location_id`: int
        - `instructions`: Text
        - `game_date`: datetime
        - `results`: String

4. **Ubicaciones** - [POST, GET, PUT, DELETE]
    - URL: `https://pichang-app-e6269910e1a5.herokuapp.com/api/v1/locations`
    - Parámetros:
        - `latitude`: String
        - `longitude`: String
        - `place_name`: String
        - `image`: image file (image/jpg or image/png)

## Modo de trabajo

Para el Proyecto 2, permitiremos que vuelvan a conformar grupos. Pueden mantener su grupo del proyecto anterior o cambiarlo. Sin embargo, deben registrar su nuevo grupo en el formulario disponible en [https://forms.gle/ZZHuvukmASnCuRX97]()

**Deben crear el proyecto de su aplicación móvil en React Native en este mismo repositorio**. Mantengan este archivo README.md y agreguen un [.gitignore apropiado](https://github.com/facebook/react-native/blob/main/.gitignore), ajustado a los paths que definan en el repositorio.

La fecha de entrega del proyecto 2.1 es el miércoles 18 de octubre a las 23:59 hrs.
