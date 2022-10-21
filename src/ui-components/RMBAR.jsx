/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Icon, Image, Text } from "@aws-amplify/ui-react";
export default function RMBAR(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="20px"
      width="1440px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="5px"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(10,207,131,1)"
      {...rest}
      {...getOverrideProps(overrides, "RMBAR")}
    >
      <Flex
        gap="2px"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo")}
      >
        <Icon
          width="44px"
          height="42px"
          viewBox={{ minX: 0, minY: 0, width: 44, height: 42 }}
          paths={[
            {
              d: "M21.1268 1.56441C21.5083 0.880918 22.4917 0.880917 22.8732 1.56441L27.4319 9.73185C27.6385 10.102 28.056 10.3016 28.4738 10.2301L37.8303 8.62879C38.6115 8.49508 39.2304 9.28005 38.9181 10.0085L35.2679 18.522C35.0964 18.9219 35.2032 19.3868 35.532 19.6717L42.5906 25.7889C43.1936 26.3115 42.9717 27.2953 42.2026 27.5083L33.1031 30.0292C32.6886 30.1441 32.394 30.511 32.3714 30.9405L31.8856 40.1964C31.8444 40.9812 30.9558 41.414 30.3126 40.9626L22.5744 35.5325C22.2297 35.2906 21.7703 35.2906 21.4256 35.5325L13.6875 40.9626C13.0442 41.414 12.1556 40.9812 12.1144 40.1964L11.6286 30.9405C11.606 30.511 11.3114 30.1441 10.8969 30.0292L1.79737 27.5083C1.02834 27.2953 0.806386 26.3115 1.40944 25.7889L8.46798 19.6717C8.7968 19.3868 8.90361 18.9219 8.73215 18.522L5.08193 10.0085C4.76959 9.28005 5.38845 8.49508 6.16971 8.62879L15.5262 10.2301C15.944 10.3016 16.3615 10.102 16.5681 9.73185L21.1268 1.56441Z",
              fill: "rgba(162,89,255,1)",
              fillRule: "nonzero",
            },
          ]}
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Star 1")}
        ></Icon>
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="400"
          color="rgba(229,229,229,1)"
          textTransform="capitalize"
          lineHeight="37.5px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="PLANWIZ"
          {...getOverrideProps(overrides, "PLANWIZ")}
        ></Text>
      </Flex>
      <Flex
        gap="40px"
        width="100%"
        alignItems="center"
        grow="1"
        height="64px"
        overflow="hidden"
        position="relative"
        borderRadius="5px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32129767076")}
      >
        <Flex
          gap="10px"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          height="64px"
          position="relative"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          padding="10px 10px 10px 10px"
          backgroundColor="rgba(242,78,30,1)"
          {...getOverrideProps(overrides, "Frame 418")}
        >
          <Flex
            gap="10px"
            width="fit-content"
            alignItems="flex-start"
            shrink="0"
            height="44px"
            position="relative"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "Frame 419")}
          >
            <Text
              fontFamily="Roboto"
              fontSize="24px"
              fontWeight="400"
              color="rgba(245,245,245,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.09px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="ADD PLAN"
              {...getOverrideProps(overrides, "ADD PLAN")}
            ></Text>
          </Flex>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children=" "
          {...getOverrideProps(overrides, "Text")}
        ></Text>
      </Flex>
      <Flex
        gap="32px"
        width="100%"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        height="45px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32129767081")}
      >
        <Button
          display="flex"
          gap="0"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="40px"
          position="relative"
          backgroundColor="rgba(54,94,61,1)"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Log out"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
        <Image
          width="45px"
          height="45px"
          shrink="0"
          position="relative"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="160px"
          padding="0px 0px 0px 0px"
          src="https://img.icons8.com/color/50/000000/dog"
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
    </Flex>
  );
}
