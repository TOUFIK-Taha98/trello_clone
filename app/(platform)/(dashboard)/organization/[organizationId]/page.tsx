const OrganizationIdPage = () => {
  async function create(formData: FormData) {
    "use server";

    console.log("I'm triggered");
  }
  return (
    <div>
      <form action={create}>
        <input
          id="title"
          name="title"
          type="text"
          required
          placeholder="Enter a board title"
          className="border-black border pt-1"
        />
      </form>
    </div>
  );
};
export default OrganizationIdPage;
