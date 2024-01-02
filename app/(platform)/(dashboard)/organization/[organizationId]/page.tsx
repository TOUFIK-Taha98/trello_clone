import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";

const OrganizationIdPage = () => {
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
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
export default OrganizationIdPage;
