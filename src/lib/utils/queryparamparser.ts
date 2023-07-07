export const queryParamParser = (
  param: string | string[] | undefined
): string => (!param ? "" : Array.isArray(param) ? param[0] : param);
