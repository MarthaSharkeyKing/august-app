import axios from 'axios';
import {marsRoverApi} from '../../apis'

export const fetchMarsRoverInfo = () => {
  return axios.get(marsRoverApi).then((response) => response).catch(err => err)
}
