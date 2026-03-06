import * as fs from 'fs';
import * as xlsx from 'xlsx';

export class ExcelUtil {

    static readExcelToJSON(filepath: string, sheetName: string): any {

        let rowData: Record<string, any>[] = [];

        //Verify whether the file exists. 
        if (!fs.existsSync(filepath)) {
            throw new Error(`File not found at path: ${filepath}`);
        }

        //Read the workbook from the file. 
        const workbook = xlsx.readFile(filepath);

        //Read specific sheet from the workbook. 
        const sheet = workbook.Sheets[sheetName];

        //check whether sheet is available
        if (!sheet) {
            throw new Error('Sheet not available');
        }

        //Convert the data available in the sheet into JSON. 
        rowData = xlsx.utils.sheet_to_json(sheet, { defval: "" });

        return rowData;

    }
    //common method to write data to excel
    static writeJSONToExcel(filepath: string, sheetName: string, data: any[]): void {
        let workbook: xlsx.WorkBook;

        //Verify whether the file exists.
        if (fs.existsSync(filepath)) {
            workbook = xlsx.readFile(filepath);
        } else {
            workbook = xlsx.utils.book_new();
        }

        //Convert the data into a worksheet
        const worksheet = xlsx.utils.json_to_sheet(data);

        //Check if sheet exists and replace, otherwise append
        if (workbook.Sheets[sheetName]) {
            workbook.Sheets[sheetName] = worksheet;
        } else {
            xlsx.utils.book_append_sheet(workbook, worksheet, sheetName);
        }

        //Write the data to the file
        xlsx.writeFile(workbook, filepath);
    }

}