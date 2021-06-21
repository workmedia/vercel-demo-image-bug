import SingleNewsHeaderMeta from 'components/news/Single/HeaderMeta';
import Image from 'next/image';

export default function SingleNewsMainHeader({
  imageSrc,
  imageAltText,
  categoryName,
  categoryHref,
  title,
  excerpt,
  date,
  formattedDate,
  authorHref,
  authorName,
  isBrandshare
}) {
  console.log({ imageSrc, imageAltText });

  return (
    <>
      <div tw="grid grid-cols-12 gap-x-6">
        <div tw="col-span-2" />
        <div tw="col-span-12 md:col-span-8 md:col-start-2 lg:col-start-3">
          <div tw="relative pb-3/4 md:pb-3/5">
            <Image tw="absolute object-cover" layout="fill" src={imageSrc} alt={imageAltText} />
          </div>
        </div>
        <div tw="col-span-2" />
      </div>
      <div tw="px-0 md:px-5">
        {/* Grid do header da notícia */}
        <div tw="grid grid-cols-12 gap-x-6">
          <div tw="hidden lg:col-span-3" />
          <div tw="col-span-10 col-start-2 col-end-12 md:col-span-6 md:col-start-2 lg:col-start-4 md:col-end-10 lg:col-end-10">
            <SingleNewsHeaderMeta
              isBrandshare={isBrandshare}
              authorHref={authorHref}
              authorName={authorName}
              categoryHref={categoryHref}
              categoryName={categoryName}
              date={date}
              formattedDate={formattedDate}
              title={title}
              excerpt={excerpt}
            />
          </div>
          <div tw="col-span-1 md:col-span-3" />
        </div>
      </div>
    </>
  );
}
