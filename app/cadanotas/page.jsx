"use client";

import { useState } from "react";
import Header from "../components/header";

export default function CadaNotas() {
  const [notas, setNotas] = useState([
    {
      id: 1,
      nome: "Julia",
      t1: 8,
      t2: 9,
      n1: 7,
      n2: 8,
      n3: 9,
    },
  ]);

  const [editando, setEditando] = useState(null);
  const [adicionando, setAdicionando] = useState(false);

  const [nome, setNome] = useState("");
  const [t1, setT1] = useState("");
  const [t2, setT2] = useState("");
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [n3, setN3] = useState("");

  // Limpar formulário
  function limparFormulario() {
    setNome("");
    setT1("");
    setT2("");
    setN1("");
    setN2("");
    setN3("");
  }

  // Abrir formulário de adicionar
  function abrirAdicionar() {
    setEditando(null);
    limparFormulario();
    setAdicionando(true);
  }

  // Adicionar nova nota
  function adicionarNota() {
    if (!nome || !t1 || !t2 || !n1 || !n2 || !n3) {
      alert("Preencha todos os campos!");
      return;
    }

    const novaNota = {
      id: Date.now(),
      nome: nome,
      t1: Number(t1),
      t2: Number(t2),
      n1: Number(n1),
      n2: Number(n2),
      n3: Number(n3),
    };

    setNotas([...notas, novaNota]);

    limparFormulario();
    setAdicionando(false);

    alert("Notas adicionadas com sucesso!");
  }

  // Editar nota
  function editarNota(nota) {
    setAdicionando(false);

    setEditando(nota.id);

    setNome(nota.nome);
    setT1(nota.t1);
    setT2(nota.t2);
    setN1(nota.n1);
    setN2(nota.n2);
    setN3(nota.n3);
  }

  // Salvar edição
  function salvarEdicao() {
    const novasNotas = notas.map((nota) => {
      if (nota.id === editando) {
        return {
          ...nota,
          nome: nome,
          t1: Number(t1),
          t2: Number(t2),
          n1: Number(n1),
          n2: Number(n2),
          n3: Number(n3),
        };
      }

      return nota;
    });

    setNotas(novasNotas);

    setEditando(null);

    limparFormulario();
  }

  // Deletar nota
  function deletarNota(id) {
    const confirmar = confirm(
      "Tem certeza que deseja deletar as notas deste aluno?",
    );

    if (confirmar) {
      setNotas(notas.filter((nota) => nota.id !== id));
    }
  }

  return (
    <>
      <Header />

      <main style={styles.main}>
        <div style={styles.caixa}>
          <div style={styles.cabecalho}>
            <div>
              <h2 style={styles.titulo}>Cadastro de Notas</h2>

              <p style={styles.subtitulo}>Notas cadastradas dos alunos</p>
            </div>

            <button style={styles.adicionar} onClick={abrirAdicionar}>
              + Adicionar Nota
            </button>
          </div>

          <table style={styles.tabela}>
            <thead>
              <tr>
                <th style={styles.th}>Nome aluno</th>
                <th style={styles.th}>T1</th>
                <th style={styles.th}>T2</th>
                <th style={styles.th}>N1</th>
                <th style={styles.th}>N2</th>
                <th style={styles.th}>N3</th>
                <th style={styles.th}>Ações</th>
              </tr>
            </thead>

            <tbody>
              {notas.map((nota) => (
                <tr key={nota.id}>
                  <td style={styles.td}>{nota.nome}</td>

                  <td style={styles.td}>{nota.t1}</td>

                  <td style={styles.td}>{nota.t2}</td>

                  <td style={styles.td}>{nota.n1}</td>

                  <td style={styles.td}>{nota.n2}</td>

                  <td style={styles.td}>{nota.n3}</td>

                  <td style={styles.td}>
                    <button
                      style={styles.editar}
                      onClick={() => editarNota(nota)}
                    >
                      Editar
                    </button>

                    <button
                      style={styles.deletar}
                      onClick={() => deletarNota(nota.id)}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* FORMULÁRIO DE ADICIONAR */}

          {adicionando && (
            <div style={styles.edicao}>
              <h3 style={styles.edicaoTitulo}>Adicionar notas</h3>

              <label style={styles.label}>Nome aluno:</label>

              <input
                style={styles.input}
                type="text"
                placeholder="Digite o nome do aluno"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />

              <label style={styles.label}>T1:</label>

              <input
                style={styles.input}
                type="number"
                min="0"
                max="10"
                value={t1}
                onChange={(e) => setT1(e.target.value)}
              />

              <label style={styles.label}>T2:</label>

              <input
                style={styles.input}
                type="number"
                min="0"
                max="10"
                value={t2}
                onChange={(e) => setT2(e.target.value)}
              />

              <label style={styles.label}>N1:</label>

              <input
                style={styles.input}
                type="number"
                min="0"
                max="10"
                value={n1}
                onChange={(e) => setN1(e.target.value)}
              />

              <label style={styles.label}>N2:</label>

              <input
                style={styles.input}
                type="number"
                min="0"
                max="10"
                value={n2}
                onChange={(e) => setN2(e.target.value)}
              />

              <label style={styles.label}>N3:</label>

              <input
                style={styles.input}
                type="number"
                min="0"
                max="10"
                value={n3}
                onChange={(e) => setN3(e.target.value)}
              />

              <div style={styles.botoes}>
                <button style={styles.salvar} onClick={adicionarNota}>
                  Adicionar
                </button>

                <button
                  style={styles.cancelar}
                  onClick={() => {
                    setAdicionando(false);
                    limparFormulario();
                  }}
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}

          {/* ÁREA DE EDIÇÃO */}

          {editando !== null && (
            <div style={styles.edicao}>
              <h3 style={styles.edicaoTitulo}>Editar notas</h3>

              <label style={styles.label}>Nome aluno:</label>

              <input
                style={styles.input}
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />

              <label style={styles.label}>T1:</label>

              <input
                style={styles.input}
                type="number"
                min="0"
                max="10"
                value={t1}
                onChange={(e) => setT1(e.target.value)}
              />

              <label style={styles.label}>T2:</label>

              <input
                style={styles.input}
                type="number"
                min="0"
                max="10"
                value={t2}
                onChange={(e) => setT2(e.target.value)}
              />

              <label style={styles.label}>N1:</label>

              <input
                style={styles.input}
                type="number"
                min="0"
                max="10"
                value={n1}
                onChange={(e) => setN1(e.target.value)}
              />

              <label style={styles.label}>N2:</label>

              <input
                style={styles.input}
                type="number"
                min="0"
                max="10"
                value={n2}
                onChange={(e) => setN2(e.target.value)}
              />

              <label style={styles.label}>N3:</label>

              <input
                style={styles.input}
                type="number"
                min="0"
                max="10"
                value={n3}
                onChange={(e) => setN3(e.target.value)}
              />

              <div style={styles.botoes}>
                <button style={styles.salvar} onClick={salvarEdicao}>
                  Salvar
                </button>

                <button
                  style={styles.cancelar}
                  onClick={() => {
                    setEditando(null);
                    limparFormulario();
                  }}
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

const styles = {
  main: {
    backgroundColor: "#f5f5f5",
    minHeight: "calc(100vh - 120px)",
    padding: "40px",
    fontFamily: "Arial",
  },

  caixa: {
    backgroundColor: "white",
    maxWidth: "1100px",
    margin: "auto",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px #ccc",
  },

  cabecalho: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "25px",
  },

  titulo: {
    color: "#333",
    marginBottom: "5px",
  },

  subtitulo: {
    color: "#777",
    marginBottom: "0",
  },

  adicionar: {
    backgroundColor: "#e30613",
    color: "white",
    border: "none",
    padding: "12px 18px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
  },

  tabela: {
    width: "100%",
    borderCollapse: "collapse",
  },

  th: {
    backgroundColor: "#e30613",
    color: "white",
    padding: "12px",
    textAlign: "left",
  },

  td: {
    padding: "12px",
    borderBottom: "1px solid #ddd",
    color: "#333",
  },

  editar: {
    backgroundColor: "#ddd",
    color: "#333",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    marginRight: "5px",
    cursor: "pointer",
  },

  deletar: {
    backgroundColor: "#e30613",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },

  edicao: {
    marginTop: "30px",
    padding: "25px",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },

  edicaoTitulo: {
    color: "#333",
    marginBottom: "20px",
  },

  label: {
    display: "block",
    marginTop: "12px",
    marginBottom: "5px",
    color: "#333",
    fontWeight: "bold",
  },

  input: {
    width: "100%",
    padding: "10px",
    boxSizing: "border-box",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
  },

  botoes: {
    marginTop: "20px",
  },

  salvar: {
    backgroundColor: "#e30613",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
  },

  cancelar: {
    backgroundColor: "#777",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
