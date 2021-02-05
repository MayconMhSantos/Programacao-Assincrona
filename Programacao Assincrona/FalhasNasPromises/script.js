let p = Promise.resolve(new Error('nao deu certo'));

console.log('lalala')

p.then((value) => console.log(value)
.catch(reason => console.log('falhou:' + reason)));  // reason << razao do codigo...  catch << pegar ele pega o erro da proveses