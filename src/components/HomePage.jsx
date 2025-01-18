import { useEffect } from "react";
import { Container } from "react-bootstrap";

const HomePage = () => {
useEffect(()=>{
  document.title = `Homepage- Meteo App`;
})

  return (
    <Container fluid className="d-flex flex-column">
      <h1>Benvenut* nella mia prima pagina meteo</h1>
      <h2 className=" fst-italic opacity-50 fs-3">Ninfa Lissette Carreno Jacho</h2>
      <hr />
      <p className="mb-3">
        Cerca la città che preferisci nella barra di ricerca e selziona, tra i
        risultati ottenuti, la città che desideri. Otterrai infromazioni su:
      </p>
      <ul>
        <li className="mb-3"> Meteo e temperatura corrente </li>
        <li className="mb-3"> Meteo e temperatura dei prossimi 6 giorni</li>
        <li className="mb-3">Meteo e temperatura ogni 3 ore per i prissimi 4 giorni</li>
        <li className="mb-2">
          Informazioni varie:
          <ul >
            <li className="my-2">Real Feel</li>
            <li className="mb-2">Vento</li>
            <li className="mb-2">Probabilità di pioggia</li>
            <li className="mb-2">Livello di umidità</li>
            <li className="mb-2">Visibilità</li>
            <li className="mb-2">Pressione</li>
            <li className="mb-2"> Alba</li>
            <li className="">Tramonto</li>
          </ul>
        </li>
      </ul>

      <p className="mb-3">
        Ho impostato di default una ricerca in <strong>Cities: Londra</strong> e
        in <strong>Weather: Torino</strong>
      </p>
      <p>Buon proseguimento!</p>
    </Container>
  );
};

export default HomePage;
