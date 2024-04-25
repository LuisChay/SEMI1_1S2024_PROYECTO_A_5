# Manual técnico
## Proyecto - NiceReads
    Universidad San Carlos de Guatemala
    Ingeniería en Ciencias y Sistemas
    Seminario de Sistemas 1

**Estudiantes:**

| Carné | Nombre |
| ----- | ------ |
| 202000650	| Marjorie Gissell Reyes Franco |
| 202003381	| Luisa María Ortíz Romero |
| 202000343	| Luis Manuel Chay Marroquín |

## Objetivos 
### Objetivo general
- Diseñar e implementar una aplicación altamente escalable y rentable utilizando los servicios de AWS, garantizando un rendimiento óptimo y una experiencia de usuario satisfactoria, orientada a usuarios aficionados a la lectura.
### Objetivos específicos
- Integrar servicios de AWS para mejorar la funcionalidad de la aplicación
- Optimizar la escalabilidad y la disponibilidad utilizando servicios gestionados de AWS
- Implementar estrategias de almacenamiento eficiente y gestión de datos en AWS

## Descripción
NiceReads es un blog enfocado a lectores y personas que quieran iniciar con el habito de la lectura de distintas partes del mundo en el cual pueden compartir acerca de los libros que han leído con otros usuarios, y también conocer sobre recomendaciones y libros nuevos
Usando las ultimas tecnologías web se han implementado herramientas para que la experiencia del usuario sea la más completa en teérminos de innovación, seguridad y funcionalidades

## Arquitectura
![alt text](<Imagenes/WhatsApp Image 2024-04-23 at 8.44.37 PM.jpeg>)

## Presupuesto
Se calculo el presupusto en base a un uso medio de la aplicacion usando recursos de uso medio, no capas gratuitas ni servicios de bajo costo, tampoco servicios de alta demanda o uso excesivo de recursos, también se tomo en cuenta el uso de los servicios en el mes de 30 días y el año de 365 días por 24 horas al día.
Si la aplicación se usa de manera diferente a la descrita, el costo puede variar e incluso migrar a un plan de capas gratuitas o servicios de menor o mayor costo.
### Amazon S3
- S3 Standard Storage: 0.023 USD por GB almacenado al mes (primeros 50 TB)
Costo aproximado por mes: 0.023 USD/GB * 10 GB = 0.23 USD
### Amazon RDS
- db.t4g.small: 0.032 USD por hora
Costo aproximado por mes: 0.032 USD/hora * 24 horas/día * 30 días/mes = 23.04 USD
### Amazon EC2
- t4g.medium: 0,0336 USD por hora
Costo aproximado por mes: 0.0336 USD/hora * 24 horas/día * 30 días/mes = 24.192 USD
### Amazon EC2 Load Balancer
- Application Load Balancer: 0.0225 USD por hora
Costo aproximado por mes: 0.0225 USD/hora * 24 horas/día * 30 días/mes = 16.2 USD
### Amazon Lambda
- Primeros 6 mil millones de GB/segundo por mes: 0.20 USD por millón de solicitudes
Costo aproximado por mes: 0.20 USD/millón de solicitudes * 100 mil solicitudes = 0.02 USD
### Amazon API Gateway
- Primeros 300 millones de solicitudes al mes: 1.00 USD por millón de solicitudes
Costo aproximado por mes: 1.00 USD/millón de solicitudes * 100 mil solicitudes = 0.1 USD
### Amazon Polly
- Primeros 5 millones de caracteres convertidos al mes: 4.00 USD por millón de caracteres
Costo aproximado por mes: 4.00 USD/millón de caracteres * 100 mil caracteres = 0.4 USD
### Amazon Rekognition
- Primeros 1 millón de unidades de imágenes analizadas al mes: 0.001 USD por unidad
Costo aproximado por mes: 0.001 USD/unidad * 100 mil unidades = 0.1 USD
### Amazon Translate
- Primeros 2 millones de caracteres traducidos al mes: 15.00 USD por millón de caracteres
Costo aproximado por mes: 15.00 USD/millón de caracteres * 100 mil caracteres = 1.5 USD
### Amazon Lex
- Primeros 10 mil mensajes de texto procesados al mes: 0.004 USD por mensaje
Costo aproximado por mes: 0.004 USD/mensaje * 100 mensajes = 0.4 USD
### Amazon Comprehend
- Primeros 50 mil unidades de texto procesadas al mes: 0.0001 USD por unidad
Costo aproximado por mes: 0.0001 USD/unidad * 100 unidades = 0.01 USD
### Total aproximado por mes: 66.192 USD (514.56 Q)
### Total aproximado por año: 794.304 USD (,174.69 Q)
 

## Servicios utilizados
### Amazon S3
Se utilizó Amazon S3 para almacenar los archivos estáticos de la aplicación. Amazon S3 es un servicio de almacenamiento de objetos que ofrece escalabilidad, disponibilidad y durabilidad de los datos.
### Amazon RDS
Se utilizó Amazon RDS para almacenar la base de datos de la aplicación. Amazon RDS es un servicio de base de datos relacional que facilita la configuración, operación y escalabilidad de las bases de datos relacionales en la nube.
### Amazon EC2
Se utilizó Amazon EC2 para implementar la aplicación backend. Amazon EC2 es un servicio de computación en la nube que proporciona capacidad informática escalable en la nube.
### Amazon EC2 Load Balancer
Se utilizó Amazon EC2 Load Balancer para distribuir el tráfico de red entrante a múltiples instancias de Amazon EC2. Amazon EC2 Load Balancer mejora la tolerancia a fallos de la aplicación y la escalabilidad.
### Amazon Lambda
Se utilizó Amazon Lambda para ejecutar funciones de backend sin aprovisionar ni administrar servidores. Amazon Lambda es un servicio de computación sin servidor que permite ejecutar código sin preocuparse por la infraestructura subyacente.
### Amazon API Gateway
Se utilizó Amazon API Gateway para crear, publicar, mantener, supervisar y proteger API. Amazon API Gateway es un servicio que facilita la creación y administración de API para aplicaciones en la nube.
### Amazon Polly
Se utilizó Amazon Polly para convertir texto en voz. Amazon Polly es un servicio de texto a voz que permite crear aplicaciones que hablan de forma natural.
### Amazon Rekognition
Se utilizó Amazon Rekognition para analizar y reconocer objetos, texto y escenas en imágenes. Amazon Rekognition es un servicio de visión por computadora que facilita la incorporación de análisis de imágenes en las aplicaciones.
### Amazon Translate
Se utilizó Amazon Translate para traducir texto entre idiomas. Amazon Translate es un servicio de traducción automática que permite crear aplicaciones multilingües.
### Amazon Lex
Se utilizó Amazon Lex para crear chatbots conversacionales. Amazon Lex es un servicio de creación de chatbots que facilita la creación de interfaces de conversación para aplicaciones.
### Amazon Comprehend
Se utilizó Amazon Comprehend para analizar y extraer información de texto. Amazon Comprehend es un servicio de procesamiento de lenguaje natural que facilita la incorporación de análisis de texto en las aplicaciones.
### Docker
Se utilizó Docker para contenerizar la aplicación backend. Docker es una plataforma de contenedores que facilita la creación, implementación y ejecución de aplicaciones en contenedores.
