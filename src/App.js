import React, { useState, useEffect } from 'react';
import './App.css';

const FotoComTexto = ({ foto, texto }) => {
  return (
    <div className="foto-com-texto">
      <img src={foto} alt="Momento Especial" className="foto" />
      <p className="texto">{texto}</p>
    </div>
  );
};

function App() {
  const [showSurprise, setShowSurprise] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowSurprise(true);
    }, 4000); // Surpresa após 4 segundos
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Feliz Dia dos Namorados, Minha princesa moana!</h1>
        <p className="intro">Esse site ta bem simples porque o em breve é o tcham maior</p>
        <p>Aqui vou por algumas fotos importantes para mim, tá bom?</p>

         {/* Fotos com textos personalizados */}
        <FotoComTexto
          foto="/images/Imagem do WhatsApp de 2025-06-12 à(s) 17.04.52_a5e81041.jpg"  // Referência correta para a pasta public
          texto="Aqui foi a primeira vez que a gente se viu e mal sabia que iria viver tantas coisas com você, que seriam os momentos mais emocionantes da minha vida kkk"
        />
        <FotoComTexto
          foto="/images/Imagem do WhatsApp de 2025-06-12 à(s) 17.04.51_96b90640.jpg"
          texto="Aqui a gente aprontando debaixo da escada do Studio 5"
        />
        <FotoComTexto
          foto="/images/Imagem do WhatsApp de 2025-06-12 à(s) 17.04.52_911bb307.jpg"
          texto="Aqui é a gente aprontando e comooo a gente aprontava eiin (e que visão (não é eu))"
        />

         <FotoComTexto
          foto="/images/Imagem do WhatsApp de 2025-06-12 à(s) 17.04.52_1293d10f.jpg"
          texto="Eu gosto dessa foto, acho ela fofis"
        />
        <FotoComTexto
          foto="/images/Imagem do WhatsApp de 2025-06-12 à(s) 17.04.51_bb4fb420.jpg"
          texto="Começando a pensar que a gente só tem foto aprontando, olhaaa, e esse aqui foi no dia dos namorados ainda😨"
        />
       

        {/* Surpresa */}
        {showSurprise && (
          <div className="surprise">
            <p>Em breve... </p>
            <p> 💍</p>
          </div>
        )}

        {/* Texto principal sem animação */}
        <div className="cartinha">
          <p>
            Oi amor, então né, mais um dia dos namorados juntos e você não sabe como eu estou feliz por isso, não sabes como essa sensação é boa, ter você perto de mim, eu sou mais feliz com você, analisando aqui, todo esse tempo com você, foram os momentos mais diferentes que já vivi, se sentir amado é uma sensação tão boa, ainda mais vindo de você... Você é uma mulher incrível amor, obrigado por lutar por mim, eu tenho sorte de ter você, e hoje, nesse dia, eu quero tirar ele para agradecer, agradecer por você existir e agradecer por está comigo, me aturando, me amando, sendo essa menina única, me fazendo feliz, eu só tenho a agradecer mesmo, eu te amo minha Moana!
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
