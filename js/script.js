"use strict";
class Produto{
	constructor(codigo,nome,imagem,promocao,preco,desconto){
		this.codigo = codigo;
		this.nome = nome;
		this.imagem = imagem;
		this.promocao = promocao;
		this.preco = preco;
		this.desconto = desconto;
	}
	lista(products){
		var lista = document.getElementById("lista");
		for(var i=0; i < products.length; i++){
			let produto = new Produto(products[i].codigo,products[i].nome,products[i].imagem,products[i].promocao,products[i].preco,products[i].desconto);
			var column, thumbnail, title, image, old_price, price, btn;
			column = document.createElement("div");
			thumbnail = document.createElement("div");
			title = document.createElement("h1");
			image = document.createElement("img");
			old_price = document.createElement("small");
			price = document.createElement("p");
			btn = document.createElement("a");

			column.classList.add("col-xs-12");
			column.classList.add("col-sm-6");
			column.classList.add("col-md-4");
			column.classList.add("col-lg-4");

			thumbnail.classList.add("thumbnail");

			title.classList.add("text-center");

			old_price.classList.add("old-price");

			price.classList.add("price");

			btn.classList.add("btn");
			btn.classList.add("btn-primary");
			btn.innerHTML = "Comprar";

			title.innerHTML = produto.nome;

			image.setAttribute("src",produto.imagem);

			if(produto.promocao == true){
				old_price.innerHTML = "R$ "+ produto.preco;
				price.innerHTML = "R$ "+ (produto.preco - produto.desconto);
			}else{
				old_price.setAttribute("display","none");
				price.innerHTML = "R$ "+ produto.preco;
			}

			thumbnail.appendChild(title);
			thumbnail.appendChild(image);
			thumbnail.appendChild(old_price);
			thumbnail.appendChild(price);
			thumbnail.appendChild(btn);

			column.appendChild(thumbnail);

			lista.appendChild(column);
		}
	}
}

var products = [
	{
		codigo: 1,
		nome: "Sapatênis Puma Preto",
		imagem: "img/01.jpg",
		promocao: true,
		preco: 250.00,
		desconto: 50.00
	},
	{
		codigo: 2,
		nome: "Sapatênis Preto Linha Vermelha",
		imagem: "img/02.jpg",
		promocao: false,
		preco: 250.00,
		desconto: null
	},
	{
		codigo: 3,
		nome: "Sapatênis Bege c/ Branco",
		imagem: "img/03.jpg",
		promocao: false,
		preco: 250.00,
		desconto: null
	},
]

let produto = new Produto();
produto.lista(products);
