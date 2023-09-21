import "@testing-library/jest-dom";
import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useQueryString } from "../useQueryString";
import Link from "next/link";
import { ParamKeyValue } from "@/types";

jest.mock("next/navigation");
const pushMock = jest.fn();

usePathname.mockReturnValue("test.com");
useRouter.mockReturnValue({
  push: pushMock,
});

function setup({
  paramKeyValues = [],
}: {
  paramKeyValues?: ParamKeyValue[] | [];
}) {
  render(<TestComponent paramKeyValues={paramKeyValues} />);

  const heading = screen.getByRole("heading", { level: 1 });
  const routerPushBtn = screen.getByText("Push Params");
  const addParamBtn = screen.getByText("Add Param");
  const clearAndPushBtn = screen.getByText("Clear params and push");
  const link = screen.getByRole("link");

  return { heading, routerPushBtn, addParamBtn, clearAndPushBtn, link };

  function TestComponent({
    paramKeyValues = [],
  }: {
    paramKeyValues?: ParamKeyValue[] | [];
  }) {
    const { pushQueryString, createQueryString, pathname } = useQueryString();

    const [keyValues, setKeyValues] = useState<ParamKeyValue[] | []>([]);

    const onClick = () => {
      if (keyValues.length < paramKeyValues.length) {
        setKeyValues((arr) => [...arr, paramKeyValues[keyValues.length]]);
      }
    };

    const queryString = !!createQueryString(keyValues)
      ? `?${createQueryString(keyValues)}`
      : "";

    return (
      <>
        <h1>Test Component</h1>
        <button onClick={() => onClick()}>Add Param</button>
        <button onClick={() => pushQueryString(keyValues)}> Push Params</button>
        <button
          onClick={() => {
            setKeyValues([]);
            pushQueryString([], true);
          }}
        >
          Clear params and push{" "}
        </button>
        <Link href={pathname + queryString}></Link>
      </>
    );
  }
}

describe("useQueryString hook", () => {
  it("renders test component", () => {
    const { heading, routerPushBtn, link, addParamBtn, clearAndPushBtn } =
      setup({
        paramKeyValues: [],
      });

    expect(heading).toBeInTheDocument();
    expect(routerPushBtn).toBeInTheDocument();
    expect(addParamBtn).toBeInTheDocument();
    expect(clearAndPushBtn).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });
  it("instantiates next navigation hooks", () => {
    setup({ paramKeyValues: [] });

    expect(useSearchParams).toHaveBeenCalled();
    expect(usePathname).toHaveBeenCalled();
    expect(useRouter).toHaveBeenCalled();
  });

  it("router.push called with no params when none are provided", () => {
    const { routerPushBtn } = setup({
      paramKeyValues: [],
    });

    fireEvent.click(routerPushBtn);

    expect(pushMock).toHaveBeenCalledWith(`test.com`);
  });

  it("router.push called with no params when params are provided but not added", () => {
    const { routerPushBtn } = setup({
      paramKeyValues: [
        { name: "test", value: "value" },
        { name: "another", value: "param" },
      ],
    });

    fireEvent.click(routerPushBtn);

    expect(pushMock).toHaveBeenCalledWith(`test.com`);
  });

  it("router.push called with  params when params are provided and added", () => {
    const { routerPushBtn, addParamBtn } = setup({
      paramKeyValues: [
        { name: "test", value: "value" },
        { name: "another", value: "param" },
      ],
    });

    fireEvent.click(routerPushBtn);

    expect(pushMock).toHaveBeenCalledWith(`test.com`);

    fireEvent.click(addParamBtn);
    fireEvent.click(routerPushBtn);

    expect(pushMock).toHaveBeenCalledWith(`test.com?test=value`);

    fireEvent.click(addParamBtn);
    fireEvent.click(routerPushBtn);

    expect(pushMock).toHaveBeenCalledWith(`test.com?test=value&another=param`);
  });
  it("router.push called with no params when clear params is specified", () => {
    const { routerPushBtn, addParamBtn, clearAndPushBtn } = setup({
      paramKeyValues: [
        { name: "test", value: "value" },
        { name: "another", value: "param" },
      ],
    });

    fireEvent.click(addParamBtn);
    fireEvent.click(addParamBtn);
    fireEvent.click(routerPushBtn);

    expect(pushMock).toHaveBeenCalledWith(`test.com?test=value&another=param`);

    fireEvent.click(clearAndPushBtn);

    expect(pushMock).toHaveBeenCalledWith(`test.com`);
  });

  it("adds the correct link/parameters to the link as key values are added", () => {
    const { addParamBtn, link } = setup({
      paramKeyValues: [
        { name: "test", value: "value" },
        { name: "another", value: "param" },
      ],
    });

    expect(link).toHaveAttribute("href", "test.com");
    fireEvent.click(addParamBtn);
    expect(link).toHaveAttribute("href", "test.com?test=value");
    fireEvent.click(addParamBtn);
    expect(link).toHaveAttribute("href", "test.com?test=value&another=param");
  });

  it("adds the correct link/parameters to the link as key values are added and deletes them when the values are cleared", () => {
    const { addParamBtn, link, clearAndPushBtn } = setup({
      paramKeyValues: [
        { name: "test", value: "value" },
        { name: "another", value: "param" },
      ],
    });

    expect(link).toHaveAttribute("href", "test.com");
    fireEvent.click(addParamBtn);
    fireEvent.click(addParamBtn);
    expect(link).toHaveAttribute("href", "test.com?test=value&another=param");

    fireEvent.click(clearAndPushBtn);
    expect(link).toHaveAttribute("href", "test.com");
  });
});
