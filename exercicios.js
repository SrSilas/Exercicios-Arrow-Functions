const operacoes = ` 
    <h3>Operações</h3>
    <input type="number" class="inputs" name="num1" id="n1" placeholder="Digite um número">
    <input type="number" class="inputs" name="num2" id="n2" placeholder="Digite um número">
    <input type="button" value="Calcular" id="btn1" class="btnOK">
    `;
        function addButtonOp(){
            const btn = document.getElementById('btn1');
            if(btn){
                btn.addEventListener('click', () => {
                    let numb1 = Number(document.getElementById('n1').value);
                    let numb2 = Number(document.getElementById('n2').value);
                    if(isNaN(numb1) || isNaN(numb2))
                    {
                        alert('Por Favor, preencha os dois números!');
                        return;
                    }
                    if(numb1 === 0 && numb1 === 0)
                    {
                        alert('Por Favor, preencha os dois números!');
                        return;
                    }
                    alert(
                            `Soma: ${numb1 + numb2}\n` + 
                            `Subtração: ${numb1 - numb2}\n`+ 
                            `Multiplicação: ${numb1 * numb2}\n` +
                            `Divisão: ${numb1/numb2}`    
                        );
                });
            }
        };

const notas = `
    <h3>Média</h3>
    <input type="number" class="inputs" name="nota1" id="n1" placeholder="Nota 1">
    <input type="number" class="inputs" name="nota2" id="n2" placeholder="Nota 2">
    <input type="number" class="inputs" name="nota3" id="n3" placeholder="Nota 3">
    <input type="number" class="inputs" name="nota4" id="n4" placeholder="Nota 4">
    <input type="button" value="Calcular" id="btnNota" class="btnOK">
    `;
    function addButtonMed(){
        const btn = document.getElementById('btnNota');
        if(btn){
            btn.addEventListener('click', () => {
                let n1 = Number(document.getElementById('n1').value);
                let n2 = Number(document.getElementById('n2').value);
                let n3 = Number(document.getElementById('n3').value);
                let n4 = Number(document.getElementById('n4').value);

                if(isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4))
                {
                    alert('Por favor, preencha todas as notas!');
                    return;
                }
                let med = (n1 + n2 + n3 + n4) / 4;
                if(med >= 6)
                {
                    alert(`Média Final: ${med}\n` + `Situação: Aprovado`);
                }
                else if(med >=5 && med < 6)
                {
                    alert(`Média Final: ${med}\n` + `Situação: Recuperação`);
                }    
                else
                {
                    alert(`Média Final: ${med}\n` + `Situação: Reprovado`);
                }
            });
        }
    }
    const fibonacci = `
        <h3>Sequencia de Fibonacci</h3>
        <input type="number" class="inputs" name="sequencia" id="nFibo" placeholder="Sequencia Fibonacci">
        <input type="button" value="Calcular" id="btnFibo" class="btnOK">
        `;
        function addButtonFibo(){
            const btn = document.getElementById('btnFibo');
            if(btn){
                btn.addEventListener('click',() => {

                    let n = Number(document.getElementById('nFibo').value);
                    if(isNaN(n))
                        {
                            alert('Por favor, preencha com um número');
                            return;
                        }
                        if(n<= 0)
                        {   
                            alert('Sequencia: []');
                            return;
                        } 
                        if(n === 1)
                        {
                            alert('Sequencia: [0]');
                            return
                        }    
                        if(n === 2)
                        {
                            alert('Sequencia: [0, 1]');
                            return
                        }
                        const sequencia = [0, 1];
                        for(let i = 2; i < n; i++){
                            sequencia.push(sequencia[i - 1] + sequencia[i - 2]);
                        }
                        alert(`Sequencia: ${sequencia}`);
                });
            }
        }
const parImpar = `
    <h3>Par ou impar</h3>
    <input type="number" class="inputs" id="nPar" placeholder="Digite um numero">
    <input type="button" value="Checar" id="btnPar" class="btnOK">
    `;
    function addButtonPar(){
        const btn = document.getElementById('btnPar');
        if(btn){
            btn.addEventListener('click', ()=> {
                let num = Number(document.getElementById('nPar').value);
                if(isNaN(num))
                {
                    alert('Por Favor, preencha com um numero!');
                    return;
                }
                if(num % 2 === 0)
                {
                    alert('O número é par!');
                }
                else{
                    alert('O número é impar!');
                }
            })
        }
    } 
const estacionamento = `
    <h3>Calcular preço do Estacionamento</h3>
    <input type="time" class="inputs" id="hEntrada" placeholder="Horário de entrada">
    <input type="time" class="inputs" id="hSaida" placeholder="Horário de Saída">
    <input type="button" value="Calcular" id="btnPreco" class="btnOK">
    `;
    function addButtonEst(){
        const btn = document.getElementById('btnPreco');
        if(btn){
            btn.addEventListener('click', () =>{
                let horaEntrada = document.getElementById('hEntrada').value;
                let horaSaida = document.getElementById('hSaida').value;
                if(horaEntrada === "" || horaSaida === "")
                {
                    alert('Por Favor, preencha o horário de entrada e de saída!');
                    return;
                }
                let [he,me] = horaEntrada.split(":");
                let [hs,ms] = horaSaida.split(":");
                let resp = (((hs-he)*4) + ((ms - me) * 0.06667));
                let preco = resp.toFixed(2);
                alert(`Valor a pagar: ${preco}`);
            });
        }
    }
const conversor = `
    <h3>Converter Real para Dólar</h3>
    <input type="number" class="inputs" id="Real" placeholder="Valor em reais">
    <input type="button" value="Converter" id="btnConv" class="btnOK">
`;
    function addButtonConverte(){
        const btn = document.getElementById('btnConv');
        if(btn)
        {
            btn.addEventListener('click', () => {
                let real = Number(document.getElementById('Real').value);
                if(!real || real <= 0)
                {
                    alert("Por favor, insira um valor válido em reais.");
                    return;
                }
                async function pegarValorDolar(){
                    try {
                            const response = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
                            const data = await response.json();

                            const valorDolar = parseFloat(data.USDBRL.bid); //pega o valor atual do dolar
                            let valorDolarFormatado = valorDolar.toFixed(2); //limita a duas casa decimais após a virgula
                            console.log(`Valor atual do dólar: R$ ${valorDolarFormatado}`);
                            let valorFinal = (real / valorDolar).toFixed(2);
                            alert(`Valor atual do Dólar: ${valorDolarFormatado}\n` + 
                                    `Valor em reais ${valorFinal}`
                            );
                    }
                    catch (error)
                    {
                        console.log("Não foi possivel buscar o valor do Dólar:", error);
                        alert("Não foi possivel buscar o valor do Dólar, tente novamente mais tarde!");
                    }
                }
                return pegarValorDolar();
            });
        }
    }