"use strict";
class CSVWriter {
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(',');
    }
    formatRow(p) {
        return this.columns.map((col) => p[col]).join(',');
    }
    addRows(values) {
        let rows = values.map((v) => this.formatRow(v));
        this.csv += rows.join('\n');
        console.log(this.csv);
    }
}
const writer = new CSVWriter(['id', 'amount', 'to', 'notes']);
writer.addRows([
    {
        id: 1, amount: 50, to: 'yoshi', notes: 'for design work'
    },
    {
        id: 2, amount: 100, to: "mario", notes: "for dev work"
    }
]);
