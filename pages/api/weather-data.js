import axios from 'axios';

async function handler(req, res) {

  if (req.method === "GET") { 

    const url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst';
    let queryParams = '?' + encodeURIComponent('serviceKey') + '=YcXHWaR%2Fm1qPU%2Ft4CAcBC%2BUFefcSB0bZ4Z5a9oCpe7CBFI9fmPHGcOomKntPFeyUrUmZfxrE4Qeex%2FsU5JoJ2Q%3D%3D'; /* Service Key*/
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1000');
    queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON');
    queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent('20220730'); 
    queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent('0600');
    queryParams += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent('55');
    queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent('127'); 

    const finalUrl = url + queryParams;

    const response = await axios.get(finalUrl)
    .then((res) => new Promise(resolve => resolve(res?.data?.response?.body?.items?.item)))
    .catch((err) => new Promise(reject => reject(err)));

    return res.json(response);
  }
};

export default handler;