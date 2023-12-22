import { Box, Flex } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { Payout } from "./Payout";

export function Dashboard() {
  return (
    <Flex w="100%" justifyContent="space-between">
      <Sidebar />
      <Box w="calc(100% - 224px)">
        <Navbar />
        <Payout />
      </Box>
    </Flex>
  );
}
