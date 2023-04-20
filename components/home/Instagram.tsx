import Image from 'next/image';
import Link from 'next/link';

const instagramArray = [
  {
    id: '1',
    link: 'https://www.instagram.com/p/CnyS3HPOt7U/',
    alt: 'woman laying on massage table',
    src: '/images/instagram-image-1.png',
  },
  {
    id: '2',
    link: 'https://www.instagram.com/p/CpHeFXpgK4V/',
    alt: 'woman laying on massage table',
    src: '/images/instagram-image-2.png',
  },
  {
    id: '3',
    link: 'https://www.instagram.com/p/Cm5TWaSAXT3/',
    alt: 'woman laying on massage table',
    src: '/images/instagram-image-3.png',
  },
  {
    id: '4',
    link: 'https://www.instagram.com/p/Cpl_OcOoAAj/',
    alt: 'woman laying on massage table',
    src: '/images/instagram-image-4.png',
  },
];

const Instagram = () => {
  return (
    <div className="flex items-center flex-wrap justify-evenly gap-4 w-screen bg-zinc-200 pb-10 p-2 sm:p-10 z-20">
      {instagramArray.map(({ id, link, alt, src }) => (
        <a
          href={link}
          key={id}
          target="_blank"
          rel="noopener noreferrer"
          className=" h-80  border border-black relative bg-zinc-800 basis-1/2 sm:basis-1/3 lg:basis-1/5 flex-grow flex gap-4 justify-center cursor-pointer"
        >
          <Image
            alt={alt}
            src={src}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            className="object-cover"
            fill={true}
          ></Image>
        </a>
      ))}
    </div>
  );
};

export default Instagram;
