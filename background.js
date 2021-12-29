const image = [
    '0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg'
]
/*
for(let i=0; i<8; i++)
*/
const random = Math.floor(Math.random()*image.length)
console.log(image[random])


const imgElement = document.createElement('img')   //이미지라는 태그 생성
console.log(imgElement)
imgElement.src = `./img/${image[random]}`

document.body.appendChild(imgElement)