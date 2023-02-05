class Processor{

    static Process(data) {
        let rows = [];
        let atts = [];
        let userArr = data.split('\r\n')
        
        userArr.forEach(row => {

            let arr = row.split(';')
            rows.push(arr)   
        });

        return rows;
    }

}

module.exports = Processor;