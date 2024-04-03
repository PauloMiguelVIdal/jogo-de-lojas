import React, { useContext } from "react";
import { CentraldeDadosContext } from "./centralDeDadosContext";


function Interface() {
    const {
        dadosSaldo, AtualizarDadosSaldo,
        dadosDia, AtualizarDadosDia,
        dadosDiaDePagarDespesas, AtualizarDadosDiaPagarDespesas,
        dadosDespesasPagas, AtualizarDespesasPagas,
        dadosTerrenos, AtualizarDadosTerrenos,
        dadosPreçosTerrenos, AtualizarDadosPreçosTerrenos,
        dadosLojasP, AtualizarDadosLojasP,
        AtualizarDadosDespesasLojasP, dadosDespesasLojasP,
        dadosLojasM, AtualizarDadosLojasM, AtualizarDadosDespesasLojasM, dadosDespesasLojasM,
        dadosLojasG, AtualizarDadosLojasG, AtualizarDadosDespesasLojasG, dadosDespesasLojasG,
        dadosPreçosConstruçãoLojaP, AtualizarDadosPreçoConstruçãoLojasP,
        dadosPreçosConstruçãoLojaM, AtualizarDadosPreçoConstruçãoLojasM,
        dadosPreçosConstruçãoLojaG, AtualizarDadosPreçoConstruçãoLojasG,
        dadosCustoMáximoFuncionário, AtualizarDadosCustoMáximoFuncionário,
        dadosCustoMínimoFuncionário, AtualizarDadosCustoMínimoFuncionário,
        dadosCustoFuncionário, AtualizarDadosCustoFuncionário,
        dadosFaturamentoMínimoLojasP, AtualizarDadosFaturamentoMínimoLojasP,
        dadosFaturamentoMáximoLojasP, AtualizarDadosFaturamentoMáximoLojasP,
        dadosFaturamentoLojasP, AtualizarDadosFaturamentoLojasP,
        dadosFaturamentoUnitárioLojasP,AtualizarDadosFaturamentoUnitárioLojasP,
        dadosFaturamentoTotalLojasP,AtualizarDadosFaturamentoTotalLojasP,
        dadosFaturamentoMínimoLojasM, AtualizarDadosFaturamentoMínimoLojasM,
        dadosFaturamentoMáximoLojasM, AtualizarDadosFaturamentoMáximoLojasM,
        dadosFaturamentoLojasM, AtualizarDadosFaturamentoLojasM,
        dadosFaturamentoMínimoLojasG, AtualizarDadosFaturamentoMínimoLojasG,
        dadosFaturamentoMáximoLojasG, AtualizarDadosFaturamentoMáximoLojasG,
        dadosFaturamentoLojasG, AtualizarDadosFaturamentoLojasG,
        dadosFaturamentoUnitárioLojasM,AtualizarDadosFaturamentoUnitárioLojasM,
        dadosFaturamentoTotalLojasM,AtualizarDadosFaturamentoTotalLojasM,
        dadosFaturamentoUnitárioLojasG,AtualizarDadosFaturamentoUnitárioLojasG,
        dadosFaturamentoTotalLojasG,AtualizarDadosFaturamentoTotalLojasG,

    } = useContext(CentraldeDadosContext)

    let novoCustoFuncionário
    const custoFuncionário = () => {
        novoCustoFuncionário = Math.floor(Math.random() * (dadosCustoMáximoFuncionário - dadosCustoMínimoFuncionário + 1)) + dadosCustoMínimoFuncionário
        AtualizarDadosCustoFuncionário(novoCustoFuncionário)
    }
    
    let novoFatuUnitárioLojaP
    const gerarFaturamentoLojasP = () => {
        novoFatuUnitárioLojaP = Math.floor(Math.random() * (dadosFaturamentoMáximoLojasP - dadosFaturamentoMínimoLojasP + 1)) + dadosFaturamentoMínimoLojasP
        AtualizarDadosFaturamentoUnitárioLojasP(novoFatuUnitárioLojaP)
        // alert(`novo faturamento unitário: ${dadosFaturamentoUnitárioLojasP}`)

    }
    let novoFatuUnitárioLojaM
    const gerarFaturamentoLojasM = () => {
        novoFatuUnitárioLojaM = Math.floor(Math.random() * (dadosFaturamentoMáximoLojasM - dadosFaturamentoMínimoLojasM + 1)) + dadosFaturamentoMínimoLojasM
        AtualizarDadosFaturamentoUnitárioLojasM(novoFatuUnitárioLojaM)
        // alert(`novo faturamento unitário: ${dadosFaturamentoUnitárioLojasM}`)
    }
    let novoFatuUnitárioLojaG
    const gerarFaturamentoLojasG = () => {
        novoFatuUnitárioLojaG = Math.floor(Math.random() * (dadosFaturamentoMáximoLojasG - dadosFaturamentoMínimoLojasG + 1)) + dadosFaturamentoMínimoLojasG
        AtualizarDadosFaturamentoUnitárioLojasG(novoFatuUnitárioLojaG)
        // alert(`novo faturamento unitário: ${dadosFaturamentoUnitárioLojasG}`)
    }

    const ProximoDia = () => {
        if (dadosDia % 30 === 0) {
            AtualizarDespesasPagas(false)
            if (dadosDespesasPagas === false) {
                return alert("despesas não pagas, pague as despesas para avançar")
            }

        }



        AtualizarDadosDia(dadosDia + 1)
        gerarFaturamentoLojasP()
        gerarFaturamentoLojasM()
        gerarFaturamentoLojasG()
        // AtualizarDadosFaturamentoUnitárioLojasP(novoFatuUnitárioLojaP)
        AtualizarDadosFaturamentoTotalLojasP(dadosLojasP * dadosFaturamentoUnitárioLojasP)        
        // AtualizarDadosFaturamentoUnitárioLojasM(novoFatuUnitárioLojaM)
        AtualizarDadosFaturamentoTotalLojasM(dadosLojasM * dadosFaturamentoUnitárioLojasM)        
        // AtualizarDadosFaturamentoUnitárioLojasG(novoFatuUnitárioLojaG)
        AtualizarDadosFaturamentoTotalLojasG(dadosLojasG * dadosFaturamentoUnitárioLojasG)        
        AtualizarDadosDespesasLojasP(dadosLojasP * 250)
        AtualizarDadosDespesasLojasM(dadosLojasM * 400)
        AtualizarDadosDespesasLojasG(dadosLojasG * 750)
        AtualizarDadosSaldo(dadosSaldo + dadosFaturamentoTotalLojasP + dadosFaturamentoTotalLojasM + dadosFaturamentoTotalLojasG)
    }

    const mudançasDePreços = () => {
        AtualizarDadosPreçosTerrenos(20000)
    }


    const ComprarTerreno = () => {
        if (dadosSaldo < dadosPreçosTerrenos) {
            alert("você não tem dinheiro suficiente")
        } else {
            AtualizarDadosTerrenos(dadosTerrenos + 1)
            AtualizarDadosSaldo(dadosSaldo - dadosPreçosTerrenos)
        }
    }
    const ComprarLojaP = () => {
        if (dadosTerrenos < 1) {
            return alert("você não tem terreno suficiente")
        }
        if (dadosSaldo < dadosPreçosConstruçãoLojaP) {
            alert("você não tem dinheiro suficiente para construir")
        } else {
            AtualizarDadosLojasP(dadosLojasP + 1)
            AtualizarDadosTerrenos(dadosTerrenos - 1)
            AtualizarDadosSaldo(dadosSaldo - dadosPreçosConstruçãoLojaP)
        }
    }

    const ComprarLojaM = () => {
        if (dadosTerrenos < 2) {
            return alert("você não tem terrenos suficiente")
        }
        if (dadosSaldo < dadosPreçosConstruçãoLojaM) {
            alert("você não tem dinheiro suficiente para construir")
        } else {
            AtualizarDadosLojasM(dadosLojasM + 1)
            AtualizarDadosTerrenos(dadosTerrenos - 2)
            AtualizarDadosSaldo(dadosSaldo - dadosPreçosConstruçãoLojaM)
        }
    }

    const ComprarLojaG = () => {
        if (dadosTerrenos < 3) {
            return alert("você não tem terrenos suficiente")
        }
        if (dadosSaldo < dadosPreçosConstruçãoLojaG) {
            alert("você não tem dinheiro suficiente para construir")
        } else {
            AtualizarDadosLojasG(dadosLojasG + 1)
            AtualizarDadosTerrenos(dadosTerrenos - 3)
            AtualizarDadosSaldo(dadosSaldo - dadosPreçosConstruçãoLojaG)
        }
    }

    const PagarDespesas = () => {
        if (dadosDespesasPagas == true) {
            return alert("despesas desse mês já forma pagas")
        }
        else {
            AtualizarDadosSaldo(dadosSaldo - dadosDespesasLojasP - dadosDespesasLojasM - dadosDespesasLojasG)
            AtualizarDespesasPagas(true)
            alert("despesas pagas")

        }
    }









    return (
        <div className="w-[100vw] h-[100vh] bg-gradient-to-b from-roxo to-roxoForte grid grid-rows-2 grid-cols-2">
            <div className="grid row-1 cols-1 ">
                <div className="flex flex-col justify-around items-center">

                    <div className="flex justify-evenly items-center w-[250px] h-[30px] rounded-[20px] bg-white box2">

                        <h1 className="fonteLight text-roxo text-[20px]">Dia:</h1>
                        <h1 className="fonteBold text-roxo text-[20px]">{dadosDia}</h1>
                    </div>
                    <div className=" flex flex-col">
            
                            <h1>Preço terrenos:{dadosPreçosTerrenos}</h1>
                        
            
                            <h1>Preço construção LojaP:{dadosPreçosConstruçãoLojaP}</h1>
                        
            
                            <h1>Preço construção LojaM:{dadosPreçosConstruçãoLojaM}</h1>
                        
            
                            <h1>Preço construção LojaG:{dadosPreçosConstruçãoLojaG}</h1>
                        
            
                            <h1>Terrenos:{dadosTerrenos}</h1>
                        
            
                            <h1>lojas P:{dadosLojasP}</h1>
                        
            
                            <h1>lojas M:{dadosLojasM}</h1>
                        
            
                            <h1>lojas G:{dadosLojasG}</h1>
                        
            
                            <h1>custoFuncionário:{dadosCustoFuncionário}</h1>
                        
            
                            <h1>faturamentoUnitárioLojasP:{dadosFaturamentoUnitárioLojasP}</h1>
                        
            
                            <h1>faturamentoTotalLojasP:{dadosFaturamentoTotalLojasP}</h1>
                        
            
                            <h1>faturamentoUnitárioLojasM:{dadosFaturamentoUnitárioLojasM}</h1>
                        
            
                            <h1>faturamentoTotalLojasM:{dadosFaturamentoTotalLojasM}</h1>
                        
            
                            <h1>faturamentoUnitárioLojasG:{dadosFaturamentoUnitárioLojasG}</h1>
                        
            
                            <h1>faturamentoTotalLojasG:{dadosFaturamentoTotalLojasG}</h1>
                        
                    </div>
                </div>
            </div>
            <div className="flex flex-col align-center text-center justify-around">
                <div className="flex justify-evenly items-center w-[250px] h-[30px] rounded-[20px] bg-white box2">
                    <h1 className="fonteLight text-roxo text-[20px]">saldo:</h1>
                    <h1 className="fonteBold text-roxo text-[20px]">{dadosSaldo}</h1>
                </div>
                <div className="flex justify-evenly items-center w-[250px] h-[30px] rounded-[20px] bg-white box2">
                    <h1 className="fonteLight text-roxo text-[20px]">faturamento Atual diário:</h1>
                    <h1 className="fonteBold text-roxo text-[20px]">{dadosFaturamentoTotalLojasP + dadosFaturamentoTotalLojasM + dadosFaturamentoTotalLojasG}</h1>
                </div>
                {/* <div className="flex justify-evenly items-center w-[250px] h-[30px] rounded-[20px] bg-white box2">
                    <h1 className="fonteLight text-roxo text-[20px]">Despesas do mês Atual:</h1>
                    <h1 className="fonteBold text-roxo text-[20px]">{dadosFaturamentoLojasP + dadosFaturamentoLojasM + dadosFaturamentoLojasG}</h1>
                </div> */}

            </div>


            <div className="grid col-start-1 col-end-3 row-2">
                <div className="flex justify-center">

                    <button onClick={ProximoDia}>
                        proximo dia</button>
                    <button onClick={PagarDespesas}> pagar despesas</button>
                </div>
                <div className="flex justify-around">

                    <button onClick={ComprarTerreno}>Comprar Terreno</button>
                    <button onClick={ComprarLojaP}>Comprar Loja Pequena</button>
                    <button onClick={ComprarLojaM}>Comprar Loja Média</button>
                    <button onClick={ComprarLojaG}>Comprar Loja Grande</button>
                    <button onClick={mudançasDePreços}>mudançasDePreços</button>
                    <button onClick={custoFuncionário}>Alteração custo funcionário</button>
                    <button onClick={gerarFaturamentoLojasP}>Alteração Faturamento lojas p</button>
                </div>
            </div>
        </div>
    )

}

export default Interface