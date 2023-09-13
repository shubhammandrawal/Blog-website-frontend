const BASE_URL = "http://localhost:4000"

export const request = async(url, method, headers = {}, body = {}, isNotSringified = false) => {

let res
let data

switch (method) {
    case 'GET':
        res = await fetch(BASE_URL + url, { headers })
        data = await res.json()
        return data

    case 'POST':
        if(isNotSringified){
            res = await fetch(BASE_URL + url, {headers, method, body})
            data = await res.json()
        }

        else{
            res = await fetch(BASE_URL + url, {headers, method, body: JSON.stringify({...body})})
        }

        return data;

    case 'PUT':
        res = await fetch(BASE_URL + url, { headers, method, body })
        data = await res.json()
        return data

    case 'DELETE':
        res = await fetch(BASE_URL + url, { headers, method })
        data = await res.json()
        return data

    default: 
        return
}

    
}
