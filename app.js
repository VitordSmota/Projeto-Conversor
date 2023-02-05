const Reader = require('./Reader');
const Writer = require('./Writer');
const Processor = require('./Processor')
const Table = require('./Table')
const HtmlParser = require('./HtmlParser')
const PDFWriter = require('./PDFWriter')

const leitor = new Reader();
const escritor = new Writer();

const main = async ()=> {

    let dados = await leitor.Read('users.csv');
    let dadosProcessados = Processor.Process(dados); 
    let usuarios = new Table(dadosProcessados);

    let html = await HtmlParser.Parse(usuarios)
    
    escritor.Write(Date.now() + '.html', html)
    PDFWriter.WritePDF(Date.now() + ".PDF", html);
}

main()