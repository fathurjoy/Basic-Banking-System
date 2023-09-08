// Deklarasi variabel saldo dengan nilai awal 0
let saldo = 0;

document.getElementById("saldoDisplay").textContent = saldo;

const updateSaldo = (saldo) => {
  document.getElementById("saldoDisplay").textContent = saldo;
}

// Fungsi untuk menambah saldo
const tambahSaldo = () => {
  let tambahan = prompt ('Masukkan jumlah saldo yang ingin ditambahkan:')
  saldo = saldo + parseInt(tambahan);
  updateSaldo(saldo)
}

// Fungsi untuk mengurangi saldo
const kurangiSaldo = () => {
  let pengurangan = prompt("Masukkan jumlah saldo yang ingin dikurangi:");
  if(saldo < pengurangan) {
    window.alert('Saldo tidak mencukupi')
  } else {
    saldo = saldo - parseInt(pengurangan);
    updateSaldo(saldo)
  }
}
