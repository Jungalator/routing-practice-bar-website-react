export const fetchMessageToBot = async (message, setMessage) => {
  try {
    const response = await fetch("/api/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: `New subscribe: ${message.email}`,
      }),
    });
    const data = await response.json();
    if (response.ok && data.ok) {
      console.log("Сообщение отправлено: ", data.result.text);
      setMessage((prev) => ({ ...prev, email: "" }));
    } else {
      console.log(
        `Ошбика при отправке формы: ${response.status}, ${response.statusText}`
      );
    }
  } catch (error) {
    console.log(`Ошибка при отправке сообщения: ${error}`);
  }
};
