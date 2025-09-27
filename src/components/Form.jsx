import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [name, setName] = useState("");

  const [birthdate, setBirthdate] = useState("");

  const [predictionResult, setPredictionResult] = useState(null);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChaneBirthday = (e) => {
    setBirthdate(e.target.value);
  };

  const prediction = (e) => {
    e.preventDefault();
    const result = find_sing(birthdate);
    setPredictionResult(result);
  };

  const find_sing = (date) => {
    const date_birthday = new Date(date);
    const month = date_birthday.getMonth() + 1;
    const day = date_birthday.getDate();
    const result = {
      sign: "",
      image_url: "",
      prediction: "",
    };

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      result.sign = "Aries";
      result.image_url =
        "https://static3.abc.es/comun/2015/img/horoscopo/zodiaco/aries.svg";
      result.prediction =
        "Como lo vimos en tus horóscopos de septiembre, sientes tensión entre lo que te gustaría controlar a puerta cerrada y lo que esperas lograr públicamente. Esta semana podrías enfrentarte a la sombra de los celos, la envidia o la lucha de poder dentro de un grupo, comunidad o proyecto colectivo. No es momento para imponerte, observa tus reacciones y haz de ellas tu fuente de empoderamiento.";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      result.sign = "Tauro";
      result.image_url =
        "https://static1.abc.es/comun/2015/img/horoscopo/zodiaco/tauro.svg";
      result.prediction =
        "Conflictos con pareja, socios o figuras públicas podrían activarse esta semana. Hay algo en tu forma de vincularte que está evolucionando, y tu entorno te lo está reflejando. Si alguien te confronta, pregúntate: ¿Qué parte de mí siente que necesita defenderse para no sentirse vulnerable? No es una semana para demostrar poder, sino para redefinirlo.";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
      result.sign = "Géminis";
      result.image_url =
        "https://static1.abc.es/comun/2015/img/horoscopo/zodiaco/geminis.svg";
      result.prediction =
        "Tu rutina diaria está chocando con tu sistema de creencias o con una visión de vida que ya no encaja contigo. Esta semana podrías vivir un momento de frustración o agotamiento que te indique con claridad lo que necesitas cambiar. Tal vez has intentado mantener el control en lo micro, pero el alma te está empujando a soltar en lo macro.";
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 21)) {
      result.sign = "Cáncer";
      result.image_url =
        "https://static1.abc.es/comun/2015/img/horoscopo/zodiaco/cancer.svg";
      result.prediction =
        "Tus deseos, pasiones o ganas de crear algo pueden sentirse en tensión con un miedo profundo a perder el control o ser vulnerable. Puede haber energía sexual acumulada, celos o heridas relacionadas con la validación que salen a la luz. La clave no está en reprimir, sino en observar y canalizar con conciencia.";
    } else if ((month === 7 && day >= 22) || (month === 8 && day <= 22)) {
      result.sign = "Leo";
      result.image_url =
        "https://static2.abc.es/comun/2015/img/horoscopo/zodiaco/leo.svg";
      result.prediction =
        "Situaciones familiares o del pasado pueden detonar hoy una fuerte tensión con alguien muy cercano. Pareja, roomie o incluso una expareja puede proyectar algo que estás lista para ver en ti. Si hay discusión, observa: ¿Estás defendiéndote como antes o respondiendo como la nueva tú? Esta es una oportunidad para romper un patrón relacional que ya no te sirve.";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      result.sign = "Virgo";
      result.image_url =
        "https://static2.abc.es/comun/2015/img/horoscopo/zodiaco/virgo.svg";
      result.prediction =
        "Tu mente está acelerada, tus palabras podrían sentirse como cuchillos y podrías decir algo que después te duela. Respira antes de reaccionar, sobre todo en temas laborales, con colegas o con temas de salud. Esta semana se activa la tensión entre lo que piensas que debes hacer y lo que tu cuerpo realmente te pide.";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      result.sign = "Libra";
      result.image_url =
        "https://static1.abc.es/comun/2015/img/horoscopo/zodiaco/libra.svg";
      result.prediction =
        "Hay un tema fuerte con el valor personal, el dinero, y la creatividad. Puede surgir una situación en la que sientas que no eres suficiente o que tu aporte no se valora. Esta semana es una semana para recordar que tu valor no depende de cuánto produces, ni de cuánto los demás admiran lo que haces. No te enfrentes con otros por miedo a no ser vista.";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 22)) {
      result.sign = "Escorpio";
      result.image_url =
        "https://static2.abc.es/comun/2015/img/horoscopo/zodiaco/escorpio.svg";
      result.prediction =
        "Tu energía está al máximo y podrías sentirte reactiva, impaciente o con necesidad de controlar todo. Lo que detona esta semana tiene una raíz emocional más profunda de lo que parece. Algo de tu historia personal, familia o infancia está siendo tocado. No reprimas, pero tampoco destruyas sin consciencia. Canaliza tu fuerza en movimiento físico, arte o introspección.";
    } else if ((month === 11 && day >= 23) || (month === 12 && day <= 22)) {
      result.sign = "Sagitario";
      result.image_url =
        "https://static4.abc.es/comun/2015/img/horoscopo/zodiaco/sagitario.svg";
      result.prediction =
        "Cuidado con las palabras que salen sin filtro: Puede que hoy te sorprendas a ti misma diciendo algo que ni tú sabías que sentías. Tus emociones inconscientes quieren salir, y lo harán a través de sueños, mensajes o incluso sabotaje verbal. Si algo te enoja o te asusta, no lo ignores: Escúchalo con compasión. La mente racional no está a cargo esta semana.";
    } else if ((month === 12 && day >= 23) || (month === 1 && day <= 21)) {
      result.sign = "Capricornio";
      result.image_url =
        "https://static2.abc.es/comun/2015/img/horoscopo/zodiaco/capricornio.svg";
      result.prediction =
        "Tus metas a largo plazo podrían sentirse amenazadas por un tema de dinero, autoestima o recursos. Tal vez quieras liderar un grupo, lanzar algo nuevo o involucrarte en un proyecto, pero hay inseguridad sobre si “vale la pena”. Esta cuadratura te pide revisar tus motivaciones reales. ¿Haces esto por validación o por vocación?";
    } else if ((month === 1 && day >= 22) || (month === 2 && day <= 17)) {
      result.sign = "Acuario";
      result.image_url =
        "https://static4.abc.es/comun/2015/img/horoscopo/zodiaco/acuario.svg";
      result.prediction =
        "Hay tensión entre tu imagen pública y tu proceso interno de transformación. Puede que esta semana se detone una situación que te confronte con tu rol profesional o con la presión de “ser alguien”. No tienes que demostrar nada, pero sí puedes usar esta energía para afirmarte en tu nuevo yo. Tu carrera está cambiando porque tú estás cambiando.";
    } else if ((month === 2 && day >= 18) || (month === 3 && day <= 20)) {
      result.sign = "Piscis";
      result.image_url =
        "https://static2.abc.es/comun/2015/img/horoscopo/zodiaco/piscis.svg";
      result.prediction =
        "Tus creencias, fe o visión espiritual están en tensión con un duelo interno que no has terminado de digerir. Esta semana podrías sentir confusión, enojo con el universo o cuestionamientos profundos. La clave no está en encontrar respuestas, sino en permitirte vivir la pregunta. Si estás en proceso terapéutico o espiritual, este es un momento de liberación.";
    }

    return result;
  };

  return (
    <>
      <div className="div-card">
        <h3>Descubre tu horóscopo del día</h3>
        <form onSubmit={prediction}>
          <label htmlFor="name">Nombre</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChangeName}
            placeholder="Ingresa tu nombre"
            required
            className="input-value"
          />
          <br />
          <label htmlFor="birthdate">Fecha de nacimiento</label>
          <br />
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            value={birthdate}
            onChange={handleChaneBirthday}
            required
            className="input-value"
          />
          <br />
          <input type="submit" value="Obtener predicción" className="button" />
        </form>
      </div>

      {predictionResult && (
        <div className="div-card">
          <h3>Hola {name}, aqui esta horóscopo de hoy</h3>
          <div className="text-sing">
            <h3>{predictionResult.sign}</h3>
            <div className="">
              <img className="img" src={predictionResult.image_url} alt={`Imagen de ${predictionResult.sign}`} />
            </div>
          </div>
          <p className="text-prediction">{predictionResult.prediction}</p>
        </div>
      )}
    </>
  );
}

export default Form;
