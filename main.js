function CriaCalculadora() {
  window.onload = function () {
    document.querySelector(".display").focus();
  };

  return {
    display: document.querySelector(".display"),

    startCalc() {
      this.clickButtons();
      this.pressEnter();
    },
    pressEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.equalCalc();
        }
      });
    },

    clearDisplay() {
      this.display.value = "";
    },

    delOneStep() {
      this.display.value = this.display.value.slice(0, -1);
    },

    equalCalc() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if (!conta) {
          alert("Conta inválida");

          return;
        }

        this.display.value = conta;
      } catch (e) {
        alert("Conta inválida");

        return;
      }
    },

    clickButtons() {
      /*arrow function não muda o comportamento o this .. que no caso é o criador */
      document.addEventListener("click", (e) => {
        const el = e.target;
        

        if (el.classList.contains("btn-num")) {
          this.btnForDisplay(el.innerText);
          
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay(el.innerText);
          this.display.focus();
          
        }

        if (el.classList.contains("btn-del")) {
          this.delOneStep();
        }

        if (el.classList.contains("btn-eq")) {
          this.equalCalc();
          this.display.focus();
        }

        
      });
    },

    btnForDisplay(valor) {
      this.display.value += valor;
      this.display.focus()
    },
  };
}

const calculadora = CriaCalculadora();
calculadora.startCalc();
