const Image = require('../../assets/dind_empty.png')

function inserImg() {
    let body = document.getElementsByTagName('body')[0]
    let img = document.createElement('img');
    img.src = Image.default
    body.append(img)
}
inserImg()


module.exports = {
    Image

}