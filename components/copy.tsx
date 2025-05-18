'use client'

import { useAtom } from 'jotai';
import { atomWithReducer } from 'jotai/utils'
import { CheckIcon, CopyIcon } from "lucide-react";

type CopyState = {
  markdown: boolean;
  html: boolean;
};

const copyAtom = atomWithReducer({markdown: false, html: false}, (state: CopyState, action: { type: keyof CopyState, to: boolean }) => {
  const { type, to } = action;
  switch (type) {
    case "markdown":
      return { ...state, markdown: to };
    case "html":
      return { ...state, html: to };
    default:
      return state;
  }
});

export const useCopy = () => {
  const [copyState, setCopyState] = useAtom(copyAtom);

  const copyToClipboard = (text: string, type: "markdown" | "html") => {
    navigator.clipboard.writeText(text);
    setCopyState({ type, to: true });

    setTimeout(() => {
      setCopyState({ type, to: false });
    }, 2000);
  };

  return { copyToClipboard, copyState };
}

export function CopyCheckIconMarkdown(){
  const { copyState } = useCopy();
  if(copyState.markdown){
    return (
      <CheckIcon className="size-4" />
    );
  }
  return <CopyIcon className="size-4" />
}

export function CopyCheckIconHTML(){
  const { copyState } = useCopy();
  if(copyState.html){
    return (
      <CheckIcon className="size-4" />
    );
  }
  return <CopyIcon className="size-4" />
}
