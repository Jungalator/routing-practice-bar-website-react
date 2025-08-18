import LabelBorder from "./LabelBorder/LabelBorder";
import SubmitForm from "./SubmitForm/SubmitForm";
import SubmitText from "./SubmitText/SubmitText";

export default function SubmitSection({
  handleChangeTelegramForm,
  handleSubmitTelegramForm,
  message,
}) {
  return (
    <section className="bg-[url(images/submitSectionBg.jpg)] pb-20 bg-cover">
      <LabelBorder />
      <SubmitText />
      <SubmitForm
        handleChangeTelegramForm={handleChangeTelegramForm}
        handleSubmitTelegramForm={handleSubmitTelegramForm}
        message={message}
      />
    </section>
  );
}
