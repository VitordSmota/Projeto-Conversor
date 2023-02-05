const pfd = require('html-pdf')
class PDFWriter{

    static WritePDF(filename, html) {
        pfd.create(html,{}).toFile(filename, (err)=>{})
    }
}

module.exports = PDFWriter