const buttons = document.querySelectorAll(".button"),
    buttonField = document.querySelector(".buttonField");
buttonField.addEventListener('click', showname);

function showname(e) {
    console.log(e.target.textContent);
}

const calculator = {
    operandA: 0,
    operandB: 0,
    operator: '',

    add() {
        return this.operandA + this.operandB;
    },
    subtract() {
        return this.operandA - this.operandB;
    },
    multiply() {
        return this.operandA * this.operandB;
    },
    divide() {
        return this.operandA / this.operandB;
    },
    operate() {
        const result = this[this.operator]();
        this.operandB = 0;
        this.operandA = result;
        return result;
    },
}


/*
function toObject(arr) {
  let rv = {};
  for (let i = 0; i < arr.length; ++i)
    rv[`${arr[i].classList[1]}`] = arr[i];
  return rv;
}
 */