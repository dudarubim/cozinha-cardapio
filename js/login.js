import { mostrarMsg } from "./util.js";
import { loginCozinheira } from "./api.js";

document.getElementById('formLogin').addEventListener('submit',async(event)=>{
    event.preventDefault;

    const email=document.getElementById('email').valuetrim();
    const senha=document.getElementById('senha').valuetrim();

    if(!email||!senha){
        mostrarMsg('Por favor,verifique email ou senha.',"red");
        return
    }
    const botao=document.getElementById('acessar')
    botao.disabled=true;
    botao.textContent='Carregando...';
    const{sucesso,msg,user}=await loginCozinheira(email,senha);

    botao.disabled=false;
    botao.textContent='Acessar';

    if(sucesso){
        mostrarMsg(`Bem Vindo,${user.name}`,"green");
        setTimeout(()=>{
            window.location.href="sistema.html";
            

        },1500);
    

    }else{
        mostrarMsg(msg||'Falha ao fazer login.Verifique email e senha.');

    }


    
})