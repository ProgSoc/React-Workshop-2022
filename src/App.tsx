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
import { useTodo } from "./providers/provider";

function App() {
  interface NewTodo {
    content: string;
  }

  const { register, handleSubmit } = useForm<NewTodo>();

  const { todos, addTodo, toggleTodo } = useTodo();

  const onSubmit: SubmitHandler<NewTodo> = (data: NewTodo) => {
    console.log("submit");
    addTodo(data.content);
  };

  const { toggleColorMode, colorMode } = useColorMode();

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
              onChange={(e) => toggleTodo(todo.id, e.target.checked)}
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
