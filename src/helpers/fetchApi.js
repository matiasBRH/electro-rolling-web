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

//REgistrar un usuario
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
export const buscarBlog = async (termino) => {
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

//-------------------------------------------------------------------------------
// export const getPosts = async () => {
//   const resp = await fetch("http://localhost:8080/posts");
//   const data = await resp.json();

//   return data;
// };

// export const getPostById = async (id) => {
//   const resp = await fetch(`http://localhost:8080/posts/${id}`);
//   const data = await resp.json();

//   return data;
// };

// export const addPost = async (datos) => {
//   const resp = await fetch("http://localhost:8080/posts", {
//     method: "POST",
//     body: JSON.stringify(datos),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   });

//   const data = await resp.json();

//   return data;
// };


//Traer 10 productos
export const getProduct = async (registro = 0) => {
    const resp = await fetch(`${url}/productos?desde=${registro}&limite=10`, {
    method: "GET",
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": JSON.parse(localStorage.getItem("token")),
    },
    });
    const data = await resp.json();
    console.log(data)
    return data;
};

//Traer todos los productos
export const getAllProduct = async () => {
    const resp = await fetch(`${url}/productos?limite=200`, {
    method: "GET",
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": JSON.parse(localStorage.getItem("token")),
    },
    });

    const data = await resp.json();
    console.log(data)
    return data;
};

//Traer todos los usuarios
export const getAllUsers = async () => {
    const resp = await fetch(`${url}/usuarios?limite=200`, {
    method: "GET",
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": JSON.parse(localStorage.getItem("token")),
    },
    });
    const data = await resp.json();
    console.log(data)
    return data;
};


//Traer una producto por su id
export const getProductById = async (id) => {
    const resp = await fetch(`${url}/productos/${id}`, {
    method: "GET",
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": JSON.parse(localStorage.getItem("token")),
    },
});

    const data = await resp.json();
    return data;
};

//Busqueda de producto x nombre
export const buscarProducto = async (termino) => {
    const resp = await fetch(`${url}/search?search=${termino}`, {
    method: "GET",
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": JSON.parse(localStorage.getItem("token")),
    },
});

    const data = await resp.json();
    return data;
};

export const getProdCarrito = async () => {
    const resp = await fetch(`${url}/compras`, {
    method: "GET",
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": JSON.parse(localStorage.getItem("token")),
    },
});

    const data = await resp.json();
    console.log(data)
    return data;
};

