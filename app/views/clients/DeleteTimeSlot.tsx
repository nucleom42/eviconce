import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DeleteTimeSlot = () => {
  const { deleteToken } = useParams();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch(`/api/time_slots/del/${deleteToken}`)
      .then((res) => {
        if (res.ok) {
          setStatus("success");
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  }, [deleteToken]);

  if (status === "loading") return <p>Завантаження...</p>;
  if (status === "success") return <p>Запис видалено ✓</p>;
  return <p>Помилка. Зв'яжіться напряму до компанії щоб відмінити запис.</p>;
};

export default DeleteTimeSlot;
