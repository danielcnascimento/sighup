import { useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import { IUseUAURouter } from "./use-uau-router.type";
import { UseUauRouterEnum } from "./use-uau-router.enum";

function useUAURouter(): IUseUAURouter {

  const router = useRouter();

  const pushToConclusion = useCallback(() => (
    router.replace(UseUauRouterEnum.CONCLUSION)
  ), [])

  return useMemo(() => ({
    pushToConclusion,
  }), [
    pushToConclusion,
  ])
}

export default  useUAURouter;
