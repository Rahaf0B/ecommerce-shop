import axios from "axios";
import { error } from "console";

export const getAllProducts = async () => {
  try {
    const response = await axios.get("http://localhost:8000/product/products/");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getNewestProducts = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8000/product/newProducts/"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getProductInfo = async (id, category) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/product/productInfo/${id}/${category}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const RegisterUser = async (username, email, dob, gender, password) => {
  const data = {
    username: username,
    email: email,
    date_of_birth: dob,
    gender: gender,
    password: password,
  };

  try {
    const response = await axios.post(
      `http://localhost:8000/user/createAccount/`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const logInUser = async (email, password) => {
  const data = { email: email, password: password };
  try {
    const response = await axios.post(
      `http://localhost:8000/user/login/`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const logOutUser = async (token) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await axios.get(`http://localhost:8000/user/logout/`, {
      headers,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const addToFavorite = (product_id, token, csrfToken) => {
  try {
    const response = fetch(
      `http://localhost:8000/product/addFavorite/${product_id}/`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken,
        },
      }
    );
    return true;
  } catch (error) {
    console.error("Error fetching products:", error);
    return false;
  }
};

export const removeFromFavorite = async (product_id, token, csrfToken) => {
  try {
    const response = fetch(
      `http://localhost:8000/product/deleteFavoriteProduct/${product_id}/`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken,
        },
      }
    );
    return true;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getFavorite = async (token, csrfToken) => {
  try {
    const response = fetch(`http://localhost:8000/product/getFavorite`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
    });

    return (await response).json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const separateProductCategory = (
  data,
  firstCategorySetter,
  secCategorySetter
) => {
  data.forEach((element) => {
    if (element["product_category"] == "Accessories") {
      firstCategorySetter((prevList) => [...prevList, element]);
    }
    if (element["product_category"] == "Perfume") {
      secCategorySetter((prevList) => [...prevList, element]);
    }
  });
};

export function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
