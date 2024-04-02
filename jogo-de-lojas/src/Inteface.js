import React, { useContext} from "react";
import { CentraldeDadosContext } from "./centralDeDadosContext";


function Interface(){
    const {
        dadosSaldo,AtualizarDadosSaldo,
        dadosDia,AtualizarDadosDia,
        dadosDiaDePagarDespesas,AtualizarDadosDiaPagarDespesas,
        dadosDespesasPagas,AtualizarDespesasPagas,
        dadosTerrenos,AtualizarDadosTerrenos,
        dadosPreçosTerrenos,AtualizarDadosPreçosTerrenos,
        dadosLojasP,AtualizarDadosLojasP,
        dadosFaturamentoLojasP,AtualizarDadosDespesasLojasP,AtualizarDadosFaturamentoLojasP,dadosDespesasLojasP,
        dadosLojasM,AtualizarDadosLojasM,AtualizarDadosDespesasLojasM,dadosDespesasLojasM,
        dadosFaturamentoLojasM,AtualizarDadosFaturamentoLojasM,
        dadosLojasG,AtualizarDadosLojasG,AtualizarDadosDespesasLojasG,dadosDespesasLojasG,
        dadosFaturamentoLojasG,AtualizarDadosFaturamentoLojasG,
        dadosPreçosConstruçãoLojaP,AtualizarDadosPreçoConstruçãoLojasP,
        dadosPreçosConstruçãoLojaM,AtualizarDadosPreçoConstruçãoLojasM,
        dadosPreçosConstruçãoLojaG,AtualizarDadosPreçoConstruçãoLojasG,
        dadosCustoMáximoFuncionário,AtualizarDadosCustoMáximoFuncionário,
        dadosCustoMínimoFuncionário,AtualizarDadosCustoMínimoFuncionário,
        dadosCustoFuncionário,AtualizarDadosCustoFuncionário
    } = useContext(CentraldeDadosContext)


    const ProximoDia = ()=>{
        if(dadosDia % 30 ===0){
            AtualizarDespesasPagas(false)
        if(dadosDespesasPagas === false){
        return alert("despesas não pagas, pague as despesas para avançar")
        }
    
   }    

     
        
        AtualizarDadosDia(dadosDia + 1)
        AtualizarDadosFaturamentoLojasP(dadosLojasP * 1000)
        AtualizarDadosDespesasLojasP(dadosLojasP * 250)
        AtualizarDadosDespesasLojasM(dadosLojasM * 400)
        AtualizarDadosDespesasLojasG(dadosLojasG * 750)
        AtualizarDadosFaturamentoLojasM(dadosLojasM * 3000)
        AtualizarDadosFaturamentoLojasG(dadosLojasG * 7000)
        AtualizarDadosSaldo(dadosSaldo + dadosFaturamentoLojasP + dadosFaturamentoLojasM + dadosFaturamentoLojasG) 
    }

const mudançasDePreços = ()=>{
    AtualizarDadosPreçosTerrenos(20000)
}

const CustoFunc = (dadosCustoMáximoFuncionário,dadosCustoMínimoFuncionário)=>{
    
}



    const ComprarTerreno = ()=>{
        if(dadosSaldo < dadosPreçosTerrenos){
            alert("você não tem dinheiro suficiente")
        } else{
            AtualizarDadosTerrenos(dadosTerrenos + 1)
            AtualizarDadosSaldo(dadosSaldo - dadosPreçosTerrenos)
        }
    }
    const ComprarLojaP = ()=>{
        if(dadosTerrenos < 1){
            return alert("você não tem terreno suficiente")
        }
        if(dadosSaldo < dadosPreçosConstruçãoLojaP){
            alert("você não tem dinheiro suficiente para construir")
        } else{
            AtualizarDadosLojasP(dadosLojasP + 1)
            AtualizarDadosTerrenos(dadosTerrenos - 1)
            AtualizarDadosSaldo(dadosSaldo - dadosPreçosConstruçãoLojaP)
        }
    }

    const ComprarLojaM = ()=>{
        if(dadosTerrenos < 2){
            return alert("você não tem terrenos suficiente")
        }
        if(dadosSaldo < dadosPreçosConstruçãoLojaM){
            alert("você não tem dinheiro suficiente para construir")
        } else{
            AtualizarDadosLojasM(dadosLojasM + 1)
            AtualizarDadosTerrenos(dadosTerrenos - 2)
            AtualizarDadosSaldo(dadosSaldo - dadosPreçosConstruçãoLojaM)
        }
    }

    const ComprarLojaG = ()=>{
        if(dadosTerrenos < 3){
            return alert("você não tem terrenos suficiente")
        }
        if(dadosSaldo < dadosPreçosConstruçãoLojaG){
            alert("você não tem dinheiro suficiente para construir")
        } else{
            AtualizarDadosLojasG(dadosLojasG + 1)
            AtualizarDadosTerrenos(dadosTerrenos - 3)
            AtualizarDadosSaldo(dadosSaldo - dadosPreçosConstruçãoLojaG)
        }
    }

    const PagarDespesas = ()=>{
        if(dadosDespesasPagas == true){
           return alert("despesas desse mês já forma pagas")
        }
        else{
            AtualizarDadosSaldo( dadosSaldo-dadosDespesasLojasP-dadosDespesasLojasM-dadosDespesasLojasG)
            AtualizarDespesasPagas(true)
            alert("despesas pagas")
            
        }
    }

 let custoFunc

  const teste = ()=>{
     custoFunc = Math.floor(Math.random() * (dadosCustoMáximoFuncionário - dadosCustoMínimoFuncionário + 1)) + dadosCustoMínimoFuncionário
     alert(custoFunc)
    }








    return (
        <div className="w-[100vw] h-[100vh] bg-gradient-to-b from-roxo to-roxoForte grid grid-rows-2 grid-cols-2">
            <div className="grid row-1 cols-1 ">
                <div className="flex flex-col justify-around items-center">

                    <div className="flex justify-evenly items-center w-[250px] h-[30px] rounded-[20px] bg-white box2">

                        <h1 className="fonteLight text-roxo text-[20px]">Dia:</h1>
                        <h1 className="fonteBold text-roxo text-[20px]">{dadosDia}</h1>
                    </div>
                    <div className=" flex justify-evenly">
                        <div className="flex items-center justify-center">
                            <h1>Preço terrenos:{dadosPreçosTerrenos}</h1>
                        </div>
                        <div className="flex items-center justify-center">
                            <h1>Preço construção LojaP:{dadosPreçosConstruçãoLojaP}</h1>
                        </div>
                        <div className="flex items-center justify-center">
                            <h1>Preço construção LojaM:{dadosPreçosConstruçãoLojaM}</h1>
                        </div>
                        <div className="flex items-center justify-center">
                            <h1>Preço construção LojaG:{dadosPreçosConstruçãoLojaG}</h1>
                        </div>
                        <div className="flex items-center justify-center">
                            <h1>Terrenos:{dadosTerrenos}</h1>
                        </div>
                        <div className="flex items-center justify-center">
                            <h1>lojas P:{dadosLojasP}</h1>
                        </div>
                        <div className="flex items-center justify-center">
                            <h1>lojas M:{dadosLojasM}</h1>
                        </div>
                        <div className="flex items-center justify-center">
                            <h1>lojas G:{dadosLojasG}</h1>
                        </div>
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
                    <h1 className="fonteBold text-roxo text-[20px]">{dadosFaturamentoLojasP + dadosFaturamentoLojasM + dadosFaturamentoLojasG}</h1>
                </div>
                <div className="flex justify-evenly items-center w-[250px] h-[30px] rounded-[20px] bg-white box2">
                    <h1 className="fonteLight text-roxo text-[20px]">Despesas do mês Atual:</h1>
                    <h1 className="fonteBold text-roxo text-[20px]">{dadosFaturamentoLojasP + dadosFaturamentoLojasM + dadosFaturamentoLojasG}</h1>
                </div>
               
            </div>


            <div className="grid col-start-1 col-end-3 row-2">
                <div className="flex justify-around">

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
                    <button onClick={teste}>teste</button>
                </div>
            </div>
        </div>
    )

}

export default Interface