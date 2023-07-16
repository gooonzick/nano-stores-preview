import {
  Card,
  CardBody,
  Checkbox,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { removeTodo } from "../model/todos";

type Props = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const TodoItem = ({ completed, id, title, userId }: Props) => {
  return (
    <Card>
      <CardBody display="flex" justifyContent="space-between">
        <Checkbox checked={completed}>
          <Heading>{title}</Heading>
        </Checkbox>
        <IconButton aria-label="delete todo" onClick={() => removeTodo(id)}>
          <DeleteIcon />
        </IconButton>
      </CardBody>
    </Card>
  );
};
