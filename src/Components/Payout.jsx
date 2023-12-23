import { Box, Flex, Select, Text } from "@chakra-ui/react";
import { TableContent } from "./TableContent";
import { useState } from "react";

export function Payout() {
  const [method, setMethod] = useState("payout");

  return (
    <Box w="100%" h="90vh" p="25px" bg="#FAFAFA" overflow="auto">
      <Flex flexDirection="column" alignItems="flex-start" gap="32px">
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          gap="24px"
          alignSelf="stretch"
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
            alignSelf="stretch"
          >
            <Text
              fontSize="20px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="28px"
            >
              Overview
            </Text>

            <Select
              width="137px"
              h="36px"
              flexShrink="0"
              borderRadius="4px"
              border="1px solid #D9D9D9"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="24px"
              bg="#fff"
              color="#4D4D4D"
            >
              <option value="month">This Month</option>
              <option value="week">This Week</option>
              <option value="year">This Year</option>
            </Select>
          </Flex>

          <Flex alignItems="flex-start" gap="20px" alignSelf="stretch">
            <Flex
              h="154px"
              flexDirection="column"
              alignItems="flex-start"
              gap="16px"
              borderRadius="8px"
              bg="#146EB4"
              alignSelf="stretch"
            >
              <Flex
                p="20px"
                flexDirection="column"
                alignItems="flex-start"
                gap="16px"
                alignSelf="stretch"
              >
                <Flex alignItems="center" gap="8px">
                  <Text
                    color="#fff"
                    fontFamily="Inter"
                    fontStyle="normal"
                    fontWeight="400px"
                    lineHeight="24px"
                  >
                    Next Payout
                  </Text>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_39208_34111)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.8856 11.6358C8.8856 12.1266 8.48772 12.5245 7.9969 12.5245C7.50609 12.5245 7.1082 12.1266 7.1082 11.6358C7.1082 11.145 7.50609 10.7471 7.9969 10.7471C8.48772 10.7471 8.8856 11.145 8.8856 11.6358Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.99921 3.89508C7.47557 3.69776 7.99975 3.64614 8.50545 3.74673C9.01115 3.84732 9.47567 4.09561 9.84026 4.4602C10.2048 4.82479 10.4531 5.2893 10.5537 5.79501C10.6543 6.30071 10.6027 6.82488 10.4054 7.30124C10.2081 7.7776 9.87392 8.18475 9.44521 8.47121C9.16624 8.65761 8.85538 8.78746 8.53019 8.85542V8.96969C8.53019 9.26425 8.29141 9.50303 7.99685 9.50303C7.7023 9.50303 7.46352 9.26425 7.46352 8.96969V8.37723C7.46352 8.23578 7.51971 8.10012 7.61973 8.0001C7.71975 7.90008 7.85541 7.84389 7.99685 7.84389C8.3015 7.84389 8.5993 7.75356 8.8526 7.58431C9.1059 7.41506 9.30332 7.1745 9.4199 6.89304C9.53648 6.61159 9.56699 6.30189 9.50756 6.0031C9.44812 5.70431 9.30142 5.42986 9.08601 5.21444C8.87059 4.99903 8.59614 4.85233 8.29735 4.7929C7.99856 4.73347 7.68886 4.76397 7.40741 4.88055C7.12596 4.99713 6.8854 5.19456 6.71615 5.44786C6.5469 5.70116 6.45656 5.99896 6.45656 6.3036C6.45656 6.59815 6.21778 6.83693 5.92323 6.83693C5.62867 6.83693 5.38989 6.59815 5.38989 6.3036C5.38989 5.78799 5.54279 5.28396 5.82924 4.85525C6.1157 4.42653 6.52285 4.09239 6.99921 3.89508Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.99687 1.86745C4.60953 1.86745 1.86354 4.61343 1.86354 8.00078C1.86354 11.3881 4.60953 14.1341 7.99687 14.1341C11.3842 14.1341 14.1302 11.3881 14.1302 8.00078C14.1302 4.61343 11.3842 1.86745 7.99687 1.86745ZM0.796875 8.00078C0.796875 4.02433 4.02042 0.800781 7.99687 0.800781C11.9733 0.800781 15.1969 4.02433 15.1969 8.00078C15.1969 11.9772 11.9733 15.2008 7.99687 15.2008C4.02042 15.2008 0.796875 11.9772 0.796875 8.00078Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_39208_34111">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Flex>

                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  alignSelf="stretch"
                >
                  <Text
                    fontSize="32px"
                    fontStyle="normal"
                    fontWeight="500"
                    lineHeight="38px"
                    color="#fff"
                  >
                    ₹2,312.23
                  </Text>

                  <Flex>
                    <Text
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="500"
                      lineHeight="24px"
                      textDecoration="underline"
                      color="#fff"
                    >
                      23 orders
                    </Text>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.95696 5.29289C9.34748 4.90237 9.98064 4.90237 10.3712 5.29289L16.3712 11.2929C16.5587 11.4804 16.6641 11.7348 16.6641 12C16.6641 12.2652 16.5587 12.5196 16.3712 12.7071L10.3712 18.7071C9.98065 19.0976 9.34748 19.0976 8.95696 18.7071C8.56643 18.3166 8.56643 17.6834 8.95696 17.2929L14.2498 12L8.95696 6.70711C8.56643 6.31658 8.56643 5.68342 8.95696 5.29289Z"
                        fill="white"
                      />
                    </svg>
                  </Flex>
                </Flex>
              </Flex>

              <Flex
                w="370.67px"
                p="10px 20px"
                justifyContent="space-between"
                alignItems="flex-start"
                borderRadius="8px"
                bg="#0E4F82"
              >
                <Text
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="20px"
                  color="#fff"
                >
                  Next payout date:
                </Text>

                <Text
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="20px"
                  color="#fff"
                >
                  Today, 04:00PM
                </Text>
              </Flex>
            </Flex>

            <Flex
              p="20px"
              flexDirection="column"
              alignItems="flex-start"
              gap="16px"
              flex="1 0 0"
              borderRadius="8px"
              bg="#fff"
              boxShadow="0px 2px 6px 0px rgba(26, 24, 30, 0.04)"
            >
              <Flex
                flexDirection="column"
                alignItems="flex-start"
                gap="16px"
                alignSelf="stretch"
              >
                <Flex alignItems="center" gap="8px">
                  <Text
                    fontSize="16px"
                    fontFamily="Inter"
                    fontStyle="normal"
                    fontWeight="400px"
                    lineHeight="24px"
                  >
                    Next Payout
                  </Text>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.54966 11.6358C9.54966 12.1266 9.15178 12.5245 8.66096 12.5245C8.17015 12.5245 7.77227 12.1266 7.77227 11.6358C7.77227 11.145 8.17015 10.7471 8.66096 10.7471C9.15178 10.7471 9.54966 11.145 9.54966 11.6358Z"
                      fill="#4D4D4D"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.66328 3.89508C8.13964 3.69776 8.66381 3.64614 9.16951 3.74673C9.67521 3.84732 10.1397 4.09561 10.5043 4.4602C10.8689 4.82479 11.1172 5.2893 11.2178 5.79501C11.3184 6.30071 11.2668 6.82488 11.0694 7.30124C10.8721 7.7776 10.538 8.18475 10.1093 8.47121C9.8303 8.65761 9.51944 8.78746 9.19425 8.85542V8.96969C9.19425 9.26425 8.95547 9.50303 8.66092 9.50303C8.36637 9.50303 8.12758 9.26425 8.12758 8.96969V8.37723C8.12758 8.23578 8.18377 8.10012 8.28379 8.0001C8.38381 7.90008 8.51947 7.84389 8.66092 7.84389C8.96556 7.84389 9.26336 7.75356 9.51666 7.58431C9.76996 7.41506 9.96738 7.1745 10.084 6.89304C10.2005 6.61159 10.2311 6.30189 10.1716 6.0031C10.1122 5.70431 9.96549 5.42986 9.75007 5.21444C9.53466 4.99903 9.2602 4.85233 8.96141 4.7929C8.66263 4.73347 8.35292 4.76397 8.07147 4.88055C7.79002 4.99713 7.54946 5.19456 7.38021 5.44786C7.21096 5.70116 7.12062 5.99896 7.12062 6.3036C7.12062 6.59815 6.88184 6.83693 6.58729 6.83693C6.29274 6.83693 6.05395 6.59815 6.05395 6.3036C6.05395 5.78799 6.20685 5.28396 6.49331 4.85525C6.77976 4.42653 7.18692 4.09239 7.66328 3.89508Z"
                      fill="#4D4D4D"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.66094 1.86745C5.27359 1.86745 2.5276 4.61343 2.5276 8.00078C2.5276 11.3881 5.27359 14.1341 8.66094 14.1341C12.0483 14.1341 14.7943 11.3881 14.7943 8.00078C14.7943 4.61343 12.0483 1.86745 8.66094 1.86745ZM1.46094 8.00078C1.46094 4.02433 4.68449 0.800781 8.66094 0.800781C12.6374 0.800781 15.8609 4.02433 15.8609 8.00078C15.8609 11.9772 12.6374 15.2008 8.66094 15.2008C4.68449 15.2008 1.46094 11.9772 1.46094 8.00078Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </Flex>

                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  alignSelf="stretch"
                >
                  <Text
                    fontSize="32px"
                    fontStyle="normal"
                    fontWeight="500"
                    lineHeight="38px"
                  >
                    ₹92,312.20
                  </Text>

                  <Flex>
                    <Text
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="500"
                      lineHeight="24px"
                      textDecoration="underline"
                      color="#146EB4"
                    >
                      13 orders
                    </Text>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.62102 5.29289C9.01154 4.90237 9.64471 4.90237 10.0352 5.29289L16.0352 11.2929C16.2228 11.4804 16.3281 11.7348 16.3281 12C16.3281 12.2652 16.2228 12.5196 16.0352 12.7071L10.0352 18.7071C9.64471 19.0976 9.01154 19.0976 8.62102 18.7071C8.23049 18.3166 8.23049 17.6834 8.62102 17.2929L13.9139 12L8.62102 6.70711C8.23049 6.31658 8.23049 5.68342 8.62102 5.29289Z"
                        fill="#146EB4"
                      />
                    </svg>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>

            <Flex
              p="20px"
              flexDirection="column"
              alignItems="flex-start"
              gap="16px"
              flex="1 0 0"
              borderRadius="8px"
              bg="#fff"
              boxShadow="0px 2px 6px 0px rgba(26, 24, 30, 0.04)"
            >
              <Flex
                flexDirection="column"
                alignItems="flex-start"
                gap="16px"
                alignSelf="stretch"
              >
                <Flex alignItems="center" gap="8px">
                  <Text
                    fontSize="16px"
                    fontFamily="Inter"
                    fontStyle="normal"
                    fontWeight="400px"
                    lineHeight="24px"
                  >
                    Amount Processed
                  </Text>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.54966 11.6358C9.54966 12.1266 9.15178 12.5245 8.66096 12.5245C8.17015 12.5245 7.77227 12.1266 7.77227 11.6358C7.77227 11.145 8.17015 10.7471 8.66096 10.7471C9.15178 10.7471 9.54966 11.145 9.54966 11.6358Z"
                      fill="#4D4D4D"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.66328 3.89508C8.13964 3.69776 8.66381 3.64614 9.16951 3.74673C9.67521 3.84732 10.1397 4.09561 10.5043 4.4602C10.8689 4.82479 11.1172 5.2893 11.2178 5.79501C11.3184 6.30071 11.2668 6.82488 11.0694 7.30124C10.8721 7.7776 10.538 8.18475 10.1093 8.47121C9.8303 8.65761 9.51944 8.78746 9.19425 8.85542V8.96969C9.19425 9.26425 8.95547 9.50303 8.66092 9.50303C8.36637 9.50303 8.12758 9.26425 8.12758 8.96969V8.37723C8.12758 8.23578 8.18377 8.10012 8.28379 8.0001C8.38381 7.90008 8.51947 7.84389 8.66092 7.84389C8.96556 7.84389 9.26336 7.75356 9.51666 7.58431C9.76996 7.41506 9.96738 7.1745 10.084 6.89304C10.2005 6.61159 10.2311 6.30189 10.1716 6.0031C10.1122 5.70431 9.96549 5.42986 9.75007 5.21444C9.53466 4.99903 9.2602 4.85233 8.96141 4.7929C8.66263 4.73347 8.35292 4.76397 8.07147 4.88055C7.79002 4.99713 7.54946 5.19456 7.38021 5.44786C7.21096 5.70116 7.12062 5.99896 7.12062 6.3036C7.12062 6.59815 6.88184 6.83693 6.58729 6.83693C6.29274 6.83693 6.05395 6.59815 6.05395 6.3036C6.05395 5.78799 6.20685 5.28396 6.49331 4.85525C6.77976 4.42653 7.18692 4.09239 7.66328 3.89508Z"
                      fill="#4D4D4D"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.66094 1.86745C5.27359 1.86745 2.5276 4.61343 2.5276 8.00078C2.5276 11.3881 5.27359 14.1341 8.66094 14.1341C12.0483 14.1341 14.7943 11.3881 14.7943 8.00078C14.7943 4.61343 12.0483 1.86745 8.66094 1.86745ZM1.46094 8.00078C1.46094 4.02433 4.68449 0.800781 8.66094 0.800781C12.6374 0.800781 15.8609 4.02433 15.8609 8.00078C15.8609 11.9772 12.6374 15.2008 8.66094 15.2008C4.68449 15.2008 1.46094 11.9772 1.46094 8.00078Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </Flex>

                <Text
                  fontSize="32px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="38px"
                >
                  ₹23,92,312.19
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          flexDirection="column"
          alignItems="flex-start"
          gap="20px"
          mt="10px"
          w="100%"
        >
          <Flex flexDirection="column" alignItems="flex-start" gap="20px">
            <Text
              fontSize="20px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="28px"
            >
              Transactions | This Month
            </Text>

            <Flex alignItems="flex-start" gap="12px">
              <Flex
                p="6px 16px"
                alignItems="center"
                gap="6px"
                borderRadius="40px"
                bg={method === "payout" ? "#146EB4" : "#e6e6e6"}
                color={method === "payout" ? "#fff" : "#808080"}
                fontFamily="Inter"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="20px"
                cursor="pointer"
                onClick={() => setMethod("payout")}
              >
                Payouts (22)
              </Flex>

              <Flex
                p="6px 16px"
                alignItems="center"
                gap="6px"
                borderRadius="40px"
                bg={method !== "payout" ? "#146EB4" : "#e6e6e6"}
                color={method !== "payout" ? "#fff" : "#808080"}
                fontFamily="Inter"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="20px"
                cursor="pointer"
                onClick={() => setMethod("refund")}
              >
                Refunds (2)
              </Flex>
            </Flex>
          </Flex>

          <TableContent method={method} />
        </Flex>
      </Flex>
    </Box>
  );
}
