import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'https://localhost:8080/categorias'
      : 'https://danceflix-back.herokuapp.com/categorias';
    fetch('URL')
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });

    /* setTimeout(() => {
      setCategorias([
        ...categorias,
        {
          id: 1,
          descricao: 'danca',
          nome: 'Line Dance',
          cor: '#6BD1FF',
        },
        {
          id: 2,
          descricao: 'danca',
          nome: 'Tap Dance',
          cor: '#00C86F',

        },
        {
          id: 3,
          descricao: 'danca',
          nome: 'Hip-hop',
          cor: '#9cd33b',
        },
        {
          id: 4,
          descricao: 'danca',
          nome: 'Salsa',
          cor: 'orange',
        },
        {
          id: 5,
          descricao: 'danca',
          nome: 'Yangko Dance',
          cor: 'red',
        },
        {
          id: 6,
          descricao: 'danca',
          nome: 'Gangnam Style',
          cor: '#6b5be2',
        },
        {
          id: 7,
          descricao: 'danca',
          nome: 'Kathak',
          cor: '#00C86F',

        },
        {
          id: 8,
          descricao: 'danca',
          nome: 'Break dance or B-boying',
          cor: '#9cd33b',

        },
        {
          id: 9,
          descricao: 'danca',
          nome: 'Ballet',
          cor: 'orange',
        },
        {
          id: 10,
          descricao: 'danca',
          nome: 'Belly dance',
          cor: 'red',
        },
      ]);
    }, 4 * 1000); */
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Category name: "
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Description: "
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Color: "
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
