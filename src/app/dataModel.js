let videoApi = "http://114.214.80.72:7745/";

function request(_method,_api,_params,_success,_error){
    let options = {
        method : _method,
        body : (_method == "get") ? null :JSON.stringify(_params),
        mode : "cors",
        headers : {
            "Content-Type" : "application/json"
        }
    };
    fetch(_api,options)
        .then(checkStatus)
        .then(function(res){
            return res.json();
        })
        .then((data)=>{
            _success(data);
        }).catch((err)=>{
        _error(err)
    });
}
function checkStatus(response){
    if(response.ok){
        return response;
    }else{
        let error = new Error(response.statusText);
        error.status = response.status;
        error.response = response;
        throw error;
    }
};

let VideoModel = {
    searchVideo : (params,success,error) => {
        request(`get`,`${videoApi}searchVideo?keyword=${params}`,null,success,error)
    }
};
module.exports = {
    VideoModel
}
