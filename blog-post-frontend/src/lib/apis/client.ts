import { API_CONFIG } from "./config.js";

export class ApiError extends Error{
    constructor(public status:number,message:string){
        super(message);
        this.name="ApiError";
    }
}

export async function apiClient<T>(endpoint:string,options:RequestInit):Promise<T>{
    const url=`${API_CONFIG.BASE_URL}/api/${endpoint}`;
    const config:RequestInit={
        ...options,
        headers:{
            ...API_CONFIG.HEADERS,
            ...options?.headers
        },        
    }

    const response=await fetch(url,config);

    if(!response.ok){
        throw new ApiError(
            response.status,
            `API ERROR:${response.statusText}`
        )
    }
    return response.json();
}