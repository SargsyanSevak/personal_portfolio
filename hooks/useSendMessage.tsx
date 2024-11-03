"use client";
import { messageSchema } from "@/schemas/message.schema";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type TSendMessageType = z.infer<typeof messageSchema>;
const useSendMessage = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TSendMessageType>({
    mode: "onSubmit",

    resolver: zodResolver(messageSchema),
  });

  const handleFormSubmit = async (data: TSendMessageType) => {
    if (data) {
      console.log(data);
      return reset();
    }
  };

  return {
    control,
    errors,
    handleSubmit,
    reset,
    handleFormSubmit,
  };
};

export default useSendMessage;
