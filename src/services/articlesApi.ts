import axios from "axios";

const createArticle = async ({
  title,
  tags,
  employeeDescription,
  clientDescription,
}) => {
  const config = {
    withCredentials: true,
  };
  const formData = { title, tags, employeeDescription, clientDescription };
  console.log(formData);
  const { data } = await axios.post(
    "http://localhost:8000/api/articles/create",
    formData,
    config
  );
  return data;
};

const getAllArticles = async (searchParams) => {
  const config = {
    withCredentials: true,
  };

  const queryParams = new URLSearchParams();
  queryParams.append("page", searchParams.page);
  queryParams.append("title", searchParams.title );

  if (searchParams.tags && searchParams.tags.length > 0) {
    searchParams.tags.forEach((tag) => {
      queryParams.append("tags", tag);
    });
  }

  const { data } = await axios.get(
    `http://localhost:8000/api/articles/?${queryParams}`,
    config
  );
  return data;
};

const getArticle = async ({ id }) => {
  const config = {
    withCredentials: true,
  };

  const { data } = await axios.get(
    `http://localhost:8000/api/articles/article/${id}`,
    config
  );
  return data;
};

const incrementArticleViewsCounter = async ({ id }: { id: string }) => {
  const config = {
    withCredentials: true,
  };

  const { data } = await axios.post(
    `http://localhost:8000/api/articles/article/${id}/increment-views`,
    {},
    config
  );
  return data;
};

const getFavouriteArticles = async () => {
  const config = {
    withCredentials: true,
  };

  const { data } = await axios.get(
    `http://localhost:8000/api/articles/favourites`,

    config
  );
  return data;
};


const updateArticle = async ({
  _id,
  title,
  tags,
  employeeDescription,
  clientDescription,
}) => {
  const config = {
    withCredentials: true,
  };
  const formData = { title, tags, employeeDescription, clientDescription };
  console.log(formData);
  const { data } = await axios.put(
    `http://localhost:8000/api/articles/article/edit/${_id}`,
    formData,
    config
  );
  return data;
};

const searchArticlesByFilter = async (searchParams) => {

  const queryParams = new URLSearchParams();

  queryParams.append("title",searchParams.title || "");



  const config = {
    withCredentials: true,
  };

  const { data } = await axios.get(
    `http://localhost:8000/api/articles/search?${queryParams}`, 
    config
  );
  return data;
};


const verifyArticle = async ({ id,isVerified }: { id: string,isVerified:boolean }) => {
  const config = {
    withCredentials: true,
  };

  const { data } = await axios.post(
    `http://localhost:8000/api/articles/article/${id}/verify`,
    {isVerified},
    config
  );
  return data;
};

const markArticleAsFavourite = async ({ id }: { id: string }) => {
  const config = {
    withCredentials: true,
  };

  const { data } = await axios.post(
    `http://localhost:8000/api/articles/article/${id}/add-favourite`,
    {},
    config
  );
  return data;
};


export const articlesApi = {
  createArticle,
  getAllArticles,
  getArticle,
  incrementArticleViewsCounter,
  getFavouriteArticles,
  updateArticle,
  searchArticlesByFilter,
  verifyArticle,
  markArticleAsFavourite
};
