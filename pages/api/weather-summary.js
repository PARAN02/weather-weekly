import axios from 'axios';

async function handler(req, res) {

  if (req.method === "GET") { // GET 요청

    const url = 'http://apis.data.go.kr/1360000/MidFcstInfoService/getMidFcst';
    let queryParams = '?' + encodeURIComponent('serviceKey') + '=YcXHWaR%2Fm1qPU%2Ft4CAcBC%2BUFefcSB0bZ4Z5a9oCpe7CBFI9fmPHGcOomKntPFeyUrUmZfxrE4Qeex%2FsU5JoJ2Q%3D%3D';
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10');
    queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON');
    queryParams += '&' + encodeURIComponent('stnId') + '=' + encodeURIComponent('108');
    queryParams += '&' + encodeURIComponent('tmFc') + '=' + encodeURIComponent('202207300600');

    const finalUrl = url + queryParams;

    const response = await axios.get(finalUrl)
    .then((res) => new Promise(resolve => resolve(res?.data?.response?.body?.items?.item?.[0]?.wfSv)))
    .catch((err) => new Promise(reject => reject(err)));

    return res.json(response);
  }
};

export default handler;