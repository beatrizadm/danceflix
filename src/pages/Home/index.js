import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos);
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length === 0 && (<div>Loanding...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="'Dance it does not only make us move our body but also moves our souls'
                What is dance? Give all of you, surround your soul, feel the beat and show it.
                Here you can see the top 10 most famous types of dance."
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      {/*
      {dadosIniciais.length >= 1 && (
        <>
          <BannerMain
            videoTitle="Come and feel the beat"
            url={dadosIniciais[0].videos[0].url}
            videoDescription="'Dance it does not only make us move our body but also moves our souls'
          What is dance? Give all of you, surround your soul, feel the beat and show it.
          Here you can see the top 10 most famous types of dance."
          />

          <Carousel ignoreFirstVideo category={dadosIniciais[0]} />

        </>
      )}

      <BannerMain
        videoTitle="Come and feel the beat"
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="'Dance it does not only make us move our body but also moves our souls'
        What is dance? Give all of you, surround your soul, feel the beat and show it.
        Here you can see the top 10 most famous types of dance."
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
      <Carousel category={dadosIniciais.categorias[1]} />
      <Carousel category={dadosIniciais.categorias[2]} />
      <Carousel category={dadosIniciais.categorias[3]} />
      <Carousel category={dadosIniciais.categorias[4]} />
      <Carousel category={dadosIniciais.categorias[5]} />
      <Carousel category={dadosIniciais.categorias[6]} />
      <Carousel category={dadosIniciais.categorias[7]} />
      <Carousel category={dadosIniciais.categorias[8]} />
      <Carousel category={dadosIniciais.categorias[9]} />
      <Footer />
 */}

    </PageDefault>

  );
}

export default Home;
