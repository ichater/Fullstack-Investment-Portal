import { ParamKeyValue } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface ConditionallyFilteredParamKeyValue extends ParamKeyValue {
  condition: boolean;
}

export const useQueryString = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const generateNameValues = (
    conditionArr: ConditionallyFilteredParamKeyValue[]
  ): ParamKeyValue[] =>
    conditionArr
      .filter((nameVal) => !!nameVal.condition)
      .map(({ name, value }) => ({
        name,
        value,
      }));

  const createQueryString = (
    nameValuesAdd: ParamKeyValue[],
    clearParams: boolean = false
  ): string => {
    const params = new URLSearchParams(
      searchParams ? searchParams.toString() : ""
    );
    const emptyParams = new URLSearchParams("");

    nameValuesAdd.length && clearParams
      ? nameValuesAdd.forEach(({ name, value }) => emptyParams.set(name, value))
      : nameValuesAdd.forEach(({ name, value }) => params.set(name, value));

    return clearParams ? emptyParams.toString() : params.toString();
  };

  const pushQueryString = (
    nameValuesAdd: ParamKeyValue[],
    clearParams: boolean = false
  ) => {
    const queryString = !!createQueryString(nameValuesAdd, clearParams)
      ? `?${createQueryString(nameValuesAdd, clearParams)}`
      : "";
    return router.push(pathname + queryString);
  };

  return {
    createQueryString,
    generateNameValues,
    pushQueryString,
    searchParams,
    router,
    pathname,
  };
};
