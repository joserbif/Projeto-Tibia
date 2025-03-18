function calcularTotalManaPotions() {
    let produto = document.getElementById("manaPotions");
    let quantidade = document.getElementById("quantidadeManaP").value;
    let precoUnitario = produto.value;
    let total = precoUnitario * quantidade;

    document.getElementById("calcularTotalManaPotions").textContent = total.toFixed(2);
}

document.getElementById("manaPotions").addEventListener("change", calcularTotalManaPotions);
document.getElementById("quantidadeManaP").addEventListener("input", calcularTotalManaPotions);


// CALCULO MANA POTIONS ACIMA



function calcularTotalHealthPotions() {
    let produto = document.getElementById("healthPotions");
    let quantidade = document.getElementById("quantidadeHealthP").value;
    let precoUnitario = produto.value; // Corrigido para usar precoUnitario
    let total = precoUnitario * quantidade; // Corrigido para usar as variáveis corretas

    document.getElementById("calcularTotalHealthPotions").textContent = total.toFixed(2);
}

document.getElementById("healthPotions").addEventListener("change", calcularTotalHealthPotions);
document.getElementById("quantidadeHealthP").addEventListener("input", calcularTotalHealthPotions);

// CALCULO HEALTH POTIONS ACIMA



function calcularRunas() {
    let produto = document.getElementById("runas");
    let quantidade = document.getElementById("quantidadeRunas").value;
    let precoUnitario = produto.value; // Corrigido para usar precoUnitario
    let total = precoUnitario * quantidade; // Corrigido para usar as variáveis corretas

    document.getElementById("calcularRunas").textContent = total.toFixed(2);
}

document.getElementById("runas").addEventListener("change", calcularRunas);
document.getElementById("quantidadeRunas").addEventListener("input", calcularRunas);


// CALCULO RUNAS ACIMA



// FUNÇÃO DE RESULTADO E MODAL

function calcularSaldo() {
    
    let loot = parseFloat(document.getElementById("loot").value) || 0;
    
    let manaPotions = parseFloat(document.getElementById("calcularTotalManaPotions").textContent) || 0;
    let healthPotions = parseFloat(document.getElementById("calcularTotalHealthPotions").textContent) || 0;
    let runas = parseFloat(document.getElementById("calcularRunas").textContent) || 0;

    
    let saldo = loot - (manaPotions + healthPotions + runas);

    
    let modal = document.getElementById("resultadoModal");
    let resultadoTexto = document.getElementById("resultadoTexto");

    
    if (saldo >= 0) {
        resultadoTexto.innerHTML = `✅ Lucro: ${saldo.toFixed(0)} K`;
        
    } else {
        resultadoTexto.innerHTML = `❌ Prejuízo: ${Math.abs(saldo).toFixed(0)} K`;
    }

 
    modal.style.display = "flex";
}

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("resultadoModal").style.display = "none";
});

window.onclick = function(event) {
    let modal = document.getElementById("resultadoModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

document.querySelector("input[type='submit']").addEventListener("click", function(event) {
    
    calcularSaldo();
});