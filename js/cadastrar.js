import { mostrarMsg } from "./util.js";
import { cadastrarCozinheira } from "./api.js";

document.getElementById('formCadastrar').addEventListener('submit', async (event) => {
    event.preventDefault;

    const email = document.getElementById('email').valuetrim();
    const senha = document.getElementById('senha').valuetrim();
    const nome = document.getElementById('nome').valuetrim();
    const confirmarSenha = document.getElementById('confirmarSenha').valuetrim();

    if (!email || !senha || !nome || !confirmarSenha) {
        mostrarMsg('Por favor,preencha todos os campos.', "red");
        return;
    }

    if(senha !==confirmarSenha){
        mostrarMsg('As senhas não conferem.', "red");
        return;
    }

    const botao = document.getElementById('cadastrar')
    botao.disabled = true;
    botao.textContent = 'Cadastrando...';
    const { sucesso, msg } = await cadastrarCozinheira(nome,email, senha);

    botao.disabled = false;
    botao.textContent = 'Cadastra-se';

    if (sucesso) {
        mostrarMsg("Cadastro realizado com sucesso!", "green");
        setTimeout(() => {
            window.location.href = "login.html";


        }, 1500);


    } else {
        mostrarMsg(msg , "red")
    }

})