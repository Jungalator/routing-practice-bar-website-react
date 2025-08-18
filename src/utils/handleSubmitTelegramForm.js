import { useEffect } from "react";

export function handleSubmitTelegramForm() {
  const url = `https://api.telegram.org/bot8287961080:AAHKqL5z6SSFYKmx-sXsoJbrExVOCsNv518/sendMessage`;
  useEffect(() => {
    const fetchMessageToBot = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            chat_id: 6340616709,
            text: message,
          }),
        });

        if (response.ok) {
          console.log("Сообщение отправлено");
          form.reset();
        } else {
          console.log(
            `Ошбика при отправке формы: ${response.status}, ${response.statusText}`
          );
        }
      } catch (error) {
        console.log(`Ошибка при отправке сообщения: ${error}`);
      }
    };
    return fetchMessageToBot();
  });
}
