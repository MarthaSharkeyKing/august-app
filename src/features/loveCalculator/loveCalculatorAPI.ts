import axios from 'axios';


export const fetchCompatability = (name1:string, name2:string) => {
 const options = {
    method: 'GET',
    url: 'https://love-calculator.p.rapidapi.com/getPercentage',
    params: {sname: `${name1}`, fname: `${name2}`},
    headers: {
      'X-RapidAPI-Key': 'KEY_GOES_HERE',
      'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
    }
  };

  return axios.request(options).then(response => response).catch(error => error);

}
