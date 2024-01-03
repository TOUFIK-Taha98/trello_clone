import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";
import FormDelete from "./FormDelete";

interface BoardProps {
  title: string;
  id: string;
}

const Board = ({ title, id }: BoardProps) => {
  const handleDeleteBoardWithId = deleteBoard.bind(null, id);
  return (
    <form
      action={handleDeleteBoardWithId}
      className="flex items-center gap-x-2"
    >
      <p>Board title: {title}</p>
      <FormDelete />
    </form>
  );
};

export default Board;
