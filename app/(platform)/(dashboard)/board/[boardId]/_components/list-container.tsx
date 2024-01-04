"use client";

import { ListWithCards } from "@/types";
import { List } from "@prisma/client";

interface ListContainerProps {
  data: ListWithCards[];
  boardId: string;
}
const ListContainer = ({ data, boardId }: ListContainerProps) => {
  return <div>ListContainer</div>;
};
export default ListContainer;
