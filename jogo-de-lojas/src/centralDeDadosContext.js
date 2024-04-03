import React, { useState, createContext} from 'react';

const CentraldeDadosContext = createContext();

const CentraldeDadosProvider = ({ children }) => {
  const [dadosSaldo, setDadosSaldo] = useState(500000);
  const [dadosDia, setDadosDia] = useState(1);
  const [dadosTerrenos, setDadosTerrenos] = useState(20);
  const [dadosPreçosTerrenos, setDadosPreçoTerrenos] = useState(70000);
  const [dadosPreçosConstruçãoLojaP, setDadosPreçoConstruçãoLojasP] = useState(50000);
  const [dadosPreçosConstruçãoLojaM, setDadosPreçoConstruçãoLojasM] = useState(100000);
  const [dadosPreçosConstruçãoLojaG, setDadosPreçoConstruçãoLojasG] = useState(240000);
  const [dadosLojasP, setDadosLojasP] = useState(0);
  const [dadosLojasM, setDadosLojasM] = useState(0);
  const [dadosLojasG, setDadosLojasG] = useState(0);
  const [dadosFaturamentoUnitárioLojasP, setDadosFaturamentoUnitárioLojasP] = useState(0);
  const [dadosFaturamentoTotalLojasP, setDadosFaturamentoTotalLojasP] = useState(0);
  const [dadosFaturamentoUnitárioLojasM, setDadosFaturamentoUnitárioLojasM] = useState(0);
  const [dadosFaturamentoTotalLojasM, setDadosFaturamentoTotalLojasM] = useState(0);
  const [dadosFaturamentoUnitárioLojasG, setDadosFaturamentoUnitárioLojasG] = useState(0);
  const [dadosFaturamentoTotalLojasG, setDadosFaturamentoTotalLojasG] = useState(0);
  const [dadosFaturamentoMínimoLojasP, setDadosFaturamentoMínimoLojasP] = useState(800);
  const [dadosFaturamentoMáximoLojasP, setDadosFaturamentoMáximoLojasP] = useState(1400);

  const [dadosFaturamentoMínimoLojasM, setDadosFaturamentoMínimoLojasM] = useState(2000);
  const [dadosFaturamentoMáximoLojasM, setDadosFaturamentoMáximoLojasM] = useState(4500);
 
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
 
  const AtualizarDadosFaturamentoUnitárioLojasP = novoFaturamentoUnitárioLojaP =>{
    setDadosFaturamentoUnitárioLojasP(novoFaturamentoUnitárioLojaP)
  }
  const AtualizarDadosFaturamentoTotalLojasP = novoFaturamentoTotalLojaP =>{
    setDadosFaturamentoTotalLojasP(novoFaturamentoTotalLojaP)
  }

  const AtualizarDadosFaturamentoUnitárioLojasM = novoFaturamentoUnitárioLojaM =>{
    setDadosFaturamentoUnitárioLojasM(novoFaturamentoUnitárioLojaM)
  }
  const AtualizarDadosFaturamentoTotalLojasM = novoFaturamentoTotalLojaM =>{
    setDadosFaturamentoTotalLojasM(novoFaturamentoTotalLojaM)
  }

  const AtualizarDadosFaturamentoUnitárioLojasG = novoFaturamentoUnitárioLojaG =>{
    setDadosFaturamentoUnitárioLojasG(novoFaturamentoUnitárioLojaG)
  }
  const AtualizarDadosFaturamentoTotalLojasG = novoFaturamentoTotalLojaG =>{
    setDadosFaturamentoTotalLojasG(novoFaturamentoTotalLojaG)
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

  const AtualizarDadosLojasG = novaLojaG =>{
    setDadosLojasG(novaLojaG)
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
      dadosFaturamentoUnitárioLojasP,AtualizarDadosFaturamentoUnitárioLojasP,
      dadosFaturamentoTotalLojasP,AtualizarDadosFaturamentoTotalLojasP,
      dadosFaturamentoUnitárioLojasM,AtualizarDadosFaturamentoUnitárioLojasM,
      dadosFaturamentoTotalLojasM,AtualizarDadosFaturamentoTotalLojasM,
      dadosFaturamentoUnitárioLojasG,AtualizarDadosFaturamentoUnitárioLojasG,
      dadosFaturamentoTotalLojasG,AtualizarDadosFaturamentoTotalLojasG,
      dadosFaturamentoMínimoLojasM,AtualizarDadosFaturamentoMínimoLojasM,
      dadosFaturamentoMáximoLojasM,AtualizarDadosFaturamentoMáximoLojasM,
      dadosFaturamentoMínimoLojasG,AtualizarDadosFaturamentoMínimoLojasG,
      dadosFaturamentoMáximoLojasG,AtualizarDadosFaturamentoMáximoLojasG,

    }}>
      {children}
    </CentraldeDadosContext.Provider>
  );
};

export { CentraldeDadosContext, CentraldeDadosProvider };