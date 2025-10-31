import { mostrarMsg } from "./util.js";
import { recuperarSenha } from "./api.js";

document.getElementById('formRecuperar').addEventListener('submit',async(event)=>{
    
     event.preventDefault;

    const email=document.getElementById('email').valuetrim();

    if(!email){
        mostrarMsg('Por favor,verifique email.',red);
        return
    }
    const botao=document.getElementById('recuperar')
    botao.disabled=true;
    botao.textContent='Enviando...';
    const{sucesso,msg,user}=await recuperarSenha(email);

    botao.disabled=false;
    botao.textContent='Recuperar Senha';

    if(sucesso){
        mostrarMsg(msg||`Instruções de recuperação enviadas para seu email,${user.name}`,green);
    }else{
        mostrarMsg(msg||'Nã foi possivel enviar email de recuperação',red);

    }
})