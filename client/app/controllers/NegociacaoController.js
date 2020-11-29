class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
  }
  adiciona(event) {
    event.preventDefault();

    //let data = this._inputData.value.split('-');
    //let data = this._inputData.value.replace(/-/g, ',');

    // prettier-ignore
    let data = new Date(
      ...this._inputData.value
      .split('-')
      .map(function (item) {
        return item;
      })
    );

    console.log(data);

    let negociacao = new Negociacao(
      new Date(data),
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );

    console.log(negociacao);
  }
}
