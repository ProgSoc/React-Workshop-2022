import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TodoProvider } from "./providers/provider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </ChakraProvider>
  </React.StrictMode>
);
