import Link from "next/link";

type MGButtonPropTypes = {
  children: any;
  link?: string;
  thirdPartyLink?: string;
  size?: string;
};

export const MGButton = (props: MGButtonPropTypes) => {
  const { children, link, thirdPartyLink, size } = props;

  if (thirdPartyLink && size === "small") {
    return (
      <a href={`${thirdPartyLink}`} target="_blank" rel="noopener noreferrer">
        <button className=" custom-box-shadow  bg-zinc-100 text-black  w-20 h-8 hover:bg-black hover:text-zinc-100">
          {children}
        </button>
      </a>
    );
  }
  if (size === "small") {
    return (
      <button className=" custom-box-shadow text-xl bg-zinc-100 text-black  w-20 h-12 hover:bg-black hover:text-zinc-100">
        {children}
      </button>
    );
  }

  if (thirdPartyLink) {
    return (
      <a href={`${thirdPartyLink}`} target="_blank" rel="noopener noreferrer">
        <button className=" custom-box-shadow text-xl bg-zinc-100 text-black  w-32 h-12 hover:bg-black hover:text-zinc-100">
          {children}
        </button>
      </a>
    );
  }

  if (link) {
    return (
      <Link
        href={`${link}`}
        className="mt-20 custom-box-shadow text-xl bg-zinc-100 text-black  w-32 h-12 hover:bg-black hover:text-zinc-100"
      >
        {children}
      </Link>
    );
  }

  return (
    <button className="mt-20 custom-box-shadow text-xl bg-zinc-100 text-black  w-32 h-12 hover:bg-black hover:text-zinc-100">
      {children}
    </button>
  );
};

export const FormSubmitButton = ({ children }: any) => {
  return (
    <button className=" text-base bg-zinc-100 border border-black text-black  w-24 h-ful hover:bg-black hover:text-zinc-100">
      {children}
    </button>
  );
};