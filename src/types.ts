import { WebUi } from "../mod.ts";
import { loadLib } from "./lib.ts";

export type Usize = number | bigint;

export type BindCallback<
  T extends JSONValue | undefined | void,
> = (
  event: WebUiEvent,
) => T | Promise<T>;

export interface WebUiEvent {
  window: WebUi;
  eventType: number;
  element: string;
  data: string;
}

export type WebUiLib = Awaited<ReturnType<typeof loadLib>>;

export type JSONValue =
  | string
  | number
  | boolean
  | { [x: string]: JSONValue | undefined }
  | JSONValue[];