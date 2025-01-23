const operacoes = ` 
    <h3>Operações</h3>
    <input type="number" name="num1" id="n1" placeholder="Digite um número">
    <input type="number" name="num2" id="n2" placeholder="Digite um número">
    <input type="button" value="Calcular" id="btn1">
    `;
        function addButtonEvent(){
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
        }        