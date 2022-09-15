const url = "https://electroroliing.herokuapp.com/api";

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
  console.log(data);
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

//Agregar un producto
export const postProductos = async (datos) => {
  const resp = await fetch(`${url}/productos`, {
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

//Modificar un producto
export const putProductos = async (datos) => {
  const resp = await fetch(`${url}/productos/${datos.id}`, {
    method: "PUT",
    body: JSON.stringify(datos),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": JSON.parse(localStorage.getItem("token")),
    },
  });

  const data = await resp.json();

  return data;
};

//Traer productos
export const getProduct = async (registro = 0, limite, reverse = false) => {
  const resp = await fetch(
    `${url}/productos?desde=${registro}&limite=${limite}&reverse=${reverse}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": JSON.parse(localStorage.getItem("token")),
      },
    }
  );
  const data = await resp.json();
  console.log(data);
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
  console.log(data);
  return data;
};

//Traer un producto por su id
export const getProductById = async (id) => {
  try {
    const resp = await fetch(`${url}/productos/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": JSON.parse(localStorage.getItem("token")),
      },
    });
    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

//Busqueda de producto x nombre
export const buscarProducto = async (termino, registro = 0, limite = 15) => {
  const resp = await fetch(
    `${url}/search?search=${termino}&desde=${registro}&limite=${limite}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": JSON.parse(localStorage.getItem("token")),
      },
    }
  );

  const data = await resp.json();
  return data;
};

//Busqueda de producto x categoria
export const buscarProductoCategoria = async (
  termino,
  registro = 0,
  limite = 15
) => {
  const resp = await fetch(
    `${url}/category?search=${termino}&desde=${registro}&limite=${limite}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": JSON.parse(localStorage.getItem("token")),
      },
    }
  );

  const data = await resp.json();
  return data;
};

//Get de compras
export const getProdCarrito = async () => {
  const resp = await fetch(`${url}/compras`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": JSON.parse(localStorage.getItem("token")),
    },
  });

  const data = await resp.json();
  console.log(data);
  return data;
};

//eliminar producto
export const deleteProduct = async (id) => {
  const resp = await fetch(`${url}/productos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": JSON.parse(localStorage.getItem("token")),
    },
  });
  const data = await resp.json();

  return data;
};

//Agregar una compra
export const postCompras = async (datos) => {
  const resp = await fetch(`${url}/compras`, {
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

//Traer todos las compras
export const getPurchase = async () => {
  const resp = await fetch(`${url}/compras`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": JSON.parse(localStorage.getItem("token")),
    },
  });
  const data = await resp.json();
  console.log(data);
  return data;
};
