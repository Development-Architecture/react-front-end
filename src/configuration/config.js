const base_url = '/';
let backend_url = '';
let img_url = '';

const ENV = process.env.REACT_APP_CURRENT_ENV;
const PATH = process.env.REACT_APP_CURRENT_BASE_URL;

if(PATH){
    backend_url = PATH;
}else{
    if(ENV === 'prod'){
        backend_url = "http://localhost:8000/api/v1";
        img_url = "http://localhost:8000/storage";
    }else if(ENV === 'stage'){
        backend_url = "http://localhost:8000/api/v1";
        img_url = "http://localhost:8000/storage";
    } else if(ENV === 'dev'){
        backend_url = "http://localhost:8000/api/v1";
        img_url = "http://localhost:8000/storage";
    }else {
        backend_url = "http://localhost:8000/api/v1";
        img_url = "http://localhost:8000/storage";
    }
}

export default backend_url;

export { base_url, backend_url, img_url };