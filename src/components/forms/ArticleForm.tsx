import React, { useMemo, useRef } from "react";
import { useForm } from "react-hook-form";
import TextBox from "../core/TextBox";
import Button from "../core/Button";
import * as types from "../../types/index";
import Select from "react-select";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdOutlineNotInterested } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import { HiMiniXMark } from "react-icons/hi2";

interface ILoginFormProps {
  onSave: (formData: types.ILoginFormData) => void;
  errorMessage?: string;
}

const ArticleForm: React.FC<ILoginFormProps> = ({
  onSave,
  errorMessage,
  tags,
}) => {
  const {
    watch,
    setValue,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      title: "",
      employeeDescription: "",
      clientDescription: "",
      tags: [],
      isVerified: false,
    },
    mode: "onChange",
  });

  const handleChange = (selectedOptions): void => {
    const selectedTags = selectedOptions.map((option) => ({
      _id: option.value,
      name: option.label,
    }));

    setValue("tags", selectedTags);
  };

  const tagOptions = useMemo(
    () =>
      tags?.map((tag) => ({
        value: tag._id,
        label: tag.name,
      })),
    [tags]
  );
  const xd = watch("isVerified");
  console.log(xd);

  const isVerified = xd;

  const onSubmit = handleSubmit((data) => {
    onSave(data);
  });

  return (
    <form
      onSubmit={onSubmit}
      className="form-container grid grid-cols-[7fr_3fr] gap-x-14 gap-y-8 py-10 bg-white w-full h-full"
    >
      <div className="flex flex-col gap-10 h-fit">
        <TextBox
          placeholder="Jak dodać wycieczkę ?"
          type="text"
          name="title"
          label="Tytuł"
          className="w-full rounded-lg"
          register={register("title", {
            required: "Tytuł jest wymagany",
          })}
          error={errors.title ? errors.title.message : ""}
        />

        

        {errorMessage && (
          <span className="block text-center font-semibold text-sm text-rose-600">
            {errorMessage}
          </span>
        )}

        <div>
          <label className=" block mb-1.5 " htmlFor="employeeDescription">
            Odpowiedź dla pracownika
          </label>
          <textarea
            style={{
              minHeight: "260px",
              maxHeight: "300px",
              resize: "none",
              overflow: "auto",
            }}
            id="employeeDescription"
            placeholder="opis dla pracownika HD"
            className=" border-slate-300   py-2 px-2.5 block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...register("employeeDescription", {
              required: {
                value: true,
                message: "Opis dla pracownika jest wymagany",
              },
              minLength: {
                value: 6,
                message: "Password length must be at least 6 characters",
              },
            })}
          />
          {errors.employeeDescription && (
            <span className="text-[11px] text-rose-500 font-semibold mt-0.5">
              {errors.employeeDescription.message}
            </span>
          )}
        </div>
        <div>
          <label className=" block mb-1.5 " htmlFor="clientDescription">
            Odpowiedź dla klienta
          </label>
          <textarea
            style={{
              minHeight: "400px",
              maxHeight: "400px",
              resize: "none",
              overflow: "auto",
            }}
            id="clientDescription"
            placeholder="wiadomosc dla klienta"
            className="w-full  border-zinc-400  py-2  block  rounded-md border-0 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
            {...register("clientDescription", {
              required: {
                value: true,
                message: "Odpowiedz dla klienta jest wymagana",
              },
              minLength: {
                value: 6,
                message: "Password length must be at least 6 characters",
              },
            })}
          />
          {errors.clientDescription && (
            <span className="text-[11px] text-rose-500 font-semibold mt-0.5">
              {errors.clientDescription.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-5">
     
        {/*  */}

        <div className="grid-row-5 gap-3 md:grid-cols-2 md:gap-3 lg:grid relative ">
          {[
            { label: "Zweryfikowany", value: true },
            { label: "Nie zwerryfikowany", value: false },
          ].map((option) => {
            const isSelected = String(isVerified) === String(option.value);
            console.log(isSelected);
            return (
              <label
              htmlFor={option.label}
              key={option.value.toString()}
              className={`text-sm flex gap-1 text-gray-700 cursor-pointer rounded p-4 mt-3 truncate md:mt-2 ${
                isSelected
                  ? option.label === "Zweryfikowany"
                    ? "bg-green-700/70 text-white font-bold"
                    : "bg-rose-800/65 text-white font-bold"  // Zmieniono na właściwy warunek dla "Nie zweryfikowany"
                  : "bg-slate-300 text-gray-700"           // Styl dla niezaznaczonych opcji
              }`}
            >
                <input
                  type="radio"
                  {...register("isVerified", {
                    required: "Określ poziom doświadczenia",
                  })}
                  name="isVerified"
                  id={option?.label}
                  value={option?.value}
                  className="hidden"
                />
                {option?.label === "Zweryfikowany" ? (
                  <span className="flex items-center w-full justify-center gap-x-8">
                    {" "}
                    <GiCheckMark className="w-5 h-5 text-green-600" />{" "}
                    Zweryfikowany
                  </span>
                ) : (
                  <span className="flex items-center w-full justify-center gap-x-8">
                    {" "}
                    <HiMiniXMark className="w-5 h-5 text-rose-700" />{" "}
                    Nie zweryfikowany
                  </span>
                )}
              </label>
            );
          })}
          {errors?.isVerified && (
            <span className="text-xs text-rose-600 absolute bottom-[-20px]">
              {errors?.isVerified?.message}
            </span>
          )}
        </div>
        <div>
          <label className=" block mb-1.5 " htmlFor="tags">
            Wybierz Tag
          </label>
          <Select
            id="tags"
            closeMenuOnSelect={true}
            options={tagOptions}
            isMulti={true}
            isSearchable={true}
            placeholder="Wybierz Tag"
            onChange={handleChange}
          />
        </div>
        {/*  */}
      </div>

      <Button
        type="submit"
        label="Utwórz"
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      />
    </form>
  );
};

export default ArticleForm;
