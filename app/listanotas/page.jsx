"use client";

import { useState } from "react";
import Header from "../components/header";

export default function ListaNotas() {
  const [notas, setNotas] = useState([
    {
      id: 1,
      aluno: "Julia",
      turma: "3º Ano",
      t1: 8,
      t2: 9,
      n1: 7,
      n2: 8,
      n3: 9,
    },
    {
      id: 2,
      aluno: "Rafael",
      turma: "3º Ano",
      t1: 9,
      t2: 8,
      n1: 8,
      n2: 9,
      n3: 10,
    },
    {
      id: 3,
      aluno: "Lucas",
      turma: "3º Ano",
      t1: 7,
      t2: 6,
      n1: 8,
      n2: 7,
      n3: 8,
    },
  ]);

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [aluno, setAluno] = useState("");
  const [turma, setTurma] = useState("");
  const [t1, setT1] = useState("");
  const [t2, setT2] = useState("");
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [n3, setN3] = useState("");

  // Adicionar nova nota
  function adicionarNota(e) {
    e.preventDefault();

    if (!aluno || !turma || !t1 || !t2 || !n1 || !n2 || !n3) {
      alert("Preencha todos os campos!");
      return;
    }

    const novaNota = {
      id: Date.now(),
      aluno: aluno,
      turma: turma,
      t1: Number(t1),
      t2: Number(t2),
      n1: Number(n1),
      n2: Number(n2),
      n3: Number(n3),
    };

    setNotas([...notas, novaNota]);

    limparFormulario();

    setMostrarFormulario(false);
  }

  // Limpar formulário
  function limparFormulario() {
    setAluno("");
    setTurma("");
    setT1("");
    setT2("");
    setN1("");
    setN2("");
    setN3("");
  }

  // Excluir nota
  function excluirNota(id) {
    const confirmar = confirm(
      "Tem certeza que deseja excluir as notas deste aluno?",
    );

    if (confirmar) {
      setNotas(notas.filter((nota) => nota.id !== id));
    }
  }

  return (
    <>
      <Header />

      <main style={styles.main}>
        <div style={styles.container}>
          {/* Título */}
          <div style={styles.topo}>
            <div>
              <h1 style={styles.titulo}>Lista - Notas</h1>

              <p style={styles.subtitulo}>
                Consulte as notas cadastradas dos alunos
              </p>
            </div>

            <button
              style={styles.botaoAdicionar}
              onClick={() => setMostrarFormulario(!mostrarFormulario)}
            >
              + Adicionar Nota
            </button>
          </div>

          {/* Formulário */}
          {mostrarFormulario && (
            <div style={styles.formulario}>
              <h2 style={styles.formTitulo}>Adicionar notas</h2>

              <form onSubmit={adicionarNota}>
                <div style={styles.linha}>
                  <div style={styles.campo}>
                    <label style={styles.label}>Nome do aluno</label>

                    <input
                      style={styles.input}
                      type="text"
                      placeholder="Digite o nome"
                      value={aluno}
                      onChange={(e) => setAluno(e.target.value)}
                    />
                  </div>

                  <div style={styles.campo}>
                    <label style={styles.label}>Turma</label>

                    <input
                      style={styles.input}
                      type="text"
                      placeholder="Ex: 3º Ano"
                      value={turma}
                      onChange={(e) => setTurma(e.target.value)}
                    />
                  </div>
                </div>

                <div style={styles.linha}>
                  <div style={styles.campo}>
                    <label style={styles.label}>T1</label>

                    <input
                      style={styles.input}
                      type="number"
                      min="0"
                      max="10"
                      step="0.1"
                      value={t1}
                      onChange={(e) => setT1(e.target.value)}
                    />
                  </div>

                  <div style={styles.campo}>
                    <label style={styles.label}>T2</label>

                    <input
                      style={styles.input}
                      type="number"
                      min="0"
                      max="10"
                      step="0.1"
                      value={t2}
                      onChange={(e) => setT2(e.target.value)}
                    />
                  </div>

                  <div style={styles.campo}>
                    <label style={styles.label}>N1</label>

                    <input
                      style={styles.input}
                      type="number"
                      min="0"
                      max="10"
                      step="0.1"
                      value={n1}
                      onChange={(e) => setN1(e.target.value)}
                    />
                  </div>

                  <div style={styles.campo}>
                    <label style={styles.label}>N2</label>

                    <input
                      style={styles.input}
                      type="number"
                      min="0"
                      max="10"
                      step="0.1"
                      value={n2}
                      onChange={(e) => setN2(e.target.value)}
                    />
                  </div>

                  <div style={styles.campo}>
                    <label style={styles.label}>N3</label>

                    <input
                      style={styles.input}
                      type="number"
                      min="0"
                      max="10"
                      step="0.1"
                      value={n3}
                      onChange={(e) => setN3(e.target.value)}
                    />
                  </div>
                </div>

                <div style={styles.botoes}>
                  <button type="submit" style={styles.salvar}>
                    Adicionar
                  </button>

                  <button
                    type="button"
                    style={styles.cancelar}
                    onClick={() => {
                      limparFormulario();
                      setMostrarFormulario(false);
                    }}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Tabela */}
          <div style={styles.tabelaContainer}>
            <table style={styles.tabela}>
              <thead>
                <tr>
                  <th style={styles.th}>Aluno</th>
                  <th style={styles.th}>Turma</th>
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
                    <td style={styles.td}>{nota.aluno}</td>

                    <td style={styles.td}>{nota.turma}</td>

                    <td style={styles.td}>{nota.t1}</td>

                    <td style={styles.td}>{nota.t2}</td>

                    <td style={styles.td}>{nota.n1}</td>

                    <td style={styles.td}>{nota.n2}</td>

                    <td style={styles.td}>{nota.n3}</td>

                    <td style={styles.td}>
                      <button style={styles.editar}>Editar</button>

                      <button
                        style={styles.excluir}
                        onClick={() => excluirNota(nota.id)}
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}

const styles = {
  main: {
    backgroundColor: "#ffffff",
    minHeight: "calc(100vh - 190px)",
    padding: "45px 60px",
    fontFamily: "Arial, sans-serif",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },

  topo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },

  titulo: {
    margin: 0,
    color: "#333333",
    fontSize: "28px",
  },

  subtitulo: {
    marginTop: "8px",
    color: "#777777",
    fontSize: "15px",
  },

  botaoAdicionar: {
    backgroundColor: "#e30613",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    padding: "12px 20px",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  formulario: {
    backgroundColor: "#f5f5f5",
    border: "1px solid #dddddd",
    borderRadius: "6px",
    padding: "25px",
    marginBottom: "30px",
  },

  formTitulo: {
    marginTop: 0,
    color: "#333333",
    fontSize: "20px",
  },

  linha: {
    display: "flex",
    gap: "15px",
    marginBottom: "15px",
  },

  campo: {
    flex: 1,
  },

  label: {
    display: "block",
    color: "#333333",
    fontWeight: "bold",
    fontSize: "14px",
    marginBottom: "6px",
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "10px",
    border: "1px solid #cccccc",
    borderRadius: "4px",
    fontSize: "14px",
    outline: "none",
  },

  botoes: {
    marginTop: "20px",
  },

  salvar: {
    backgroundColor: "#e30613",
    color: "#ffffff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
    fontWeight: "bold",
  },

  cancelar: {
    backgroundColor: "#777777",
    color: "#ffffff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },

  tabelaContainer: {
    width: "100%",
    overflowX: "auto",
    border: "1px solid #dddddd",
    borderRadius: "5px",
  },

  tabela: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#ffffff",
  },

  th: {
    backgroundColor: "#e30613",
    color: "#ffffff",
    padding: "13px",
    textAlign: "left",
    fontSize: "14px",
  },

  td: {
    padding: "13px",
    borderBottom: "1px solid #dddddd",
    color: "#333333",
    fontSize: "14px",
  },

  editar: {
    backgroundColor: "#eeeeee",
    color: "#333333",
    border: "1px solid #cccccc",
    padding: "7px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: "5px",
  },

  excluir: {
    backgroundColor: "#e30613",
    color: "#ffffff",
    border: "none",
    padding: "7px 12px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
