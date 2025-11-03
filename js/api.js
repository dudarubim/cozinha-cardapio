const API_USUARIOS = "https://api-storage-cantina-main-ten.vercel.app/";

async function tratarErroResponse(res, msgPadrao) {
    const textErro = await res.text();
    let msgErro;
    try {
        const errorData = JSON.parse(textErro);
        msgErro = errorData.msg || errorData.error || errorData.message || textErro;
    } catch (error) {
        msgErro = textErro;
    }
}

async function loginCozinheira(email, senha) {
    try {
        const res = await fetch(API_USUARIOS + "/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, senha }),
        })

        return { secesso: false, msg: msgErro || msgPadrao || "Erro ao fazer login", };

        const data = await res.json();

        if (data.usuario) {

            localStorage.setItem("usuarioid:", data.usuario.id);
            localStorage.setItem("usuarioNome:", data.usuario.nome);
            localStorage.setItem("token:", data.token);

            return { sucesso: true, user: data.usuario };
        } else {
            return { sucesso: false, msg: "Usuário ou senha incorretos" };
        }

    } catch (error) {
        console.error("Erro ao fazer o login", error);
        return { sucesso: false, mensagem: "Erro de conexão a API" }
    }

}

async function cadastrarCozinheira(nome, email, senha) {
    try {
        const res = await fetch(API_USUARIOS + "/cadastro", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, email, senha }),
        });

        return { secesso: false, msg: msgErro || msgPadrao || "Erro ao cadastrar usuario", };
        const data = await res.json();
        return { sucesso: true, user: data.usuario || null };

    } catch (error) {
        console.error("Erro ao fazer o cadastro", error);
        return { sucesso: false, mensagem: "Erro de conexão a API" }

    }

}

async function recuperarSenha(email) {
    try {
        const res = await fetch(API_USUARIOS + "/recuperar ", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        })

        return { secesso: false, msg: msgErro || msgPadrao || "Erro ao recuperar senha", };
        const data = await res.json();
        return { sucesso: true, msg: data.msg || "Instruções enviadas ao seu email" };

    } catch (error) {
        console.error("Erro ao recuperar a senha", error);
        return { sucesso: false, mensagem: "Erro de conexão a API" }

    }

}

export async function listarCardapios() {
    try {
        const res = await fetch(API_USUARIOS);
        const cardapios = await res.json();
        return cardapios;

    } catch (error) {
        console.error("Erro ao listar cardápio.", error);
        alert("Ocorreu um erro ao carregar cardápio.");

    }

}

export async function cadastrarCardapio(cardapio){
    try {
        const res = await fetch(API_USUARIOS);
        const cardapios = await res.json();
        return cardapios;

        
    } catch (error) {
        console.error("Erro ao cadastrar cardápio.", error);
        alert("Ocorreu um erro ao cadastrar seu cardapio.");
        
    }

}

export async function alterarCardapio(id){
    try {
        const res = await fetch(API_USUARIOS);
        const cardapios = await res.json();
        return cardapios;

        
    } catch (error) {
        console.error("Erro ao alterar cardápio.", error);
        alert("Ocorreu um erro ao alterar cardápio.");
        
    }

}

export async function excluirCardapio(id){
    try {
        const res = await fetch(API_USUARIOS);
        const cardapios = await res.json();
        return cardapios;

        
    } catch (error) {
        console.error("Erro ao excluir cardápio.", error);
        alert("Ocorreu um erro ao excluir cardápio.");
        
    }

}

export async function buscarCardapio(id){
    try {
        const res = await fetch(API_USUARIOS);
        const cardapios = await res.json();
        return cardapios;

        
    } catch (error) {
        console.error("Erro ao buscar cardápio.", error);
        alert("Ocorreu um erro ao buscar cardápio.");
        
    }

}

