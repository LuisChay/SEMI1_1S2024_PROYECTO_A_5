# Polly


### Método
* POST

### Ruta
* /funcion/comprehend

### Body
```json
{
  "message": "Una calurosa mañana, se encontraba Tío Conejo recolectando zanahorias para el almuerzo. De repente, escuchó un rugido aterrador: ¡era Tío Tigre! —¡Ajá, Tío Conejo! —dijo el felino—. No tienes escapatoria, pronto te convertirás en un delicioso bocadillo. En ese instante, Tío Conejo notó unas piedras muy grandes en lo alto de la colina e ideó un plan.—Puede que yo sea un delicioso bocadillo, pero estoy muy flaquito —dijo Tío Conejo—. Mira hacia la cima de la colina, ahí tengo mis vacas y te puedo traer una. ¿Por qué conformarte con un pequeño bocadillo, cuando puedes darte un gran banquete? Como Tío Tigre se encontraba de cara al sol, no podía ver con claridad y aceptó la propuesta. Entonces le permitió a Tío Conejo ir colina arriba mientras él esperaba abajo. Al llegar a la cima de la colina, Tío Conejo gritó: —Abre bien los brazos Tío Tigre, estoy arreando la vaca más gordita. Entonces, Tío Conejo se acercó a la piedra más grande y la empujó con todas sus fuerzas. La piedra rodó rápidamente. Tío Tigre estaba tan emocionado que no vio la enorme piedra que lo aplastó, dejándolo adolorido por meses. Tío Conejo huyó saltando de alegría."
}
```

### Respuesta
```json
[
    {
        "Score": 0.966357946395874,
        "Type": "PERSON",
        "Text": "Tío Conejo",
        "BeginOffset": 35,
        "EndOffset": 45
    },
    {
        "Score": 0.9172011017799377,
        "Type": "PERSON",
        "Text": "Tío Tigre",
        "BeginOffset": 134,
        "EndOffset": 143
    },
    {
        "Score": 0.9486788511276245,
        "Type": "PERSON",
        "Text": "Tío Conejo",
        "BeginOffset": 152,
        "EndOffset": 162
    },
    {
        "Score": 0.9601881504058838,
        "Type": "PERSON",
        "Text": "Tío Conejo",
        "BeginOffset": 271,
        "EndOffset": 281
    },
    {
        "Score": 0.9582166075706482,
        "Type": "PERSON",
        "Text": "Tío Conejo—",
        "BeginOffset": 423,
        "EndOffset": 434
    },
    {
        "Score": 0.9437574744224548,
        "Type": "PERSON",
        "Text": "Tío Tigre",
        "BeginOffset": 601,
        "EndOffset": 610
    },
    {
        "Score": 0.9831236004829407,
        "Type": "PERSON",
        "Text": "Tío Conejo",
        "BeginOffset": 713,
        "EndOffset": 723
    },
    {
        "Score": 0.9754051566123962,
        "Type": "PERSON",
        "Text": "Tío Conejo",
        "BeginOffset": 803,
        "EndOffset": 813
    },
    {
        "Score": 0.9166161417961121,
        "Type": "PERSON",
        "Text": "Tío Tigre",
        "BeginOffset": 843,
        "EndOffset": 852
    },
    {
        "Score": 0.9762344360351562,
        "Type": "PERSON",
        "Text": "Tío Conejo",
        "BeginOffset": 900,
        "EndOffset": 910
    },
    {
        "Score": 0.9427100419998169,
        "Type": "PERSON",
        "Text": "Tío Tigre",
        "BeginOffset": 1007,
        "EndOffset": 1016
    },
    {
        "Score": 0.46529829502105713,
        "Type": "QUANTITY",
        "Text": "meses",
        "BeginOffset": 1107,
        "EndOffset": 1112
    },
    {
        "Score": 0.9635487794876099,
        "Type": "PERSON",
        "Text": "Tío Conejo",
        "BeginOffset": 1114,
        "EndOffset": 1124
    }
]
```