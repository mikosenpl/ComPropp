import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <>
      <Head>
        <title>ComPropp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>{t('test')}</h1>
      </div>
      <Link href="/home" locale="en">
        <h2>Angielski</h2>
      </Link>
      <Link href="/home" locale="pl">
        <h2>Polski</h2>
      </Link>
    </>
  );
}
