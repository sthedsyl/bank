export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    validaIdade(dataNascimento);
}

function validaIdade(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    if (dataMais18 > dataAtual) {
        console.log("Você não é maior de idade")
    } else {
        console.log("Você é maior de idade")
    }
}