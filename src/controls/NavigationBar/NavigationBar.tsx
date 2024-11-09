import { Link } from 'preact-router/match';
import { useMemo } from 'preact/hooks';

const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Contact',
    path: 'mailto:hello@delgaudio.dev',
    target: '_blank',
  },
];

export function NavigationBar() {
  const navLinks = useMemo(() => {
    return links.map(link => {
      return (
        <li key={link.name}>
          <Link
            activeClassName={'!text-black'}
            href={link.path}
            target={link?.target ?? '_self'}
            class="block py-2 rounded md:hover:bg-transparent md:border-0 hover:text-gray-700 md:p-0 dark:hover:text-gray-500 dark:hover:bg-transparent focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-gray-300 dark:focus-visible:ring-gray-500 focus:outline-none text-gray-400"
          >
            {link.name}
          </Link>
        </li>
      );
    });
  }, [links]);

  return (
    <header class="flex items-center justify-between text-sm tracking-[.15em] uppercase mb-8">
      <nav>
        <ul class="flex items-center gap-4">{navLinks}</ul>
      </nav>
    </header>
  );
}
