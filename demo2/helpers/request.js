var https =require ("https");

const host = 'graph.microsoft.com';

async function postData(path,token,data,callback){
    const options
     = {
        host: host,
        path: path,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer' + token,
            'Content-Length': data.length
        }
    };
    console.log(options);
    const req = https.request(options,res => {
        let subscriptionData ='';
        res.on('data', chunk =>{subscriptionData += chunk;
        
        res.on('end',()=>{
            console.log(subscriptionData)});
        
        if(res.statusCode === 201) callback(null,JSON.parse(subscriptionData));
        else callback(JSON.parse(subscriptionData),null);
        }
        );
    }
    );

    req.write(data);
    req.end();
    req.on('error',error => callback(error,null));
}


async function getData(path, token, callback) {
    const options = {
      host: host,
      path: path,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json;odata.metadata=minimal;' +
                'odata.streaming=true;IEEE754Compatible=false',
        Authorization: 'Bearer ' + token
      }
    };
  
    const req = https.request(options, res => {
      let endpointData = '';
  
      res.on('data', chunk => (endpointData += chunk));
      res.on('end', () => {
        if (res.statusCode === 200) callback(null, JSON.parse(endpointData));
        else callback(JSON.parse(endpointData), null);
      });
    });
  
    req.write('');
    req.end();
  
    req.on('error', error => callback(error, null));
  }
  


exports.postData = postData;
exports.getData = getData;