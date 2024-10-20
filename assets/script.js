const elementoHora = document.getElementById('hora');
const elementoMinutos = document.getElementById('minutos');
const elementoSegundos = document.getElementById('segundos');

const elementoDia = document.getElementById('dia');
const elementoMes = document.getElementById('mes');
const elementoAno = document.getElementById('ano');

function formatar(v) {
    return v < 10 ? '0' + v : v
}

function atualizarRelogio() {
    const agora = new Date();

    const dia = agora.getDate();
    const mes = agora.getMonth();
    const ano = agora.getFullYear();

    elementoDia.textContent = formatar(dia);
    elementoMes.textContent = formatar(mes + 1);
    elementoAno.textContent = ano;

    const hora = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

    elementoHora.textContent = formatar(hora);
    elementoMinutos.textContent = formatar(minutos);
    elementoSegundos.textContent = formatar(segundos);

    const dias = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
    const diaAtual = dias[agora.getDay()];

    dias.forEach(dia => {
        document.getElementById(dia).classList.remove('active');
    });

    document.getElementById(diaAtual).classList.add('active');

}

const corEscolhida = document.getElementById('escolher-cor');

corEscolhida.addEventListener('input', function() {
    const novaCor = corEscolhida.value;
    document.documentElement.style.setProperty('--cor', novaCor);
});

atualizarRelogio();
setInterval(atualizarRelogio, 1000);
