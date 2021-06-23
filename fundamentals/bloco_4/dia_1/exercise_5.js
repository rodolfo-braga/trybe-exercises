let angle1 = 60;
let angle2 = 60;
let angle3 = -40;

let anglesAreValid = angle1 > 0 && angle2 > 0 && angle3 >0

let anglesSum = angle1 + angle2 + angle3

if (anglesAreValid) {
    if (anglesSum === 180) {
    console.log(true);
    } else {
    console.log(false);
    }
} else {
    console.log("Erro: ângulo inválido!")
}