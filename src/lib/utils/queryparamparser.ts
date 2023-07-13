import { PageState } from "@/types";

export const queryParamParserApi = (
  param: string | string[] | undefined
): string => (!param ? "" : Array.isArray(param) ? param[0] : param);

export const queryParamParserPageState = (
  param: string | null | undefined
): PageState => (!!param ? parseInt(param) : 10) as PageState;
