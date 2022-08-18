const url = "http://localhost:8080/api";

//traer usuarios
export const validarToken = async () => {
    const resp = await fetch(`${url}/usuarios/validar`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-token": JSON.parse(localStorage.getItem("token")),
        },
    });

    const data = await resp.json();
    return data;
};

//Registrar un usuario
export const postUsuario = async (datos) => {
    const resp = await fetch(`${url}/usuarios`, {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });

    const data = await resp.json();
    return data;
};

//Login de usuario
export const postAuth = async (datos) => {
    const resp = await fetch(`${url}/auth/login`, {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });

    const data = await resp.json();
    return data;
};


//Traer todos los blogs
export const getBlog = async (registro = 0) => {
    const resp = await fetch(`${url}/blogs?desde=${registro}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-token": JSON.parse(localStorage.getItem("token")),
        },
    });

    const data = await resp.json();
    return data;
};


//Traer una entrada de blog por su id
export const getBlogById = async (id) => {
    const resp = await fetch(`${url}/blogs/${id}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-token": JSON.parse(localStorage.getItem("token")),
        },
    });

    const data = await resp.json();
    return data;
};


export const postBlog = async (datos) => {
    const resp = await fetch(`${url}/blogs`, {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-token": JSON.parse(localStorage.getItem("token")),
        },
    });

    const data = await resp.json();
    return data;
};

//Buscar blog por título--------------
export const buscarProducto = async (termino) => {
    const resp = await fetch(`${url}/buscarb?search=${termino}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-token": JSON.parse(localStorage.getItem("token")),
        },
    });

    const data = await resp.json();
    return data;
};