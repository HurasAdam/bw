import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { articlesApi } from "../services/articlesApi";
import { useNavigate, useParams } from "react-router-dom";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaCalendarCheck } from "react-icons/fa";
import { utils } from "../utils";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import { AiFillEye } from "react-icons/ai";
import Dropdown from "../components/core/Dropdown";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TiArrowBack } from "react-icons/ti";
import { AiOutlineStar } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { AiFillStar } from "react-icons/ai";
import ArticleDetailsSkeleton from "../components/ArticleDetailsSkeleton";
import Collapse from "../components/core/Collapse";
import Modal from "../components/core/Modal";
import { useAppContext } from "../contexts/AppContext";
import toast from "react-hot-toast";
import ToastVariant from "../components/core/ToastVariant";
import Breadcrumbs from "../components/core/Breadcrumbs";

const ArticleDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
const {showModal,closeModal,showToast} = useAppContext();

  const { data: article,isLoading,isFetching } = useQuery({
    queryFn: () => {
      return articlesApi.getArticle({ id });
    },
     queryKey:["article",id],
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


  const {mutate:verifyArticleMutation} = useMutation({
    mutationFn: ({id,isVerified}) => articlesApi.verifyArticle({ id,isVerified }),
    onSuccess: ({message}) => {
      queryClient.invalidateQueries(["article",id])
  
      closeModal();
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5 flex ">
            <IoCheckmarkCircle className="w-5 h-5 text-green-500"/>
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Sukces
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {message}
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
             <RxCross2 className="w-4 h-4"/>
            </button>
          </div>
        </div>
      ))
      
    },
    onError: (error) => {
      showToast({message:"Błąd weryfikacji artykułu:", type:"ERROR"});
    console.log(error);
    },
  });
  

  const {mutate:markArticleAsFavouriteMutation} = useMutation({
    mutationFn: ({id}) => articlesApi.markArticleAsFavourite({ id }),
    onSuccess: ({message}) => {
      
      closeModal();
      toast.custom((t) => (
      <ToastVariant t={t} message={message} variant="SUCCESS"/>
      ))
      queryClient.invalidateQueries(["article",id])
      // showToast({message,type:"SUCCESS"})
      
    },
    onError: (error) => {
   
      toast.custom((t) => (
        <ToastVariant t={t} message={error.message} variant="ERROR"/>
        ))
    console.log(error);
    },
  });

  const {mutate:deleteArticleMutation} = useMutation({
    mutationFn: ({id}) => articlesApi.deleteArticle({ id }),
    onSuccess: ({message}) => {
      
      closeModal();
      // queryClient.invalidateQueries(["article",id])
      navigate("/articles");
      toast.custom((t) => (
        <ToastVariant t={t} message={message} variant="SUCCESS"/>
        ))
      
    },
    onError: (error) => {
      showToast({message:"Coś poszło nie tak. Spróbuj ponownie:", type:"ERROR"});
    console.log(error);
    },
  });




  const dropdownOptions = [
    {
      label: "Edytuj",
      onClick: () =>navigate(`/articles/${id}/edit`),
      icon: <MdModeEditOutline />,
    },
    {
      label: `${article?.isFavourite ? "Usuń z ulubionych":"Dodaj do ulubionych"}`,
      onClick: () =>markArticleAsFavouriteMutation({id}),
      icon: article?.isFavourite ? <AiFillStar/>: <AiOutlineStar /> ,
    },
  
  
    ...(article?.isVerified
      ? [
          {
            label: "Cofnij weryfikację",
            onClick: () => showModal({
              isOpen:true, 
              header:"Cofnięcie weryfikacji artykułu ", 
              description:"Czy na pewno chcesz cofnąć weryfikację tego artykułu ? Zostanie on oznaczony jako niezweryfikowany.", 
              type:"WARNING",
              triggerFn:()=>{
                verifyArticleMutation({ id, isVerified: false })
            }}),
            icon: <TiArrowBack />,
          },
        ]
      : [
          {
            label: "Zweryfikuj",
            onClick: () => showModal({
              isOpen:true, 
              header:"Weryfikacja artykułu", 
              description:"Czy na pewno chcesz zweryfikować ten artykuł ? Zostanie on oznaczony jako zweryfikowany.", 
              type:"INFO",
              triggerFn:()=>{
                verifyArticleMutation({ id, isVerified: true })
            }}),
            icon: <IoMdCheckmarkCircleOutline />,
          },
        ]),
        {
          label: "Usuń",
          onClick: () => showModal({
            isOpen:true, 
            header:"Usuń artykuł ", 
            description:"Czy jesteś pewien że chcesz usunąć ten artykuł ? Artykuł zostanie bezpowrtonie usunięty.", 
            type:"DANGER",
            triggerFn:()=>{
              deleteArticleMutation({ id})
          }}),
          icon: <MdDelete />,
        },
        
  ];

if(isFetching && !isLoading){
  return (
    <>
          <div className="p-12 flex flex-col gap-10">
        
      {/* <Modal  verifyModalState={verifyModalState} setVerifyModalState={setVerifyModalState}/> */}
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
          {article?.isFavourite && <AiFillStar className="text-amber-500 w-[18px] h-[18px] "/>}
            <span>A {article?._id}</span>
            <Dropdown options={dropdownOptions} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[6fr_2fr] gap-10">
        <div className="flex flex-col gap-8">
      <Collapse header=" Odpowiedź dla pracownika HD">
      <div className="flex flex-col gap-1.5 break-words break-all ">

            <span className="whitespace-pre-wrap  block   min-h-[200px] text-slate-700/92">
              {article?.employeeDescription}
            </span>
          </div>
      </Collapse>

  <Collapse header="Odpowiedz dla pracownika">
  <div className="flex flex-col gap-1.5 break-words break-all ">
        
            <span className="whitespace-pre-wrap whitespace-normal  block  rounded-md min-h-[350px] text-slate-700/92">
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
                <BsFillQuestionCircleFill className="h-5 w-5 text-secondary" />
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
    </>

    
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
     
      {/* <Modal  verifyModalState={verifyModalState} setVerifyModalState={setVerifyModalState}/> */}
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
          {article?.isFavourite && <AiFillStar className="text-amber-500 w-[18px] h-[18px] "/>}
            <span>A {article?._id}</span>
            <Dropdown options={dropdownOptions} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[6fr_2fr] gap-10">
        <div className="flex flex-col gap-8">
      <Collapse header=" Odpowiedź dla pracownika HD">
      <div className="flex flex-col gap-1.5 break-words break-all ">

            <span className="whitespace-pre-wrap  block   min-h-[200px] text-slate-700/92">
              {article?.employeeDescription}
            </span>
          </div>
      </Collapse>

  <Collapse header="Odpowiedz dla pracownika">
  <div className="flex flex-col gap-1.5 break-words break-all ">
        
            <span className="whitespace-pre-wrap whitespace-normal  block  rounded-md min-h-[350px] text-slate-700/92">
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
                <BsFillQuestionCircleFill className="h-5 w-5 text-secondary" />
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
