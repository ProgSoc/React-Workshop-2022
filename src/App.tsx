import { PlusSquareIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Checkbox,
  Code,
  Container,
  Divider,
  Flex,
  Heading,
  IconButton,
  Input,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "./redux";
import { addTodo, toggleTodo } from "./redux/todo.slice";
function App() {
  interface NewTodo {
    content: string;
  }

  const { register, handleSubmit } = useForm<NewTodo>();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<NewTodo> = (data: NewTodo) => {
    console.log("submit");
    dispatch(addTodo({ id: Date.now(), text: data.content, completed: false }));
  };

  const { toggleColorMode, colorMode } = useColorMode();

  const todos = useAppSelector((s) => s.todo.todos);

  return (
    <Container height="100vh" overflowY={"scroll"}>
      <Heading>Todo</Heading>
      <Divider />
      <Stack>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex>
            <Input
              placeholder="Add a new todo"
              {...register("content", { required: true })}
            />
            <IconButton
              icon={<PlusSquareIcon />}
              aria-label={"add todo"}
              type="submit"
            />
          </Flex>
        </form>
        {todos.map((todo) => (
          <Box
            key={todo.id}
            p={2}
            borderRadius="lg"
            borderWidth={"1px"}
            as={motion.div}
            bgColor={todo.completed ? "green.100" : "blackAlpha"}
          >
            <Text color={"grey"}>{todo.text}</Text>
            <Checkbox
              isChecked={todo.completed}
              onChange={(e) => dispatch(toggleTodo(todo.id))}
            />
          </Box>
        ))}
      </Stack>
      <Code>
        <pre>{JSON.stringify(todos, undefined, 2)}</pre>
      </Code>
      <Button
        onClick={toggleColorMode}
        pos="absolute"
        left="1em"
        bottom={"1em"}
      >
        Change theme
      </Button>
    </Container>
  );
}

export default App;
