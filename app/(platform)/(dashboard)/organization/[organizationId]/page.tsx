import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import Board from "./Board";

const OrganizationIdPage = async () => {
  const boards = await db.board.findMany();

  console.log(boards);
  return (
    <div className="flex flex-col space-y-4">
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

      <div className="space-y-2">
        {boards.map((board) => (
          <Board id={board.id} title={board.title} key={board.id} />
        ))}
      </div>
    </div>
  );
};
export default OrganizationIdPage;
