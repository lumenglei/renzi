import instance from "./http";

export const login=(params)=>{return instance.post('/sys/login',params)}
