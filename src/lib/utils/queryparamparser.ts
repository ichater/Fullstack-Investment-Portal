import { PageState } from "@/types";

export const queryParamParserApi = (
  param: string | string[] | undefined
): string => (!param ? "" : Array.isArray(param) ? param[0] : param);

export const queryParamParserPageState = (
  param: string | null | undefined
): PageState | null => (!!param ? (parseInt(param) as PageState) : null);
