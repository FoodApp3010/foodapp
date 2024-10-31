"use client";

import React from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import SelectDemo from "../select";
import { cn } from "@/utils";

type FormValues = {
  name: string;
  tel: string;
  restaurantName: string;
  address: string;
  city: string;
  appName: string;
};

const Form = ({ className }: { className?: string }) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm<FormValues>({ defaultValues: { city: undefined } });

  const onSubmit: SubmitHandler<FormValues> = async (formValues) => {
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_API ||
          "https://script.google.com/macros/s/AKfycbx74NbFu4qSInWClTDNUJHHUDJ-TSJcGpf9NDjXnTDrXzFQWLH1IUywYEhf-jVUsW-F/exec",
        {
          redirect: "follow",
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(formValues),
        }
      );

      const data: any = await res.json();

      if (data.status !== "success") {
        alert("Có lỗi xảy ra!");
      }

      if (data.status === "success") {
        reset();
        alert("Đăng ký thành công!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={cn(
        "p-5 lg:p-8 bg-[#000]/10 lg:bg-white/70 w-full lg:max-w-[400px] lg:rounded-xl lg:shadow-lg",
        className
      )}
    >
      <h2 className="uppercase text-[#333] text-lg font-bold text-center">
        Hướng dẫn mở gian hàng, quán ăn trên các nền tảng online
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 mt-5"
      >
        <input
          type="text"
          placeholder="Họ và tên"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <p className="text-red-500">Không được bỏ trống trường này</p>
        )}
        <input
          type="tel"
          placeholder="Số điện thoại"
          {...register("tel", { required: true, min: 10 })}
        />
        {errors.tel && (
          <p className="text-red-500">Không được bỏ trống trường này</p>
        )}

        <input
          type="text"
          placeholder="Tên quán"
          {...register("restaurantName", { required: true })}
        />
        {errors.restaurantName && (
          <p className="text-red-500">Không được bỏ trống trường này</p>
        )}

        <input
          type="text"
          placeholder="Địa chỉ"
          {...register("address", { required: true })}
        />
        {errors.address && (
          <p className="text-red-500">Không được bỏ trống trường này</p>
        )}

        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <SelectDemo value={field.value} onValueChange={field.onChange} />
          )}
        />
        {errors.city && (
          <p className="text-red-500">Không được bỏ trống trường này</p>
        )}

        <input
          type="text"
          placeholder="Ứng dụng cần hỗ trợ đăng ký"
          {...register("appName", { required: true })}
        />
        {errors.appName && (
          <p className="text-red-500">Không được bỏ trống trường này</p>
        )}

        <button
          type="submit"
          className="bg-[#cca332] h-12 hover:opacity-70 transition-all text-white font-bold disabled:opacity-50"
          disabled={!isValid}
        >
          Đăng ký
        </button>
      </form>
      <p className="text-sm mt-3">
        Lưu ý: thông tin bạn cung cấp chỉ được sử dụng cho muc đích hỗ trợ, tư
        vấn khi bạn sử dụng dịch vụ. Chúng tôi không cung cấp thông tin cho bên
        thứ 3
      </p>
    </div>
  );
};

export default Form;
