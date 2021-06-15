import Link from 'next/link';

export default function HomePage() {
  return (
    <div tw="mt-40">
      <div tw="text-center m-12 text-red-500 text-2xl">
        <Link href="/2020/03/27/michael-sorkin-1948-2020-coronavirus-volta-a-deixar-a-arquitectura-de-luto">
          <a>Click here to go to the page with the bug</a>
        </Link>
      </div>
      <div tw="text-center m-12 text-green-500 text-2xl">
        <Link href="/2021/06/13/carvalho-araujo-desenha-nova-casa-dos-bombeiros-de-braga">
          <a>Click here to go to the page with no bug</a>
        </Link>
      </div>
    </div>
  );
}
