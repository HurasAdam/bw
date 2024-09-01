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

export const articlesApi = {
  createArticle,
  getAllArticles,
  getArticle,
  incrementArticleViewsCounter,
  getFavouriteArticles,
};
