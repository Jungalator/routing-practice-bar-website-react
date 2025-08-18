export default function SubmitForm({
  handleChangeTelegramForm,
  handleSubmitTelegramForm,
  message,
}) {
  return (
    <div className="mx-auto w-[70%] py-13 border-1 border-amber-200/20 text-center bg-black shadow-xl shadow-black">
      <p className="mb-4 text-white text-xl font-[--small-font]">NEWSLETTER</p>
      <h4 className="mb-4 text-4xl text-amber-200 brightness-77 font-[--small-font]">
        Subscribe To Our Newsletter
      </h4>
      <p className="mb-10 text-white">
        And never miss latest Updates! We are sent your email to our Telegram
        Bot
      </p>
      <form
        onSubmit={handleSubmitTelegramForm}
        className="flex w-[80%] mx-auto "
      >
        <input
          type="email"
          required
          placeholder="Email Adress"
          value={message.email}
          name="email"
          onChange={handleChangeTelegramForm}
          className="mr-7 px-3 h-10 border-1 border-white/50 text-white w-[75%] placeholder-neutral-500 text-sm focus:outline-0"
        />
        <button
          type="submit"
          className="h-10 w-[20%] text-sm font-semibold bg-amber-200/80 cursor-pointer hover:bg-amber-200 hover:brightness-60 duration-150"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}
