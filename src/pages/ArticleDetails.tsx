import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { articlesApi } from "../services/articlesApi";
import { useNavigate, useParams } from "react-router-dom";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaCircleXmark } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa";
import { utils } from "../utils";
import { IoPerson } from "react-icons/io5";
import { AiFillEye } from "react-icons/ai";
import Dropdown from "../components/core/Dropdown";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TiArrowBack } from "react-icons/ti";
import ArticleDetailsSkeleton from "../components/ArticleDetailsSkeleton";
import Collapse from "../components/core/Collapse";

const ArticleDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: article,isLoading,isFetching } = useQuery({
    queryFn: () => {
      return articlesApi.getArticle({ id });
    },
     queryKey:["article"],
    onSuccess: () => {
      mutate({ id });
    },
    refetchOnWindowFocus: false,
  });


  
  const { mutate } = useMutation({
    mutationFn: ({ id }: { id: string | undefined }) => {
      return articlesApi.incrementArticleViewsCounter({ id });
    },
  });

  const dropdownOptions = [
    {
      label: "Edytuj",
      onClick: () => navigate(`/article/edit/${id}`),
      icon: <MdModeEditOutline />,
    },
    {
      label: "Usuń",
      onClick: () => console.log("DELETE"),
      icon: <MdDelete />,
    },
    ...(article?.isVerified
      ? [
          {
            label: "Cofnij weryfikację",
            onClick: () => console.log("UNVERIFY"),
            icon: <TiArrowBack />,
          },
        ]
      : [
          {
            label: "Zweryfikuj",
            onClick: () => console.log("VERIFY"),
            icon: <IoMdCheckmarkCircleOutline />,
          },
        ]),
  ];

if(isFetching && !isLoading){
  return (
    <ArticleDetailsSkeleton/>
  )
}

if (isLoading) {

  return (
 <ArticleDetailsSkeleton>
  <span className="loading loading-dots loading-lg"></span>
 </ArticleDetailsSkeleton>
  )
}


  return (

    <div className="p-12 flex flex-col gap-10">
      <div className="text-sm flex flex-col gap-3.5 text-slate-600 font-semibold">
        <div className="flex gap-1.5">
          {article?.tags?.map((tag) => {
            return (
              <span className="bg-secondary py-0.5 px-1.5 rounded-md text-slate-50">
                {tag?.name}
              </span>
            );
          })}
        </div>
        <div className=" p-2.5 border bg-blue-50 rounded shadow-sm flex items-center justify-between">
          <span className="text-xl">{article?.title}</span>
          <div className="flex items-center gap-4  px-2">
            <span>A {article?._id}</span>
            <Dropdown options={dropdownOptions} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[6fr_2fr] gap-10">
        <div className="flex flex-col gap-8">
      <Collapse header=" Odpowiedź dla pracownika HD">
      <div className="flex flex-col gap-1.5 break-words break-all ">

            <span className="whitespace-pre-wrap  block   min-h-[160px] text-slate-700/92">
              {article?.employeeDescription}
            </span>
          </div>
      </Collapse>

  <Collapse header="Odpowiedz dla pracownika">
  <div className="flex flex-col gap-1.5 break-words break-all ">
        
            <span className="whitespace-pre-wrap whitespace-normal  block  rounded-md min-h-[250px] text-slate-700/92">
              {article?.clientDescription}
            </span>
          </div>
  </Collapse>
        </div>
        <div className=" p-5 h-fit min-h-[300px] sticky top-[74px]  flex flex-col gap-2 ">
          <div className="flex flex-col shadow-md pb-2 px-3 py-1 rounded-md">
            <span className="text-sm text-slate-500 font-semibold">
              Status:{" "}
            </span>

            {article?.isVerified ? (
              <span className="font-semibold flex items-center gap-x-6">
                <IoCheckmarkCircle className="h-5 w-5 text-green-500" />{" "}
                Zweryfikowany
              </span>
            ) : (
              <span className="font-semibold flex items-center gap-x-6">
                <FaCircleXmark className="h-5 w-5 text-rose-700" />
                Nie zweryfikowany
              </span>
            )}
          </div>
          {/*  */}
          <div className="flex flex-col shadow-md pb-2 px-3 py-1 rounded-md">
            <span className="text-sm text-slate-500 font-semibold">
              Dodano:{" "}
            </span>

            <span className="font-semibold flex items-center gap-x-6">
              <FaCalendarCheck className="h-5 w-5 text-slate-600" />
              {utils.formatDate(article?.createdAt)}
            </span>
          </div>
          {/*  */}
          <div className="flex flex-col shadow-md pb-2 px-3 py-1 rounded-md">
            <span className="text-sm text-slate-500 font-semibold">
              Autor:{" "}
            </span>

            <span className="font-semibold flex items-center gap-x-6">
              <IoPerson className="h-5 w-5 text-slate-600" />
              {article?.createdBy?.name} {article?.createdBy?.surname}
            </span>
          </div>
          {/*  */}
          <div className="flex flex-col shadow-md pb-2 px-3 py-1 rounded-md">
            <span className="text-sm text-slate-500 font-semibold">
              liczba odsłon:{" "}
            </span>

            <span className="font-semibold flex items-center gap-x-6">
              <AiFillEye className="h-5 w-5 text-slate-600" />
              {article?.viewsCounter}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
