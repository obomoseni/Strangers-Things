export const BASE_URL = "https://strangers-things.herokuapp.com/api/";
export const COHORT_NAME = "2206-FTB-ET-WEB-FT-B";
export const API_URL = BASE_URL + COHORT_NAME;

export const getAllPosts = async () => {
    try {

        const response = await fetch(`${API_URL}/posts`);
        const result = await response.json();
        return result.data.posts;
    } catch (error) {
        console.error(error);
    }
}

export const addPosts = async (data) => {
    try {
        console.log(data);
        const response = await fetch(`${API_URL}/posts`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                post: {
                    title: data.title,
                    description: data.description,
                    price: data.price
                }
            }),
        }) 
        const result = await response.json();
        console.log('This is my result', result);
        
    } catch (error) {
       console.error(error) 
    }

}

export const deletePosts = async (POST_ID) => {
    try {
        const response = await fetch(`${API_URL}/posts/${POST_ID}`,{
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        console.log(response)
        
    } catch (error) {
       console.error(error) 
    }
}

export const userFunc = async () => {
    try {
        const response = await fetch(`${API_URL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        })
        const result = await response.json();
        console.log('This is it', result);
        return result.data;
        
    } catch (error) {
       console.error(error) 
    }
}

export const registerUser = async (user) => {
    try {
        const response = await fetch(`${API_URL}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user
            })
        })
        const result = await response.json();
        console.log('This is my result', result);
        return result.data;

    } catch (error) {
        console.error(error);
    }
} 

export const logInUser = async (user) => {
    try {
        const response = await fetch(`${API_URL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user
            })
        })
        const result = await response.json();
        console.log('This is my result', result);
        return result.data;
        
    } catch (error) {
        console.error(error);
    }
}

export const editPost = async (POST_ID) => {
    try {
        const response = await fetch(`${API_URL}/posts/${POST_ID}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify() 
        });
        console.log('My response', response);
        const result= await response.json();
        console.log('Result I want', result);
        return result.data;
    } catch (error) {
        console.error(error);
    }

}

