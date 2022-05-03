import axios from "axios";

export default class PostService{
    static async getAll(){
        return (await axios.get('https://web-is.herokuapp.com/api/v1/article/'));
    }
}