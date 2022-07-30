import { excelDownloader } from '../libs/excelDownloader';

const data = [
    {
        id: 1,
        title: '2022-07-30',
        content: '날씨 데이터 1'
    }, {
        id: 2,
        title: '2022-07-31',
        content: '날씨 데이터 2'
    }, {
        id: 3,
        title: '2022-08-01',
        content: '날씨 데이터 3'
    }
];

const Download = () => {

  return (
      <div className="flex items-center justify-center fixed w-full h-full">
          <div className="mx-auto max-w-xl">
          <button 
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-xl text-base"
            onClick={() => excelDownloader({ excelData: data, fileSaveName: "sampleExcel", excelColumnNames: ['제목', '내용'] })}
          >
            Excel Download
          </button>
          </div>
      </div>
  );
};

export default Download;