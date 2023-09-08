class BankAccount {
    constructor() {
      this.saldo = 0;
    }
  
    deposit(amount) {
      // Simulasi operasi asynchronous
      setTimeout(() => {
        this.saldo += amount;
        this.updateSaldo();
      }, 2000); // Menunda eksekusi selama 2 detik
    }
  
    withdraw(amount) {
      // Simulasi operasi asynchronous
      setTimeout(() => {
        if (this.saldo >= amount) {
          this.saldo -= amount;
          this.updateSaldo();
        } else {
          window.alert('Saldo tidak mencukupi');
        }
      }, 2000); // Menunda eksekusi selama 2 detik
    }
  
    updateSaldo() {
      document.getElementById("saldoDisplay").textContent = this.saldo;
    }
  }
  
  // Membuat instance dari BankAccount
  const myAccount = new BankAccount();
  