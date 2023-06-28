export const serverURL = "http://localhost:1337"

export const setToken = (token) => sessionStorage.setItem("token", token);
export const getToken = () => { return sessionStorage.getItem("token"); }

export const loadImg = (url) => {
    if (url) {
        if (url.startsWith("http")) return url;
        return serverURL + url
    }
    return "https://img0.baidu.com/it/u=1617442815,78917996&fm=253&fmt=auto?w=800&h=800"
}