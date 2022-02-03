import { useRouter } from "next/router";
import { UseUauRouterEnum } from "./use-uau-router.enum";
import { useMemo } from "react";
import { IUseUauRouter } from "./use-uau-router.type";

function useUauRouter(): IUseUauRouter {

  const router = useRouter();

  const pushToConclusion = (): void => {
    router.replace(UseUauRouterEnum.CONCLUSION);
    return
  }

  return useMemo(() => ({
    pushToConclusion,
  }), [
    pushToConclusion,
  ])
}

export default  useUauRouter;
