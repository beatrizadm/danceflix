import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

import categoriasRepository from '../../../repositories/categorias';
import { TableC } from '../styles';

function CadastroCategoria() {
  const history = useHistory();

  const table = {
    width: '100%',
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    border: '1px solid white',
    borderRadius: '4px',
    marginBottom: '50px',
  };

  const tableth = {
    paddingTop: '12px',
    paddingBottom: '12px',
    textAlign: 'center',
    backgroundColor: '#2A7AE4',
    color: 'black',

  };

  const valoresIniciais = {
    nome: '',
    text: '',
    cor: '',
  };

  const { handleChange, values } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'https://localhost:8080/categorias'
      : 'https://danceflix-back.heroku.com/categorias';
    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  const listC = (
    <table style={table}>
      <tbody>
        <tr>
          <th style={tableth}>Categories</th>
        </tr>
      </tbody>
      {categorias.map((categoria) => (
        <tbody key={`${categoria.titulo}`}>
          <TableC fieldColor={categoria.cor}>
            <td style={{ padding: '5px', textAlign: 'center' }}>
              {categoria.titulo}
            </td>
          </TableC>
        </tbody>
      ))}
    </table>
  );

  return (
    <PageDefault>
      <h1>
        Category Registration:
        {values.titulo}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();

        categoriasRepository
          .create({
            titulo: values.titulo,
            cor: values.cor,
            text: values.text,
          })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });

        setCategorias([
          ...categorias,
          values,
        ]);
      }}
      >

        <FormField
          label="Category name: "
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Description: "
          type="textarea"
          name="text"
          value={values.text}
          onChange={handleChange}
        />

        <FormField
          label="Color"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Register
        </Button>
      </form>

      {categorias.length === 0 && (
        <div className="loading">
          {/* Loading... */}
          <div className="obj" />
          <div className="obj" />
          <div className="obj" />
          <div className="obj" />
          <div className="obj" />
          <div className="obj" />
          <div className="obj" />
          <div className="obj" />
        </div>
      )}

      {listC}

    </PageDefault>
  );
}

export default CadastroCategoria;
