import {URL, URL_API} from '../constans/constans'
import axios from 'axios'

class UserAPI {
    async Auntificate(login, password){
        try{
            const {data } = await axios.post(`${URL}/authenticate`,{
                name: login,
                password
            })
            const user = await this.GetUserByJWT(data);
            return user;
        }
        catch(e){
            console.log(e);
        }
    }

    async GetUserByJWT(JWT){
        try{
            const {data:data1} = await axios.get(`${URL_API}/user/jwt/${JWT}`)
            const {data} =data1;
            const {id, role, nickName, password} = data;
            const user = JSON.stringify({id,nickName, role, jwt: JWT});
            return user;
        }
        catch(e){
            console.log(e);
        }

    }

    async Registrate(nickName, email, password){
        try {
            const res = await axios.post(`${URL_API}/user/create`, {
                nickName,
                password: password,
                email: email
            })
            console.log(res)
        }
        catch(e){
            console.log(e);
        }
    }
}

export default new UserAPI();