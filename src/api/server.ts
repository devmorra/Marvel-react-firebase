let token = `2c7321682fabb88c460eecdbe820c2b6052440c935f08ffa`;

export const serverCalls = {
    get: async () =>{
        const response = await fetch(`https://hero-site-ct.herokuapp.com/api/heroes`,
        {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            console.log(response)
            throw new Error("Failed to fetch data from server")
        }
        return await response.json();
    },
    create: async(data: any = {}) => {
        console.log(data)
        const response = await fetch(`https://hero-site-ct.herokuapp.com/api/heroes`,{
            method: 'POST',
            mode: 'cors',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            console.log(response)
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://hero-site-ct.herokuapp.com/api/heroes/${id}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            console.log(response)
            throw new Error('Failed to UPDATE hero on server')
        }

        return await response.json()
    },
    delete: async(id:string) => {
        const response = await fetch(`https://hero-site-ct.herokuapp.com/api/heroes/${id}`,{
            method: 'DELETE',
            mode: 'cors',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if(!response.ok){
            console.log(response)
            throw new Error('Failed to DELETE hero on server')
        }

        return await response.json()
    }
}
