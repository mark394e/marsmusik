import { useRouter } from "next/router";

export default function Anchor({ href, className, children }) {
  const router = useRouter();

  return (
    <a
      //For at undlade prefetch, bruger vi preventDefault v. click
      onClick={(e) => {
        e.preventDefault();
        router.push(href);
      }}
      href={href}
      className={className}
    >
      {children}
    </a>
  );
}
