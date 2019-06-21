var https =require ("https");

const host = 'graph.microsoft.com';

async function postData(path,token,data){
    const optione = {
        host: host,
        path: path,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer' + token,
            'Content-Length': data.length
        }
    };

    const req = https.request(option,res =>{
        let subscriptionData ='';
        res.on('data', chunk =>{subscriptionData += chunk});
        res.on('end',()=>{

        
        if(res.statusCode === 201) return JSON.parse(subscriptionData);
        else return null;
        }
        );
    }
    );
}
exports.postData = postData;