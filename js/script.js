

async function retornaDadosApi(){

    
    const valorCep = document.getElementById('valorCep').value;
    const uf = document.getElementById('uf');
    const cidade = document.getElementById('cidade');
    const bairro = document.getElementById('bairro');
    const logradouro = document.getElementById('logradouro');
    const url = `https://viacep.com.br/ws/${valorCep}/json/`;

    try {
        const response = await fetch(url);

        if (response.status === 200) {
            const obj = await response.json();
            console.log(obj);

            uf.innerHTML = `UF: ${obj.uf}`
            cidade.innerHTML = `Cidade: ${obj.localidade}`;
            bairro.innerHTML = `Bairro: ${obj.bairro}`;
            logradouro.innerHTML = `Logradouro: ${obj.logradouro}`;
        }
        else{
            alert("Erro ao buscar os dados")
        } 
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro: ', error)
    }

}


/*
async function retornaDadosApi(){
    const valorCep = document.getElementById('valorCep').value;
    const cidade = document.getElementById('cidade');
    const url = `https://viacep.com.br/ws/${valorCep}/json/`;  // Construir a URL dinamicamente

    try {
        const response = await fetch(url);

        if (response.status === 200) {
            const obj = await response.json();
            console.log(obj);

            cidade.innerHTML = `Cidade: ${obj.localidade}`;  // Atualizar com a cidade obtida da API
        } else {
            cidade.innerHTML = 'Erro ao buscar dados';  // Mensagem de erro
        }
    } catch (error) {
        console.error('Erro:', error);
        cidade.innerHTML = 'Erro na conexão com a API';  // Mensagem de erro em caso de exceção
    }
}
*/