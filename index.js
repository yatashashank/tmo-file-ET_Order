// Use this path as a argument while running the sample program './sample.xlsx'
const reader = require('xlsx');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

let data = [];
// let totalQuantity = 0;
let skuArray = []
var args = process.argv.slice(2);
console.log(args);
const csvWriter = createCsvWriter({
    path: 'orders-portal.csv',
    header: [
        {id: 'iccid', title: 'ICCID Number'},
    ]
});

const file = reader.readFile(args[0]);
const sheets = file.SheetNames;

for(let i = 0; i < sheets.length; i++)
    {
        const temp = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]])
        temp.forEach((res) => {
            data.push(res)
        })
    }

for( let i = 0; i<data.length; i++ )
    {
        let totalQuantity = data[1].__EMPTY_18;

        if(i >0 && i < totalQuantity + 1) {
            let iccidObject = {
                iccid : data[i].__EMPTY_20
            }
            skuArray.push(iccidObject);
        }
    }

csvWriter.writeRecords(skuArray)       // returns a promise
    .then(() => {
        console.log('...Done');
    });