import axios from 'axios';


export const fetchCompatability = (name1:string, name2:string) => {
 const options = {
    method: 'GET',
    url: 'https://love-calculator.p.rapidapi.com/getPercentage',
    params: {sname: `${name1}`, fname: `${name2}`},
    headers: {
      'X-RapidAPI-Key': 'ef34f65b76msh256db99cd04d037p16eff3jsn6cd194a360ca',
      'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
    }
  };

  return axios.request(options).then(response => response).catch(error => error);

}
