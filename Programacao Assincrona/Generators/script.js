function* criandoId(){  // para tornar uma function gerenation use o (*) : function*
    let id = 0;
    while(true){
        yield id++;
    }
}

let criadId = criandoId();

console.log(criadId.next().value);
console.log(criadId.next().value);
console.log(criadId.next().value);
console.log(criadId.next().value);
console.log(criadId.next().value);
console.log(criadId.next().value);
console.log(criadId.next().value);
console.log(criadId.next().value);
console.log(criadId.next().value);
console.log(criadId.next().value);
console.log(criadId.next().value);
console.log(criadId.next().value);
console.log(criadId.next().value);
console.log(criadId.next().value);
console.log(criadId.next().value);
console.log(criadId.next().value);
