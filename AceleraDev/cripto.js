const http = require('https')
const sha1 = require('js-sha1')
const fs = require('fs')
const express = require('express')
const app = express()
const url = `https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=5f781c852cd73ce1ecfd6b9f3b144783c6c4decb`
const url_post = `https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=5f781c852cd73ce1ecfd6b9f3b144783c6c4decb`

const getCripto = function () {
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', data => {
                try{
                    resolve(JSON.parse(data))
                }catch(e){
                    reject(e)
                }
            })
        })
    })
}


decrypt = function(text, delta){
    let decrypt_text = ''
    for (var i = 0; i < text.length; i++) {
       let char = text.charAt(i)
       if (!'0123456789,. '.includes(char)){
        charcode = char.toLowerCase().charCodeAt(0)
        number_char = charcode - delta
        if (number_char < 97) number_char = 122 - (97 - number_char) + 1
        decrypt_text += String.fromCharCode(number_char)
       }else {
           decrypt_text+=char
       }
       
      }
      return decrypt_text
}
let json_get

    getCripto().then(data => {
        data.decifrado = decrypt(data.cifrado, data.numero_casas)
        data.resumo_criptografico = sha1(data.decifrado);
        console.log(data)
        json_get = data
        fs.writeFile(__dirname + '/answer.json', JSON.stringify(data), err =>{
            console.log(err || 'Arquivo Salvo! ')
        })
    })

