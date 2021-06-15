/* eslint-disable react/no-danger */
import Link from 'next/link';
import tw, { styled } from 'twin.macro';
import BrandshareIcon from 'components/core/icons/BrandshareIcon';

const SingleNewsTitle = styled.h1`
  ${tw`my-1 text-center text-3xl lg:text-5xl font-primary font-extrabold leading-tight`}
  &::first-letter {
    ${tw`text-5xl lg:text-7xl leading-5`}
  }
`;

function SingleNewsCategory({ name, href }) {
  return (
    <Link href={href}>
      <a href={href}>
        <div tw="flex justify-center">
          <span tw="mx-auto my-2 uppercase text-xs text-gray-800 tracking-wide font-bold pb-1 border-b-3 border-red-500">
            {name}
          </span>
        </div>
      </a>
    </Link>
  );
}

function SingleNewsExcerpt({ excerpt }) {
  return (
    <div
      tw="my-1 text-center text-base text-gray-700"
      dangerouslySetInnerHTML={{ __html: excerpt }}
    />
  );
}

function SingleNewsDateAndAuthor({ authorName, authorHref, date, formattedDate }) {
  return (
    <div tw="my-2 mx-auto flex items-center space-x-2">
      <time dateTime={date} tw="font-secondary text-sm font-bold text-red-500">
        {formattedDate}
      </time>
      {authorHref && (
        <Link href={authorHref}>
          <a>
            <span tw="cursor-pointer font-secondary text-sm italic text-gray-500">
              {authorName}
            </span>
          </a>
        </Link>
      )}
    </div>
  );
}

export default function SingleNewsHeaderMeta({
  categoryName,
  categoryHref,
  title,
  excerpt,
  authorHref,
  authorName,
  date,
  formattedDate,
  isBrandshare
}) {
  return (
    <div tw="relative bottom-8 lg:bottom-12 flex flex-col p-6 pb-0 bg-white z-10">
      {categoryHref && <SingleNewsCategory href={categoryHref} name={categoryName} />}
      {isBrandshare && (
        <div tw="inline text-center my-2">
          <BrandshareIcon />
        </div>
      )}
      <SingleNewsTitle>{title}</SingleNewsTitle>
      {excerpt && <SingleNewsExcerpt excerpt={excerpt} />}
      <SingleNewsDateAndAuthor
        authorHref={authorHref}
        authorName={authorName}
        date={date}
        formattedDate={formattedDate}
      />
    </div>
  );
}
