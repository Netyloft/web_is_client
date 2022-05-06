import {URL, URL_API} from '../constans/constans'
import axios from 'axios'

class PostAPI {
    async getPostById(id){
        try{
            const {data:data1 } = await axios.get(`${URL_API}/article/${id}`)
            const {data} = data1;
            return data;
        }
        catch(e){
            console.log(e);
        }
    }

    async deletePost(id,user) {
        try{
            const response = await axios.delete(URL_API + `/article/${id}`, {
                headers: { Authorization: `Bearer ${user.jwt}` }
            })
            console.log(response)
        }
        catch(e){
            console.log(e)
        }
    }

    async updatePost(id,info ){
        try{
            const {title,body,user, tags} = info;
            const response = await axios.put(`${URL_API }/article/update/`, {
                id,
                title,
                body,
                authorId: user.id,
                tags
            }, {
                headers: { Authorization: `Bearer ${user.jwt}` }
            })
            console.log(response);
        }
        catch(e){
            console.log(e);
        }
    }
    
   
}

export default new PostAPI();