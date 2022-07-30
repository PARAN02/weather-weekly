import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

export const excelDownloader = ({ excelData, fileSaveName, excelColumnNames }) => {
    const excelFileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const excelFileExtension = '.xlsx';
    const worksheet = XLSX?.utils?.aoa_to_sheet([ excelColumnNames ]);

    excelData.map((data) => {
      XLSX?.utils?.sheet_add_aoa(
        worksheet,
        [
          [
            data?.title,
            data?.content
          ]
        ],
        { origin: -1 }
      );

      worksheet['!cols'] = [ 
        { wpx: 200 },
        { wpx: 200 }
      ];

      return false;

    });

    const workbook = { 
      Sheets: { data: worksheet }, 
      SheetNames: ['data'] 
    };

    const excelButter = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const excelFile = new Blob([excelButter], { type: excelFileType });
    
    FileSaver.saveAs(excelFile, fileSaveName + excelFileExtension);
};