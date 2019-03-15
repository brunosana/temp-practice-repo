//Node faz cache dos módulos (uma única instancia)
module.exports = {
    valor: 1,
    inc() {
        this.valor ++
    }
}