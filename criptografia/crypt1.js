const crypto = require('crypto')
const alg = 'aes-256-ctr'
const pwd = 'abcdabcd'

function crypt(text){
	const cipher = crypto.createCipher(alg, pwd)
	const crypted = cipher.update(text, 'utf8', 'hex')
	return crypted
}

function decrypt(text){
	const decipher = crypto.createDecipher(alg, pwd)
	const plain = decipher.update(text, 'hex', 'utf8')
	return plain
}

nome = 'Fabricio'
nome_cryp = crypt(nome)
nome_decryp = decrypt(nome_cryp)

console.log(nome_cryp)
console.log(nome_decryp)


