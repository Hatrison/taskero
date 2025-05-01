import { Suspense } from "react";

type Props = {
  fallback: React.ReactNode;
  children: React.ReactNode;
};

const SuspenseWrapper = ({ fallback, children }: Props) => {
  return <Suspense fallback={fallback}>{children}</Suspense>;
};

export default SuspenseWrapper;
