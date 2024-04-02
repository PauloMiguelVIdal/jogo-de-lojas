import React, { useState, createContext} from 'react';

const CentraldeDadosContext = createContext();

const CentraldeDadosProvider = ({ children }) => {
  const [dadosSaldo, setDadosSaldo] = useState(120000);
  const [dadosDia, setDadosDia] = useState(1);
  const [dadosTerrenos, setDadosTerrenos] = useState(0);
  const [dadosPreçosTerrenos, setDadosPreçoTerrenos] = useState(70000);
  const [dadosPreçosConstruçãoLojaP, setDadosPreçoConstruçãoLojasP] = useState(50000);
  const [dadosPreçosConstruçãoLojaM, setDadosPreçoConstruçãoLojasM] = useState(100000);
  const [dadosPreçosConstruçãoLojaG, setDadosPreçoConstruçãoLojasG] = useState(240000);
  const [dadosLojasP, setDadosLojasP] = useState(0);
  const [dadosLojasM, setDadosLojasM] = useState(0);
  const [dadosLojasG, setDadosLojasG] = useState(0);
  const [dadosFaturamentoLojasP, setDadosFaturamentoLojasP] = useState(0);
  const [dadosFaturamentoMínimoLojasP, setDadosFaturamentoMínimoLojasP] = useState(800);
  const [dadosFaturamentoMáximoLojasP, setDadosFaturamentoMáximoLojasP] = useState(1400);
  const [dadosFaturamentoLojasM, setDadosFaturamentoLojasM] = useState(0);
  const [dadosFaturamentoMínimoLojasM, setDadosFaturamentoMínimoLojasM] = useState(2000);
  const [dadosFaturamentoMáximoLojasM, setDadosFaturamentoMáximoLojasM] = useState(4500);
  const [dadosFaturamentoLojasG, setDadosFaturamentoLojasG] = useState(0);
  const [dadosFaturamentoMínimoLojasG, setDadosFaturamentoMínimoLojasG] = useState(5000);
  const [dadosFaturamentoMáximoLojasG, setDadosFaturamentoMáximoLojasG] = useState(12000);
  const [dadosDespesasLojasP, setDadosDespesasLojasP] = useState(0);
  const [dadosDespesasLojasM, setDadosDespesasLojasM] = useState(0);
  const [dadosDespesasLojasG, setDadosDespesasLojasG] = useState(0);
  const [dadosDiaPagarDespesas, setDiaDePagarDespesas] = useState(false);
  const [dadosDespesasPagas, setDespesasPagas] = useState(false);
  const [dadosCustoFuncionário,setDadosCustoFuncionário] = useState("")
  const [dadosCustoMínimoFuncionário, setDadosCustoMínimoFuncionário] = useState(8)
  const [dadosCustoMáximoFuncionário, setDadosCustoMáximoFuncionário] = useState(12)
  









  const AtualizarDadosSaldo = novoSaldo =>{
    setDadosSaldo(novoSaldo)
  }
  const AtualizarDadosDia = novoDia =>{
    setDadosDia(novoDia)
  }
  const AtualizarDadosPreçosTerrenos = novoPreçoTerreno =>{
    setDadosPreçoTerrenos(novoPreçoTerreno)
  }
  const AtualizarDadosPreçoConstruçãoLojasP = novoPreçoConstruçãoLojasP =>{
    setDadosPreçoConstruçãoLojasP(novoPreçoConstruçãoLojasP)
  }
  const AtualizarDadosPreçoConstruçãoLojasM = novoPreçoConstruçãoLojasM =>{
    setDadosPreçoConstruçãoLojasM(novoPreçoConstruçãoLojasM)
  }
  const AtualizarDadosPreçoConstruçãoLojasG = novoPreçoConstruçãoLojasG =>{
    setDadosPreçoConstruçãoLojasG(novoPreçoConstruçãoLojasG)
  }
  
  
  
  const AtualizarDadosTerrenos = novoTerreno =>{
    setDadosTerrenos(novoTerreno)
  }
  const AtualizarDadosLojasP = novaLojaP =>{
    setDadosLojasP(novaLojaP)
  }
  const AtualizarDadosDespesasLojasP = novaDespesaLojaP =>{
    setDadosDespesasLojasP(novaDespesaLojaP)
  }
  const AtualizarDadosDespesasLojasM = novaDespesaLojaM =>{
    setDadosDespesasLojasM(novaDespesaLojaM)
  }
  const AtualizarDadosDespesasLojasG = novaDespesaLojaG =>{
    setDadosDespesasLojasG(novaDespesaLojaG)
  }
  const AtualizarDadosFaturamentoLojasP = novoFaturamentoLojaP =>{
    setDadosFaturamentoLojasP(novoFaturamentoLojaP)
  }
  const AtualizarDadosFaturamentoMínimoLojasP = novoFaturamentoMínimoLojasP =>{
    setDadosFaturamentoMínimoLojasP(novoFaturamentoMínimoLojasP)
  }
  const AtualizarDadosFaturamentoMáximoLojasP = novoFaturamentoMáximoLojasP =>{
    setDadosFaturamentoMáximoLojasP(novoFaturamentoMáximoLojasP)
  }

  const AtualizarDadosFaturamentoMínimoLojasM = novoFaturamentoMínimoLojasM =>{
    setDadosFaturamentoMínimoLojasM(novoFaturamentoMínimoLojasM)
  }
  const AtualizarDadosFaturamentoMáximoLojasM = novoFaturamentoMáximoLojasM =>{
    setDadosFaturamentoMáximoLojasP(novoFaturamentoMáximoLojasM)
  }

  const AtualizarDadosFaturamentoMínimoLojasG = novoFaturamentoMínimoLojasG =>{
    setDadosFaturamentoMínimoLojasG(novoFaturamentoMínimoLojasG)
  }
  const AtualizarDadosFaturamentoMáximoLojasG = novoFaturamentoMáximoLojasG =>{
    setDadosFaturamentoMáximoLojasG(novoFaturamentoMáximoLojasG)
  }

  const AtualizarDadosLojasM = novaLojaM =>{
    setDadosLojasM(novaLojaM)
  }
  const AtualizarDadosFaturamentoLojasM = novoFaturamentoLojaM =>{
    setDadosFaturamentoLojasM(novoFaturamentoLojaM)
  }

  const AtualizarDadosLojasG = novaLojaG =>{
    setDadosLojasG(novaLojaG)
  }
  const AtualizarDadosFaturamentoLojasG = novoFaturamentoLojaG =>{
    setDadosFaturamentoLojasG(novoFaturamentoLojaG)
  }
  const AtualizarDadosDiaPagarDespesas = novoDiaPagamentoDespesas =>{
    setDiaDePagarDespesas(novoDiaPagamentoDespesas)
  }
  const AtualizarDespesasPagas = novoPagamentoDespesas =>{
    setDespesasPagas(novoPagamentoDespesas)
  }
  const AtualizarDadosCustoMínimoFuncionário = novoCustoMínimoFuncionário =>{
    setDadosCustoMínimoFuncionário(novoCustoMínimoFuncionário)
  }
  const AtualizarDadosCustoMáximoFuncionário = novoCustoMáximoFuncionário =>{
    setDadosCustoMáximoFuncionário(novoCustoMáximoFuncionário)
  }

  const AtualizarDadosCustoFuncionário = novoCustoFuncionário =>{
    setDadosCustoFuncionário(novoCustoFuncionário)
  }
  




  return (
    <CentraldeDadosContext.Provider value={{
      dadosSaldo,
      AtualizarDadosSaldo,
      dadosDia,
      AtualizarDadosDia,
      dadosLojasP,
      AtualizarDadosLojasP,
      dadosDespesasLojasP,
      AtualizarDadosDespesasLojasP,
      dadosDespesasLojasM,
      AtualizarDadosDespesasLojasM,
      dadosDespesasLojasG,
      AtualizarDadosDespesasLojasG,
      dadosLojasM,
      AtualizarDadosLojasM,
      dadosLojasG,
      AtualizarDadosLojasG,
      dadosDiaPagarDespesas,
      AtualizarDadosDiaPagarDespesas,
      dadosDespesasPagas,
      AtualizarDespesasPagas,
      dadosTerrenos,AtualizarDadosTerrenos,
      dadosPreçosTerrenos,AtualizarDadosPreçosTerrenos,
      dadosPreçosConstruçãoLojaP,AtualizarDadosPreçoConstruçãoLojasP,
      dadosPreçosConstruçãoLojaM,AtualizarDadosPreçoConstruçãoLojasM,
      dadosPreçosConstruçãoLojaG,AtualizarDadosPreçoConstruçãoLojasG,
      dadosCustoMáximoFuncionário,AtualizarDadosCustoMáximoFuncionário,
      dadosCustoMínimoFuncionário,AtualizarDadosCustoMínimoFuncionário,
      dadosCustoFuncionário,AtualizarDadosCustoFuncionário,
      dadosFaturamentoMínimoLojasP,AtualizarDadosFaturamentoMínimoLojasP,
      dadosFaturamentoMáximoLojasP,AtualizarDadosFaturamentoMáximoLojasP,
      dadosFaturamentoLojasP,AtualizarDadosFaturamentoLojasP,
      dadosFaturamentoMínimoLojasM,AtualizarDadosFaturamentoMínimoLojasM,
      dadosFaturamentoMáximoLojasM,AtualizarDadosFaturamentoMáximoLojasM,
      dadosFaturamentoLojasM,AtualizarDadosFaturamentoLojasM,
      dadosFaturamentoMínimoLojasG,AtualizarDadosFaturamentoMínimoLojasG,
      dadosFaturamentoMáximoLojasG,AtualizarDadosFaturamentoMáximoLojasG,
      dadosFaturamentoLojasG,AtualizarDadosFaturamentoLojasG,
      
    }}>
      {children}
    </CentraldeDadosContext.Provider>
  );
};

export { CentraldeDadosContext, CentraldeDadosProvider };